import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';
import { hashPassword } from 'src/utils/password';
import { ICreateUser } from 'src/@types/users';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // on recuoere le password et l'image pour traitement depuis les donnees de la requete
    let { password, image } = createUserDto;
    // on vient haser le mot de passe
    password = await hashPassword(password);
    // on viens verifier si on as une image fournis par la requete
    if (!image) {
      image = 'https://randomuser.me/api/portraits/lego/1.jpg';
    }
    // on viens creer l'objet data qui contient les donnees pour la creation de l'user
    const data: ICreateUser = {
      username: createUserDto.username,
      email: createUserDto.email,
      password,
      image,
      roleId: 2,
    };
    // envoie de la requete en BDD pour creer un nouvel user
    const user = await this.prisma.user.create({
      data,
    });

    return new UserEntity(user);
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new UserEntity(user));
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user ? new UserEntity(user) : null;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
    return new UserEntity(user);
  }

  async remove(id: number) {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return new UserEntity(user);
  }

  async findbyUsername(username: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });
    return user ? new UserEntity(user) : null;
  }
}
