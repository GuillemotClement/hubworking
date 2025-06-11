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
- NestJS

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

# Workflow

## Docker

On commence par creer le projet React et on verifier qu'il fonctionne en local. On viens ensuite creer le fichier `dockerfile` dans le folder creer.
On definis les instruction necessaire pour creer le container charger de faire tourner l'applicatuion front end React.

On viens ensuite definir le `docker-compose` dans a la racine du projet. Ce fichier est charger d'orchestrer les differnts container du projet.

Pour que cela soit fonctionnel, il faut bien modfier la configuration de vite pour accedera au container depuis la machine,

```json
export default defineConfig({
	plugins: [react()],
	// A REAJOUTER si on lance le server dans un container docker
	// De base le server se lance sur localhost or nous on veut 0,0,0,0 pour pouvoir y accéder depuis l'extérieur du container !
	server: {
		host: "0.0.0.0",
	},
});
```

Une fois le dockerfile et le docker compose configurer on peut lancer le build du projet `docker compose up --build`

## Prisma

Pour le `database_url`, l'host correspond au nom du service dans le docker compose

Pour installer Prisma sur le projet Nest, il faut venir lancer les commandes depuis le container.

```shell
# installation de Prisma
$ npm install prisma --save-dev

# unit Prisma CLI => ajout du dossier Prisma pour definir les models
# venir ajouter le url_db dans le .env
$ npx prisma init

# une fois le model defis, on peut lancer la commande pour la migration
$ npx prisma migrate dev --name init

# installation du prisma client
$ npm install @prisma/client
# a chaque modif du model, on lance cette commande
$ npx prisma generate
```

## Nest

### Service Prisma

Une fois Prisma et le model de Db fait, il faut venir creer un nouvea un nouveau service `/src/prisma.service.ts`.
Ce service permet d'utiliser Prisma dans le projet Nest.

### Creation d'un module

Un module permet de gerer une ressource.

Pour generer un nouveau module avec les fichiers necessaire pour une ressource

```shell
$ nest g res
```

On viens ensuite indiquer le nom du module.

1. On definis l'entity
   Dans le fichier `<module_name>/entities`, on viens indiquer les differentes props de la ressource.

   Pour que cela fonctionne, il faut utiliser cette syntaxe.

```ts
import { Role } from "generated/prisma";

export class RoleEntity implements Role {
  // declaration des props de la ressource
  id: number;
  title: string;

  // ajoute du constructeur pour instancier la valeurs des props
  constructor(role: Role) {
    this.id = role.id;
    this.title = role.title;
  }
}
```

2. Definit le DTO
   cela permet de definir le typage lier aux methodes.

```ts
export class CreateRoleDto {
  title: string;
}
```

```ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  title: string;
}
```

3. On definis ensuite les methodes de cette ressource dans le service.
