import { Controller, Post, Body, Get, Put, Delete,Param, ValidationPipe, UsePipes, Query, ParseIntPipe, Header} from '@nestjs/common';
import { ProductService } from './products.service';
import { Product } from './product.entity';
import { createProductDto } from './createProductDto';
class Query1{
    offset:number;
    limit:number;
    filter?:string;
    sort?:string;
}
@Controller('api/products')
export class ProductsController {

    constructor(private service: ProductService) { }
    @Get('query')
    @Header('Cache-Control', 'public')
   
    @Header('token', '123')
    async getAllLimit(@Query() params) {
        console.log(params);
        let p1:Promise<number>=this.service.getProductCount();
        
        let p2:Promise<Product[]>=this.service.getProductsLimit(params.sort_by,params.sort_dir,params.offset,params.limit);
        let [count1,result1]=await Promise.all([p1,p2]);
        return {count:count1,data:result1};
    }
    @Get(':id')
    get(@Param() params) {
        return this.service.getProduct(params.id);
    }
    @Get()
    @Header('Cache-Control', 'public')
    @Header('Cache-Control', 'max-age=60')
    getAll() {
        return this.service.getProducts();
    }
   
    @Get('count')
    getCount() {
        return this.service.getProductCount();
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() user: createProductDto) {
        return this.service.createProduct(user);
    }

    @Put()
    update(@Body() user: Product) {
        console.log('goinf udate');
        console.log(user);
        return this.service.updateProduct(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteProduct(params.id);
    }
}