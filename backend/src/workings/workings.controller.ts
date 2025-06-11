import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkingsService } from './workings.service';
import { CreateWorkingDto } from './dto/create-working.dto';
import { UpdateWorkingDto } from './dto/update-working.dto';

@Controller('workings')
export class WorkingsController {
  constructor(private readonly workingsService: WorkingsService) {}

  @Post()
  create(@Body() createWorkingDto: CreateWorkingDto) {
    return this.workingsService.create(createWorkingDto);
  }

  @Get()
  findAll() {
    return this.workingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkingDto: UpdateWorkingDto) {
    return this.workingsService.update(+id, updateWorkingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workingsService.remove(+id);
  }
}
