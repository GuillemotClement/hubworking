import { User } from 'generated/prisma';

export class UserEntity implements User {
  id: number;
  username: string;
  email: string;
  password: string;
  image: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  roleId: number;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.deletedAt = user.deletedAt;
    this.roleId = user.roleId;
  }
}
