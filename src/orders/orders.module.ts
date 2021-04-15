import { Module } from '@nestjs/common';

import { OrdersController } from './orders.controller';
import { OrderService } from './orders.service';
import { Order } from './order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({  
  imports:[TypeOrmModule.forFeature([Order])],
  providers: [OrderService],
  controllers: [OrdersController],
})
@Module({})
export class OrdersModule {}
