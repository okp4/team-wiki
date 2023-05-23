---
sidebar_position: 5
sidebar_label: "Naming rules"
hide_table_of_contents: true
---

# Naming rules

This page collects all the naming rules & convention for several project "items".

## Project

### Git repository

**Rules**

The rules are:

- contains only lowercase alphanumeric characters or '-'
- start with an alphanumeric character
- end with an alphanumeric character

**Examples**

✔️ good

> - okp4d
> - platform-cloud

✖️ bad

> - amazing_repo
> - 12-labors-of-hercules
> - kIkOoLol

### Branches

The branch names shall follow the following format:

**Rules**

```sh
<type>/<name>
```

where:

- `type`: can take the following values:

| Prefix     | Type                     | Description                                                                                                         |
| ---------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `fix`      | Bug Fixes                | A branch for bug fixes                                                                                              |
| `feat`     | Features                 | A branch for new feature(s)                                                                                         |
| `build`    | Builds                   | A branch for changes that affect the build system (`npm`, `mavem`, `poetry`)                                        |
| `ci`       | Continuous Integrations  | A branch for changes to the CI configuration files and scripts (e.g. `github actions`)                              |
| `docs`     | Documentation            | A branch for documentation only changes                                                                             |
| `style`    | Styles                   | A branch for changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| `refactor` | Code Refactoring         | A branch for a code change that neither fixes a bug nor adds a feature                                              |
| `perf`     | Performance Improvements | A branch for a code change that improves performance                                                                |
| `test`     | Tests                    | A branch for adding missing tests or correcting existing tests                                                      |
| `chore`    | Chores                   | A branch for any other changes that don't modify src or test files                                                  |

- `name`: the purpose of the branch, contains only lowercase alphanumeric characters or '-'

**Examples**

> - feat/allow-user-to-download-images
> - fix/fix-download-issues
> - refactor/use-a-state-monad
> - docs/correct-spellings

### Commit messages

**Rules**

The commit messages must conform to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification.

```sh
<type>[scope][!]: <description>

[body]
```

where:

- `type`: can take the following values:

| Prefix     | Type                     | Description                                                                                            |
| ---------- | ------------------------ | ------------------------------------------------------------------------------------------------------ |
| `fix`      | Bug Fixes                | A bug fix                                                                                              |
| `feat`     | Features                 | A new feature                                                                                          |
| `build`    | Builds                   | Changes that affect the build system (`npm`, `mavem`, `poetry`)                                        |
| `ci`       | Continuous Integrations  | Changes to our CI configuration files and scripts (`github actions`)                                   |
| `docs`     | Documentation            | Documentation only changes                                                                             |
| `style`    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| `refactor` | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                              |
| `perf`     | Performance Improvements | A code change that improves performance                                                                |
| `test`     | Tests                    | Adding missing tests or correcting existing tests                                                      |
| `chore`    | Chores                   | Other changes that don't modify src or test files                                                      |

- `scope`: (optional) noun describing a section of the codebase surrounded by parenthesis (e.g. `fix(parser):`)
- `!`: (optional) when present, indicate a breaking change
- `description`: a short summary of the code changes, starting with a _verb_ (e.g. `fix: consider array parsing when multiple spaces were contained in string`)
- `body`: (optional) paragraph to share additional contextual information about the code changes, when difficult to understand without details

**Rules**:

- **Limit** the subject line to **50** characters.
- **Do not capitalize** the subject line.
- **Do not** end the subject line with a **period**.
- Use the **imperative mood** (present tense), i.e. “change” not “changed” nor “changes”.
- Describe the **intent**, the **motivation** of the commit.

**Examples**

✔️ good

> - ci(workflow): add a linter for R code source
> - feat(report): implement sharing of user reports
> - feat(lang): add german language
> - chore(project): add license

✖️ bad

> - feat: update
> - fix: fix issue
> - chore: minor change

### Versionning

**Rules**

The versioning of all items follow the [Semantic Versioning 2.0.0](https://semver.org/).

A git tag shall be in the form:

```sh
v<major>.<minor>.<patch>
```

where:

- `major`: Incompatible API changes.
- `minor`: New functionality in a backwards-compatible manner.
- `patch`: Backwards-compatible bug fixes.

**Examples**

> - v1.0.3
> - v3.14.16

## Artifacts

### Docker

**Rules**

The structure of a docker image name is the following:

```sh
$REGISTRY/okp4/$REPOSITORY:$TAG
```

where:

- `REGISTRY`: The targeted docker registry (i.e. `ghcr.io`).
- `REPOSITORY`: The name of the git repository in the nominal case.
- `TAG`: The tag names are strongly coupled with the internal codebase ref:
  - git tag will produce `x.y.z`, `x.y`, `x` and `latest` docker tags
  - `main` branch will produce a `nightly` docker tag
  - other branch will produce a `$branch_name` docker tag replacing `/` by `-`

**Examples**

> - ghcr.io/okp4/okp4d:nightly
> - ghcr.io/okp4/ontology:1.0.1
> - ghcr.io/okp4/okp4bi:ci-fix-doker-tag

### NPM

**Rules**

The structure of an npm package is defined by its `name`, its `version` and its `dist-tags`:

The structure of an npm package `name` is the following:

```sh
@okp4/$REPOSITORY
```

where:

- `REPOSITORY`: The name of the git repository in the nominal case.

**Examples**

> - @okp4/ui

The structure of an npm package `version` is the following:

```sh
$SEMVER[-$DIST_TAG.$TIMESTAMP]
```

where:

- `SEMVER`: The name of the current package.json version.
- `DIST-TAG`: The sliding dist-tag associated with the version, see its rules in the next section.

**Examples**

> - 1.0.0
> - 1.0.1-next.1646212564
> - 1.2.1-fix-whatever.1646212564

The possibles npm package `dist-tag` are the following:

- `latest`: Follow production versions, in that case it doesn't appear in the version name as.
- `next`: Follow `main` branch versions.
- `$BRANCH_NAME`: Follow `$BRANCH_NAME` branch versions replacing `/` by `-`.

**Examples**

> - latest
> - next
> - fix-whatever
