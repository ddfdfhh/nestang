import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import {User} from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSubscriber } from './user.subscriber';
@Module({  
  imports:[TypeOrmModule.forFeature([User])],
  providers: [UserService,UserSubscriber],
  controllers: [UsersController]
})
export class UsersModule {}
