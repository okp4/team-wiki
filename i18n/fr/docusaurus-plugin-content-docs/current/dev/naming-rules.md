---
sidebar_position: 5
sidebar_label: "Règles de nommage"
hide_table_of_contents: true
---

# Règles de nommage

TCette page rassemble toutes les règles et conventions de dénomination pour plusieurs "éléments" du projet.

## Projet

### Dépôt Git

**Règles de nommage**

Les règles sont les suivantes:

- ne contient que des caractères alphanumériques minuscules ou des "-".
- commence par un caractère alphanumérique
- se termine par un caractère alphanumérique

**Exemples**

✔️ bon

> - okp4d
> - platform-cloud

✖️ mauvais

> - amazing_repo
> - 12-labors-of-hercules
> - kIkOoLol

### Branches

Les noms des branches doivent respecter le format suivant:

**Règles**

```sh
<type>/<name>
```

où :

- `type`: peut prendre les valeurs suivantes :

| Prefix     | Type                          | Description                                                                                                                         |
| ---------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `fix`      | Bug Fixes                     | Une branche pour les corrections de bugs                                                                                            |
| `feat`     | Features                      | Une branche pour les nouvelles fonctionnalités                                                                                      |
| `build`    | Builds                        | Branche pour les changements qui affectent le système de build (`npm`, `mavem`, `poetry`)                                           |
| `ci`       | Continuous Integrations       | Une branche pour les modifications apportées aux fichiers de configuration et aux scripts de CI (par exemple, les `github actions`) |
| `docs`     | Documentation                 | Une branche pour les changements concernant la documentation uniquement                                                             |
| `style`    | Styles                        | Une branche pour les changements qui n'affectent pas le sens du code (espaces blancs, formatage, points-virgules manquants, etc)    |
| `refactor` | Refactorisation de code       | AUne branche pour un changement de code qui ne corrige pas de bug et n'ajoute pas de fonctionnalité.                                |
| `perf`     | Amélioration des performances | Branche pour un changement de code qui améliore les performances.                                                                   |
| `test`     | Tests                         | Une branche pour ajouter des tests manquants ou corriger des tests existants                                                        |
| `chore`    | Chores                        | Une branche pour tout autre changement qui ne modifie pas les fichiers src ou test                                                  |

- `name`: le but de la branche, contient uniquement des caractères alphanumériques minuscules ou '-'

**Exemples**

> - feat/allow-user-to-download-images
> - fix/fix-download-issues
> - refactor/use-a-state-monad
> - docs/correct-spellings

### Messages commit

**Règles**

Les messages de commit doivent être conformes à la spécification des [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

```sh
<type>[scope][!]: <description>

[body]
```

où :

- `type`: peut prendre les valeurs suivantes :

| Prefix     | Type                          | Description                                                                                                           |
| ---------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `fix`      | Corrections de bugs           | Une correction de bugs                                                                                                |
| `feat`     | Features                      | Une nouvelle fonctionnalité                                                                                           |
| `build`    | Builds                        | CModifications affectant le système de build (`npm`, `mavem`, `poetry`)                                               |
| `ci`       | Intégrations Continues        | Modifications des fichiers de configuration et des scripts de notre système d'intégration continue (`github actions`) |
| `docs`     | Documentation                 | Changements concernant la documentation uniquement                                                                    |
| `style`    | Styles                        | Changements qui n'affectent pas la signification du code (espace blanc, formatage, points-virgules manquants, etc)    |
| `refactor` | Refactorisation du code       | Modification du code qui ne corrige pas de bug et n'ajoute pas de fonctionnalité.                                     |
| `perf`     | Amélioration des performances | Modification du code qui améliore les performances                                                                    |
| `test`     | Tests                         | Ajout de tests manquants ou correction de tests existants                                                             |
| `chore`    | Chores                        | Autres changements qui ne modifient pas les fichiers src ou test                                                      |

- `scope`: (optionnel) nnom décrivant une section de la base de code entouré de parenthèses (par exemple `fix(parser):`)
- `!`: (optionnel) lorsqu'il est présent, indique un changement de rupture
- `description`: : un court résumé des modifications du code, commençant par un _verbe_ (e.g. `fix: consider array parsing when multiple spaces were contained in string`)
- `body`: (optionnel) pparagraphe pour partager des informations contextuelles supplémentaires sur les modifications du code, lorsqu'elles sont difficiles à comprendre sans détails.

**Règles**:

- **Limiter** la ligne d'objet à **50** caractères.
- **Ne pas mettre de majuscules** à la ligne d'objet.
- **Ne pas** terminer la ligne d'objet par un **point**.
- Utiliser **l'impérati**f (temps présent), c'est-à-dire "changer" et non "changed" ou "changes".
- Décrivez l**'intention**, la **motivation** de l'engagement.

**Exemples**

✔️ bon

> - ci(workflow): add a linter for R code source
> - feat(report): implement sharing of user reports
> - feat(lang): add german language
> - chore(project): add license

✖️ mauvais

> - feat: update
> - fix: fix issue
> - chore: minor change

### Versionning

**Règles**

Le versionnement de tous les éléments suit le [Semantic Versioning 2.0.0](https://semver.org/).

Une balise git doit se présenter sous la forme suivante :

```sh
v<major>.<minor>.<patch>
```

où:

- `major`: Changements d'API incompatibles.
- `minor`: Nouvelles fonctionnalités rétrocompatibles.
- `patch`: Corrections de bugs rétrocompatibles.

**Exemples**

> - v1.0.3
> - v3.14.16

## Artifacts

### Docker

**Règles**

La structure d'un nom d'image Docker est la suivante:

```sh
$REGISTRY/okp4/$REPOSITORY:$TAG
```

où:

- `REGISTRY`: Le registre Docker ciblé (c.-à-d. `ghcr.io`).
- `REPOSITORY`: Le nom du dépôt git dans le cas nominal.
- `TAG`: TLes noms des tags sont fortement couplés avec la base de code interne:
  - git tag produira `x.y.z`, `x.y`, `x` et `latest` tags docker
  - `main` branch wproduira un tag docker `nightly`
  - other branch wproduira un tag docker `$branch_name` docker tag remplaçant `/` par `-`

**Exemples**

> - ghcr.io/okp4/okp4d:nightly
> - ghcr.io/okp4/ontology:1.0.1
> - ghcr.io/okp4/okp4bi:ci-fix-doker-tag

### NPM

**Règles**

La structure d'un paquet npm est définie par son `name`, sa `version` et ses `dist-tags`:

La structure du `name` id'un paquet npm est la suivante:

```sh
@okp4/$REPOSITORY
```

où:

- `REPOSITORY`: Le nom du dépôt git dans le cas nominal.

**Exemples**

> - @okp4/ui

La structure d'une `version` de paquetage npm est la suivante:

```sh
$SEMVER[-$DIST_TAG.$TIMESTAMP]
```

où:

- `SEMVER`: Le nom de la version actuelle du package.json.
- `DIST-TAG`: Le dist-tag glissant associé à la version, voir ses règles dans la section suivante.

**Exemples**

> - 1.0.0
> - 1.0.1-next.1646212564
> - 1.2.1-fix-whatever.1646212564

Les étiquettes `dist-tag` tag possibles pour les paquets npm sont les suivantes:

- `latest`: Suit les versions de production, dans ce cas il n'apparaît pas dans le nom de la version comme ???
- `next`: Suit les versions de la branche `main`.
- `$BRANCH_NAME`: Suit les versions de la branche `$BRANCH_NAME` en remplaçant `/` par `-`.

**Exemples**

> - latest
> - next
> - fix-whatever
