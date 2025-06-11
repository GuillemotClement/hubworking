import { Role } from 'generated/prisma';

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
