import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { UsersModule } from './users/users.module';
import { WorkingsModule } from './workings/workings.module';
import { BookingsModule } from './bookings/bookings.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RoleModule, UsersModule, WorkingsModule, BookingsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
