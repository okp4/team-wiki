---
sidebar_position: 4
sidebar_label: "Git"
hide_table_of_contents: true
---

# Git

## GitHub

Tous les dépôts git sont hébergés sur GitHub dans l'organisation OKP4 à l'adresse [ici](https://github.com/okp4).

👮 La création du dépôt doit être discutée avec les propriétaires de l'organisation.

## Flux GitHub

Lorsque l'on utilise un système de contrôle de version tel que Git au sein d'une équipe, il est essentiel de se mettre d'accord sur un flux de travail, une stratégie de ramification. Si nous n'utilisons pas un flux de travail commun, la confusion est inévitable.

Le flux de travail choisi est [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow) wqui est léger et s'adapte bien au paradigme gitops.

### Branche `main`

La branche `main` est la branche par défaut, contenant à la fois les derniers développements et les versions de production : une version de production étant simplement un tag sur la branche principale.

✖️ Ne pas git push directement sur la branche `main`. **Jamais!**.

✔️ Tout nouveau développement doit être proposé dans une [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) et passer par le processus de révision.

### Processus de développement

Chaque nouveau développement doit faire l'objet d'un ticket dans le dépôt, ou être discuté dans l'espace dédié.

Par exemple:

- Le PR [okp4/ui - file input](https://github.com/okp4/ui/pull/308) a été spécifié dans [okp4/ui#300](https://github.com/okp4/ui/issues/300).
- Le PR [okp4/ui - barre de progression](https://github.com/okp4/ui/pull/344) a été discuté dans [okp4/ui#341](https://github.com/okp4/ui/discussions/341).

#### 🌱 Créer une nouvelle branche

Pour commencer de nouveaux développements sur un dépôt, vous devez d'abord créer une branche dédiée à partir de la branche principale. Cette branche est un endroit sûr pour faire des changements, toutes les erreurs peuvent être annulées jusqu'à ce que la branche soit fusionnée.

Par exemple:

```sh
git checkout -b feat/my-awesome-feature
```

#### 🖊️ Livrez vos modifications

Chaque commit doit contenir des modifications isolées et complètes.

🚨 Chaque commit est important : ils sont utilisés pour générer les changelogs et déterminer les versions.

👮 Signez vos commits <https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits>

#### 🧹 Gardez votre historique propre

L'ensemble des commits doit exprimer le fil conducteur qui a guidé vos développements et raconter son histoire. N'hésitez pas à écraser plusieurs commits liés aux mêmes changements, utilisez le rebasement interactif pour retracer un flux de développement logique.

Un historique propre est aussi synonyme de fil conducteur unique des commits, cela interdit les commits de fusion dans votre historique.

#### 🤏 Limitez vos modifications

Rappelez-vous que les changements que vous faites sont destinés à être revus, donc gardez les changements petits (~300 lignes de diff).

#### 🫂 Travaillez avec les autres

Votre branche de travail doit toujours être à jour par rapport à la branche `main`, lorsque des changements sont intégrés dans la branche `main` après la création de votre branche de travail, vous devez mettre à jour votre branche.

⚠️ Vous pourriez être tenté de mettre à jour votre branche en fusionnant la branche `main` dans la vôtre mais c'est interdit papour réécrire votre historique basé sur une nouvelle version de la branche `main`:

```sh
git fetch
git rebase origin/main
```

La même pratique peut être appliquée lors de la mise à jour de votre branche avec sa version distante: `git pull --rebase` wiempêchera les commits de fusion. Vous pouvez activer cette stratégie par défaut avec: `git config --global pull.rebase true`.

Un autre point d'attention est lorsque vous poussez vos changements après avoir réécrit l'historique, vous aurez besoin de forcer le push car les commits ont changé et cela peut aboutir à la perte du travail d'un coéquipier. Pour éviter cela, vous pouvez utiliser l'option `--force-with-lease` qui n'écrasera aucun travail sur la branche distante si des commits ont été ajoutés à la branche distante.

#### 👀 Ouvrir une pull request

Lorsque vous avez terminé le développement, ouvrez une demande d'extraction ciblant la branche `main` pour proposer vos modifications et demandez à vos collaborateurs de vous faire part de leurs commentaires en les ajoutant en tant que réviseurs.

Veillez à ce que les points suivants soient respectés lors de la soumission d'une demande d'extraction:

- **Faites en sorte que votre PR soit de petite taille.** Les petites demandes d'extraction (~300 lignes de diff) sont beaucoup plus faciles à examiner.

- **Décrivez votre PR** Dans le résumé de la demande d'extraction, tous vos changements doivent être expliqués et faire référence au problème correspondant.

- **Votre PR est ouvert contre la branche `main`**.

#### 🤓 Et ensuite?

Le CI/CD effectue un ensemble de tâches de manière automatique, telles que l'exécution de linters contre le code et l'exécution de tests pour se prémunir contre les erreurs. Le devoir de ces systèmes est de faire en sorte que vous vous préoccupiez le moins possible de ces tâches - [comptez sur la CI/CD](https://github.com/okp4/wiki/wiki/What-should-I-know#𝟱-rely-on-cicd).

Les réviseurs/mainteneurs examineront et commenteront également le code. Ces commentaires sont importants et doivent être pris en considération. Rappelez-vous que le but d'une révision est de trouver des problèmes, et des problèmes seront trouvés. Ne le prenez pas personnellement lorsqu'un problème est découvert - [Vous n'êtes pas votre code](https://github.com/okp4/wiki/wiki/What-should-I-know#𝟏-you-are-not-your-code).

N'hésitez pas à demander de l'aide si vous en avez besoin, l'équipe est là pour vous aider.

Une fois que votre pull request est approuvée, vous pouvez la fusionner pour intégrer vos changements dans la branche `main`. Bon travail! 👍
