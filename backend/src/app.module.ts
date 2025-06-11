import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { UsersModule } from './users/users.module';
import { WorkingsModule } from './workings/workings.module';

@Module({
  imports: [RoleModule, UsersModule, WorkingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
