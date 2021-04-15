import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {

    constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) { }

    async getOrders(user: Order): Promise<Order[]> {
        return await this.orderRepository.find();
    }

    async getOrder(_id: number): Promise<Order[]> {
        return await this.orderRepository.find({
          
            where: [{ "id": _id }]
        });
    }
    async createOrder(user: Order) {
       return  this.orderRepository.save(user)
    }

   
}