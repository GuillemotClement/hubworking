# hubworking

Le projet est une application pour la gestion des espace de coworking. Cette application permet aux utilisateur de visualiser la liste des espaces de coworking, voir les details d'un espace de travail, de visualise et avoir la possibilites de commenter ces espaces, de verifier la disponibiliter des espace et d'effectuer des reservation.

## Besoin

- Les utilisateur ont besoin d'un moyen simple et efficase pour trouber des espaces de coworking
- Les utilisateur ont beson de voir les details d'un espace, et les commentaires des user
- Les utilisateur ont besoin de pouvoir commenter un espace
- Les utilisateurs ont besoin de verifier la disponibilite d'un espace de coworking
- Les utilisateurs ont besoin de pouvoir reserver un espace de coworking

## Objectif du projet

- Fournir une interface simple et intuitive
- Permettre aux user de visualiser la liste des espaces de coworking
- Permetre aux user de voir les details des espaces de coworking
- Permettre aux user de commenter des espace de coworking
- Permettre aux user de reserver un espace de coworking

## Fonctionnalites du projet

1. Visualisation des espaces coworking

   - Les users peuvent visualiser les espace de coworking disponible

2. Voir les details d'un espace

   - Les users peuvent selectionner un espace pour voir les details y compris les commentaires de celui ci

3. Ajouter des commentaires

   - Les users peuvent ajouter leurs propre commentaires sur un espace de coworking

4. Verifier la disponibiliter

   - Les users peuvent verifier la disponibiliter d'un espace

5. Reserver un espace
   - Les utilisateur peuvent reserver un espace

## MVP

- Visualisation des espaces de coworking
- Affichage des details des espace de coworking avec les commantaires
- possibilites de creer un compte et s'authentifier
- ajout de commentaire sur un espace
- verifier la disponibiliter d'un espace
- reserver un espace

## Evolution

- possibilites pour les utilisateur de modifier ou de supprimer leur commentaire
- possibiliter pour un administrateur de gerer les espace (CRUD)
- possibilites de noter les espace
- rechercher et filtrer les espaces

## Arborescence

1. Page accueil

   - Presentation de l'application

2. Page liste des coworking

   - listing des differents espaces

3. Page de details des espaces
   - detail des espace avec les commantaires

## Stack

- React + Vite + TypeScript
- Docker
- Tailwind
- Directus

## TODO

1. Mise en place de l'environnement Docker
   - Vite pour generer l'application React
   - Directus pour la v1 pour le back end.

## Utils

### Tree

Utilitaire pour la ligne de commande qui permet de lister les folder et fichier dans le terminal. C'est une amelioration de `ls`.
[Documentation](https://sourabhbajaj.com/mac-setup/iTerm/tree.html)

```shell
# installation sur mac
brew install tree

# lister les fichier
tree
```
