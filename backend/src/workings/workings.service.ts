import { Injectable } from '@nestjs/common';
import { CreateWorkingDto } from './dto/create-working.dto';
import { UpdateWorkingDto } from './dto/update-working.dto';

@Injectable()
export class WorkingsService {
  create(createWorkingDto: CreateWorkingDto) {
    return 'This action adds a new working';
  }

  findAll() {
    return `This action returns all workings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} working`;
  }

  update(id: number, updateWorkingDto: UpdateWorkingDto) {
    return `This action updates a #${id} working`;
  }

  remove(id: number) {
    return `This action removes a #${id} working`;
  }
}
