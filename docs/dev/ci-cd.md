---
sidebar_position: 6
sidebar_label: "CI/CD"
hide_table_of_contents: true
---

# CI/CD

This document provides design details on how CI/CD is implemented @okp4, but it shall also be considered as guidelines when forging new repositories.

## Introduction

Before entering in the details it is important to define what purpose is served by those concepts. The CI (i.e. Continuous Integration) and the CD (Continuous Deployment|Delivery) are practices used to fill the ditch between developments and operations by automating every task in that gap:

- Code quality analysis
- Build
- Artifact publication
- Release
- Deployment

Those automations are crucial in a Cloud environment to ensure control and security on what is produced and how it is delivered, by automating sensible tasks we reduce the risks of human error and increase the delivery frequency.

Those practices being transversal everyone must be aware of them, it's a part of the DevOps culture that everyone shall contribute to.

## Bot-Anik

More than a simple bot, [bot-anik](https://github.com/bot-anik) has its own GitHub account and embodies the DevOps culture. It acts, in every automation as the person executing the tasks (e.g. publishing artifacts, pushing tags, etc...).

![bot-anik](https://avatars.githubusercontent.com/u/98603954?v=4)

Every integration linked to either developments or operations shall be represented by her.

## CI Flows

Every automations regarding the CI are executed through GitHub Actions scoped per repository.

You can find a collection of reusable workflows in our [collection repository](https://github.com/okp4/actions), feel free to contribute and enhance our workflow recipes.

The main steps of the development process will trigger actions, the standard workflows with their trigger are described hereafter. They describe the nominal cases very well, but this list isn't exhaustive as special cases exist and needs custom considerations.

### Lint

`.github/workflows/lint.yml`: Part of the code quality analysis, ensure the homogeneity of the codebase. The linters can vary depending on the project typology. When multiple linters are applied on a project (it should be) consider setting them as separate jobs of the same `Lint` workflow.

> Triggers:
>
> - `pull_request` update
> - `main` push
> - new tag
> - other workflow (i.e. it is a release step)

Here is a reusable GitHub actions workflow that can be taken as a base recipe for linting the codebase, depending on your project typology you can find some jobs you might add [here](https://github.com/okp4/actions/blob/main/src/.github/workflows/lint.yml):

```yaml
name: Lint

on:
  # Let the release workflow trigger it
  workflow_call:

  push:
    branches: [main]

  pull_request:
    branches: [main]

concurrency:
  group: lint-${{ github.ref }}
  cancel-in-progress: true

jobs:
  lint-xxx:
    runs-on: ubuntu-20.04
    steps: []
```

### Test

`.github/workflows/test.yml`: Executes the tests present in the codebase.

> Triggers:
>
> - `pull_request` update
> - `main` push
> - new tag
> - other workflow (i.e. it is a release step)

Here is a reusable GitHub actions workflow that can be taken as a base recipe for testing the codebase, depending on your project typology you can find some jobs you might add [here](https://github.com/okp4/actions/blob/main/src/.github/workflows/test.yml):

```yaml
name: Test

on:
  # Let the release workflow trigger it
  workflow_call:

  push:
    branches: [main]

  pull_request:
    branches: [main]

concurrency:
  group: test-${{ github.ref }}
  cancel-in-progress: true

jobs:
  test-xxx:
    runs-on: ubuntu-20.04
    steps: []
```

### Build

`.github/workflows/build.yml`: Build the different artifacts produced from the codebase.

> Triggers:
>
> - `pull_request` update
> - `main` push
> - new tag
> - other workflow (i.e. it is a release step)

Here is a reusable GitHub actions workflow that can be taken as a base recipe for building your artifacts, depending on your project typology you can find some jobs you might add [here](https://github.com/okp4/actions/blob/main/src/.github/workflows/build.yml):

```yaml
name: Build

on:
  # Let the release workflow trigger it
  workflow_call:

  push:
    branches: [main]

  pull_request:
    branches: [main]

concurrency:
  group: build-${{ github.ref }}
  cancel-in-progress: true

jobs:
  build-xxx:
    runs-on: ubuntu-20.04
    steps: []
```

### Publish

`.github/workflows/publish.yml`: Publish the different produced artifacts on the GitHub Packages.

> Triggers:
>
> - `pull_request` update
> - `main` push
> - new tag

Here is a reusable GitHub actions workflow that can be taken as a base recipe for publishing artifacts in accordance with our [[rules|Naming Rules#Artifacts]], depending on your project typology you can find some jobs you might add [here](https://github.com/okp4/actions/blob/main/src/.github/workflows/publish.yml):

```yaml
name: Publish

on:
  push:
    branches: [main]
    tags: ["v*"]

  pull_request:
    branches: [main]

concurrency:
  group: publish-${{ github.ref }}
  cancel-in-progress: true

jobs:
  publish-xxx:
    runs-on: ubuntu-20.04
    steps: []
```

### Release

`.github/workflows/release.yml`: The release consists in fixing the version of the codebase by:

- Updating internal dependency versions
- Generating changelog based on commits
- Bump version number based on commits
- Tag the repository and create a GitHub release

By setting the tag the other workflows will be triggered.

To simplify those tasks we use [semantic-release](https://github.com/semantic-release/semantic-release), here is a sample `.releaserc.yml` (if the version shall be set in the codebase, use the `@google/semantic-release-replace-plugin`):

```yaml
branches:
  - main

plugins:
  - "@semantic-release/commit-analyzer"
  - "@semantic-release/release-notes-generator"
  - - "@semantic-release/changelog"
    - changelogFile: CHANGELOG.md
      changelogTitle: "# ØKP4 protocol changelog"
  - "@semantic-release/github"
  - - "@semantic-release/git"
    - assets:
        - CHANGELOG.md
      message: "chore(release): perform release ${nextRelease.version}"
```

> Triggers:
>
> - `bot-anik` dispatch

Here is a reusable GitHub actions workflow that can be taken as a base recipe to release your project:

```yaml
name: Release

on:
  workflow_dispatch:

jobs:
  lint:
    if: github.ref == 'refs/heads/main' && github.actor == 'bot-anik'
    uses: ./.github/workflows/lint.yml

  build:
    if: github.ref == 'refs/heads/main' && github.actor == 'bot-anik'
    uses: ./.github/workflows/build.yml

  test:
    if: github.ref == 'refs/heads/main' && github.actor == 'bot-anik'
    uses: ./.github/workflows/test.yml

  perfom-release:
    if: github.ref == 'refs/heads/main' && github.actor == 'bot-anik'
    needs:
      - lint
      - build
      - test
    runs-on: ubuntu-20.04
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
        with:
          token: ${{ secrets.OKP4_TOKEN }}

      - name: Release project
        uses: cycjimmy/semantic-release-action@v2
        with:
          semantic_version: 19.0.2
          branch: main
          extra_plugins: |
            @semantic-release/changelog
            @semantic-release/exec
            @semantic-release/git
        env:
          GITHUB_TOKEN: ${{ secrets.OKP4_TOKEN }}
          GIT_AUTHOR_NAME: ${{ secrets.OKP4_BOT_GIT_AUTHOR_NAME }}
          GIT_AUTHOR_EMAIL: ${{ secrets.OKP4_BOT_GIT_AUTHOR_EMAIL }}
          GIT_COMMITTER_NAME: ${{ secrets.OKP4_BOT_GIT_COMMITTER_NAME }}
          GIT_COMMITTER_EMAIL: ${{ secrets.OKP4_BOT_GIT_COMMITTER_EMAIL }}
```
