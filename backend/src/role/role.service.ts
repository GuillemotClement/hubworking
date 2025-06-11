import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleEntity } from './entities/role.entity';

@Injectable()
export class RoleService {
  // ajout du service Prisma
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = await this.prisma.role.create({
      data: createRoleDto,
    });
    // comme on a definis les props dans entity on peut passer directement
    return new RoleEntity(role);
  }

  async findAll() {
    const roles = await this.prisma.role.findMany();
    // on utilise le map pour parcourir les donnees retourner
    return roles.map((role) => new RoleEntity(role));
  }

  async findOne(id: number) {
    const role = await this.prisma.role.findUnique({
      where: {
        id,
      },
    });

    return role ? new RoleEntity(role) : null;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.prisma.role.update({
      where: {
        id,
      },
      data: updateRoleDto,
    });

    return new RoleEntity(role);
  }

  async remove(id: number) {
    const role = await this.prisma.role.delete({
      where: {
        id,
      },
    });

    return new RoleEntity(role);
  }
}
