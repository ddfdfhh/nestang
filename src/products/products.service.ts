import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import {Connection} from "typeorm";
@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>,private con:Connection) { }

    async getProducts(): Promise<Product[]> {
        return await this.productRepository.find({relations:['category']});
    }
    async getProductsLimit(sort_by:string,sort_dir:string,offset:number,limit:number): Promise<Product[]> {
        const obj={[sort_by]:sort_dir.toUpperCase()};
        console.log(obj);
        return await this.productRepository.find({skip:offset,take:limit,order:obj,relations:['category']});
    }
    async getProductCount(): Promise<any> {
        const {c}= await this.con
        .createQueryBuilder()
        .select("COUNT(*) AS c")
        .from(Product,"products")
        .getRawOne();
        return c;
    }

    async getProduct(_id: number): Promise<Product[]> {
        return await this.productRepository.find({
         
            where: [{ "id": _id }]
        });
    }

    async updateProduct(user: Product) {
       return  this.productRepository.update(user.id,user)
    }

    async createProduct(user: any) {
        
    //    let f=[];
    //    const g=  { name: "Timber", price:2300,categoryId: 5 };
    //    for(let i=0;i<100;i++)
    //    {
    //        f[i]=g;
    //    }
        await this.productRepository.save(user);
        // await this.con
        //         .createQueryBuilder()
        //         .insert()
        //         .into(Product)
        //         .values(f)
        //         .execute();
        return  await this.productRepository.findOne({where: {id: 2}, relations: ['category']});
      
    }

    async deleteProduct(user: Product) {
        this.productRepository.delete(user);
    }
    
}