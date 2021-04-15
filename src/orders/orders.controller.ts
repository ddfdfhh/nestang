import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { OrderService } from './orders.service';
import { Order } from './order.entity';

@Controller('orders')
export class OrdersController {

    constructor(private service: OrderService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getOrder(params.id);
    }

    @Post()
    create(@Body() user: Order) {
        return this.service.createOrder(user);
    }

}