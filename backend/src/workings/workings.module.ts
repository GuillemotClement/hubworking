import { Module } from '@nestjs/common';
import { WorkingsService } from './workings.service';
import { WorkingsController } from './workings.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [WorkingsController],
  providers: [WorkingsService, PrismaService],
})
export class WorkingsModule {}
