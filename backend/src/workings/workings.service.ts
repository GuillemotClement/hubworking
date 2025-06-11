import { Injectable } from '@nestjs/common';
import { CreateWorkingDto } from './dto/create-working.dto';
import { UpdateWorkingDto } from './dto/update-working.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { WorkingEntity } from './entities/working.entity';

@Injectable()
export class WorkingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWorkingDto: CreateWorkingDto) {
    const working = await this.prisma.working.create({
      data: createWorkingDto,
    });
    return new WorkingEntity(working);
  }

  async findAll() {
    const workings = await this.prisma.working.findMany();
    return workings.map((working) => new WorkingEntity(working));
  }

  async findOne(id: number) {
    const working = await this.prisma.working.findUnique({
      where: {
        id,
      },
    });
    return working ? new WorkingEntity(working) : null;
  }

  async update(id: number, updateWorkingDto: UpdateWorkingDto) {
    const working = await this.prisma.working.update({
      where: {
        id,
      },
      data: updateWorkingDto,
    });
    return new WorkingEntity(working);
  }

  async remove(id: number) {
    const working = await this.prisma.working.delete({
      where: {
        id,
      },
    });

    return new WorkingEntity(working);
  }
}
