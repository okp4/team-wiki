---
sidebar_position: 6
sidebar_label: "CI/CD"
hide_table_of_contents: true
---

# CI/CD

Ce document fournit des détails de conception sur la façon dont CI/CD est mis en œuvre pour OKP4, mais il doit également être considéré comme des lignes directrices lors de la création de nouveaux dépôts.

## Introduction

Avant d'entrer dans les détails, il est important de définir l'objectif de ces concepts. L'intégration continue (CI) et le déploiement continu (CD) sont des pratiques utilisées pour combler le fossé entre les développements et les opérations en automatisant chaque tâche dans ce fossé:

- Analyse de la qualité du code
- Construction
- Publication d'artefacts
- Mise en production
- Déploiement

Ces automatisations sont cruciales dans un environnement Cloud pour assurer le contrôle et la sécurité sur ce qui est produit et comment il est livré, en automatisant les tâches sensibles nous réduisons les risques d'erreur humaine et augmentons la fréquence de livraison.

Ces pratiques étant transversales tout le monde doit en être conscient, c'est une partie de la culture DevOps à laquelle tout le monde doit contribuer.

## Bot-Anik

Plus qu'un simple bot, [bot-anik](https://github.com/bot-anik) possède son propre compte GitHub et incarne la culture DevOps. Il agit, dans chaque automatisation, comme la personne qui exécute les tâches (par exemple en publiant des artefacts, en poussant des tags, etc...).

![bot-anik](https://avatars.githubusercontent.com/u/98603954?v=4)

Chaque intégration liée aux développements ou aux opérations doit être représentée par elle.

## Flux de l'IC

Toutes les automatisations concernant le CI sont exécutées à travers les actions GitHub par dépôt.

Vous pouvez trouver une collection de workflows réutilisables dans notre [dépôt de collection](https://github.com/okp4/actions),n'hésitez pas à contribuer et à améliorer nos recettes de workflow.

Les principales étapes du processus de développement déclencheront des actions, les flux de travail standard avec leurs déclencheurs sont décrits ci-après. Ils décrivent très bien les cas nominaux, mais cette liste n'est pas exhaustive car il existe des cas particuliers qui nécessitent des considérations spécifiques.

### Lint

`.github/workflows/lint.yml`: Fait partie de l'analyse de la qualité du code, assure l'homogénéité de la base de code. Les linters peuvent varier en fonction de la typologie du projet. Lorsque plusieurs linters sont appliqués sur un projet (ce qui devrait être le cas), envisagez de les définir comme des tâches distinctes du même flux de travail `Lint`.

> Triggers:
>
> - `pull_request` update
> - `main` push
> - new tag
> - other workflow (i.e. it is a release step)

Voici un flux d'actions GitHub réutilisable qui peut être pris comme recette de base pour linting de la base de code, en fonction de la typologie de votre projet, vous pouvez trouver des tâches que vous pouvez ajouter [ici](https://github.com/okp4/actions/blob/main/src/.github/workflows/lint.yml):

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

`.github/workflows/test.yml`: Exécute les tests présents dans la base de code.

> Triggers:
>
> - `pull_request` update
> - `main` push
> - new tag
> - other workflow (i.e. it is a release step)

Voici un flux d'actions GitHub réutilisable qui peut être pris comme recette de base pour tester la base de code, en fonction de la typologie de votre projet, vous pouvez trouver des tâches que vous pouvez ajouter [ici](https://github.com/okp4/actions/blob/main/src/.github/workflows/test.yml):

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

### Construire

`.github/workflows/build.yml`: Construire les différents artefacts produits à partir de la base de code.

> Triggers:
>
> - `pull_request` update
> - `main` push
> - new tag
> - other workflow (i.e. it is a release step)

Voici un flux d'actions GitHub réutilisable qui peut être pris comme une recette de base pour construire vos artefacts, en fonction de la typologie de votre projet, vous pouvez trouver des tâches que vous pouvez ajouter [ici](https://github.com/okp4/actions/blob/main/src/.github/workflows/build.yml):

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

### Publier

`.github/workflows/publish.yml`: Publier les différents artefacts produits sur les paquets GitHub. Il gère, en fonction du déclencheur, les versions livrées conformément aux règles de nommage des artefacts.

> Triggers:
>
> - `pull_request` update
> - `main` push
> - new tag

Voici un flux d'actions GitHub réutilisable qui peut être pris comme recette de base pour publier des artefacts conformément à nos règles, en fonction de la typologie de votre projet, vous pouvez trouver des tâches que vous pouvez ajouter [ici](https://github.com/okp4/actions/blob/main/src/.github/workflows/publish.yml):

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

`.github/workflows/release.yml`: La release consiste à fixer la version de la base de code en:

- Mettre à jour les versions des dépendances internes
- Générer un changelog basé sur les commits
- Augmenter le numéro de version en fonction des commits
- Marquer le dépôt et créer une version GitHub

En définissant l'étiquette, les autres flux de travail seront déclenchés.

Pour simplifier ces tâches, nous utilisons [semantic-release](https://github.com/semantic-release/semantic-release), voici un exemple de fichier `.releaserc.yml` (si la version doit être définie dans la base de code, utilisez le plugin `@google/semantic-release-replace-plugin`):

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

Voici un flux d'actions GitHub réutilisable qui peut être pris comme recette de base pour publier votre projet:

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
