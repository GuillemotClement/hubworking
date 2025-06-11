import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkingDto } from './create-working.dto';

export class UpdateWorkingDto extends PartialType(CreateWorkingDto) {}
