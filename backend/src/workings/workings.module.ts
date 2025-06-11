import { Module } from '@nestjs/common';
import { WorkingsService } from './workings.service';
import { WorkingsController } from './workings.controller';

@Module({
  controllers: [WorkingsController],
  providers: [WorkingsService],
})
export class WorkingsModule {}
