---
sidebar_position: 3
sidebar_label: "Open Source"
hide_table_of_contents: true
---

# Open Source

## Le "Pourquoi"

L'Open Source est l'une des choses auxquelles nous tenons le plus chez [OKP4](https://github.com/okp4). Notre philosophie est la suivante:

> Tout ce que nous faisons devrait être ouvert par défaut.

C'est pourquoi, dès le départ, nous mettons (presque) tous nos projets en open source.

## Le "Comment"

Il est **fondamental** de comprendre que les projets mis en open source doivent répondre à certaines exigences. Ainsi, pour s'assurer que les projets sont prêts à être publiés, la liste de contrôle suivante peut être utile:

### 👉 Pas d'informations sensibles

> Gardez à l'esprit que tout ce qui est mis dans le dépôt git est partagé avec le public lorsque vous poussez votre code source sur GitHub et reste visible dans l'historique Git. Pousser de telles informations peut être dramatique, car la suppression oblige à réécrire l'historique.

<ins>À vérifier:</ins>

- les données utilisées dans le projet n'enfreignent pas les termes de la licence._licence_.
- il n'y a pas d'informations _spécifiques_ ou _personnelles_ (dans les commentaires git, dans les fichiers README...).
- il n'y a pas de _secrets_ (mot de passe, clés privées, jetons) (dans les fichiers de configuration/environnement, les scripts...).

### 👉 Une bonne description du projet

> Il est fondamental d'avoir une bonne description du projet pour fournir aux utilisateurs des informations faciles à comprendre sur l'objectif du projet, la façon de le mettre en place et de l'utiliser, ou la façon dont les développeurs peuvent y contribuer.

<ins>À vérifier:</ins>

- Un fichier `README.md`:

  - avec une description complète et facile à comprendre du projet.
  - des badges pour les statuts CI/CD, la licence... (les badges sont un excellent moyen de montrer des éléments d'information aux développeurs en un coup d'œil).

- [Un fichier de licence.](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository).
- [Un fichier de santé communautaire](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) (par exemple`un code de conduite`).

### 👉 Un historique Git propre

> Les messages Git Commit fournissent aux développeurs des informations utiles sur ce qui a changé et pourquoi au fil du temps. Il est crucial d'avoir un projet avec de bons (et cohérents) messages Commit.

<ins>À vérifier:</ins>

- Tous les commits suivent notre spécification de [commit conventionnelle](https://github.com/okp4/wiki/wiki/Naming-rules#commit-messages) specification.
- Tous les commits doivent être [signés](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits).
- Le projet a un mode de branchement (par exemple une branche `main` branch, a, et des branches de fonctionnalités fusionnées dans celle-ci ).

### 👉 Un CI/CD complet

> CI/CD effectue des tâches automatiques permettant de maintenir une qualité constante sur ce qui est développé et livré. Il permet aux développeurs de sécuriser leurs contributions dans leurs premières étapes en évitant les problèmes d'intégration et de déploiement.

<ins>À vérifier:</ins>

- Le projet suit les lignes [directrices OKP4 CI/CD](https://github.com/okp4/wiki/wiki/CI-CD) adoptées.
- Le projet passe toutes les étapes de CI/CD avec succès sur la branche `main`.

### 👉 Un ensemble de modèles de problèmes / PRs

> Pour améliorer la qualité du processus de gestion des issues et des PRs, notamment vis-à-vis de la communauté, il est important que chaque dépôt open-source soit configuré pour disposer de modèles d'issues et de PRs personnalisés.

<ins>À vérifier:</ins>

- es modèles de problèmes et de PRs sont configurés pour le dépôt (voir: [configuring-issue-templates-for-your-repository](https://docs.github.com/en/communities/)using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
- Les modèles sont conformes aux normes adoptées pour tous les projets.

### 👉 Un référentiel bien configuré

> Pour des raisons de sécurité, le dépôt doit être correctement configuré selon les règles OKP4.

<ins>À vérifier:</ins>

- Autoriser uniquement les commits de fusion.
- La branche par défaut est la branche `main`.
- Il y a une règle de protection pour la branche `main`:
  - Exiger une pull request avant de fusionner: permet à [**@bot-anik**](https://github.com/bot-anik) tde contourner cette règle (c'est-à-dire à des fins de publication).
  - Exiger des vérifications d'état avant de fusionner.
  - Exiger une résolution de conversation avant de fusionner.
  - Exiger des commits signés.
  - nclure les administrateurs.

> L'activité sur les projets open source doit être rapportée sur le [discord OKP4](https://discord.gg/okp4).

<ins>À vérifier:</ins>

- L'URL de la charge utile doit pointer vers les crochets web du discord: <https://discord.com/api/webhooks/***/***/github>
- Le type de contenu doit être `application/json`
- Secret : vide
- Activer la vérification SSL
- Configurer les événements individuels : Forks, Issues, Issue comments, Pull requests, Pull request review comments, Releases, Stars, Wiki.
