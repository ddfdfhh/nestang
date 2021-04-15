import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductsController } from './products.controller';
import {Product} from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({  
  imports:[TypeOrmModule.forFeature([Product])],
  providers: [ProductService],
  controllers: [ProductsController],exports:[ProductService]
})
export class ProductsModule {}
