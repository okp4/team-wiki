---
sidebar_position: 2
sidebar_label: "Kanban"
id: kanban
hide_table_of_contents: true
---

# Kanban

Chez OKP4, nous utilisons Kanban comme méthodologie agile parce qu'elle offre une représentation visuelle de l'avancement de notre travail, nous aide à hiérarchiser les tâches et nous permet de livrer continuellement de nouvelles fonctionnalités, ce qui se traduit par une efficacité accrue et un délai de mise sur le marché plus court.

## Principes de base du Kanban

✭ Système à flux tendu

✭ Visualisation du flux de travail

✭ Limiter le travail en cours

✭ Mesurer et gérer le flux

✭ Apprentissage continu et retour d'information

## Nos tableaux Kanban

### Tableau Produit 📝

| BACKLOG                                     | TO DO                                 | SPEC EN COURS                    | MAQUETTES EN COURS          | TEST DE MAQUETTES                                 | VALIDÉ                                         | FERMÉ                        |
| ------------------------------------------- | ------------------------------------- | -------------------------------- | --------------------------- | ------------------------------------------------- | ---------------------------------------------- | ---------------------------- |
| tâches proposées mais pas encore priorisées | tâches priorisées mais pas commencées | tâches de spécification en cours | tâches de maquette en cours | tâches de maquettes terminées et en cours de test | tâches validées et en attente de développement | tâches complétées et fermées |

### Tableau DEV 💻

| BACKLOG                                     | TO DO                                 | EN COURS        | EN REVUE                                  | EN TEST                                   | VALIDÉ                                         | BLOQUÉ                                                                       | EPICS                                                                     | FERMÉ                        |
| ------------------------------------------- | ------------------------------------- | --------------- | ----------------------------------------- | ----------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------- |
| tâches proposées mais pas encore priorisées | tâches priorisées mais pas commencées | tâches en cours | tâches dont le code est en cours de revue | tâches terminées et prêtes à être testées | tâches validées et en attente de développement | tâches bloquées sur lesquelles on ne peut pas avancer pour certaines raisons | tâches qui représentent un thème majeur, découpées en plus petits tickets | tâches complétées et fermées |

### Tableau Management 🧑‍💼

| BACKLOG                                     | TO DO                                 | EN COURS        | EN REVUE                                     | FERMÉ                        |
| ------------------------------------------- | ------------------------------------- | --------------- | -------------------------------------------- | ---------------------------- |
| tâches proposées mais pas encore priorisées | tâches priorisées mais pas commencées | tâches en cours | tâches terminées et prêtes à passer en revue | tâches complétées et fermées |

### Tableau IT & DevOps ⚙️

| BACKLOG                                     | TO DO                                 | EN COURS        | EN TEST                 | BLOQUÉ                                                                       | FERMÉ                        |
| ------------------------------------------- | ------------------------------------- | --------------- | ----------------------- | ---------------------------------------------------------------------------- | ---------------------------- |
| tâches proposées mais pas encore priorisées | tâches priorisées mais pas commencées | tâches en cours | tâches en cours de test | tâches bloquées sur lesquelles on ne peut pas avancer pour certaines raisons | tâches complétées et fermées |

## La Definition of Ready ✅

Une user story doit répondre à certains critères pour être prête à être développée. Une user story qui est prête à être développée à OKP4 doit avoir :

- titre, description et déclaration de valeur
- critères d'acceptation (scénarios)
- maquettes (pour tous les appareils et thèmes)
- ajout des tags
- US présentée à l'équipe DEV (réunion de raffinage)
- rattachement à une epic
- estimation (réunion de planning poker)
- dépendances externes le cas échéant
