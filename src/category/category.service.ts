import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import CategoryDto from './categoryDto';

@Injectable()
export class CategoryService {

    constructor(@InjectRepository(Category) private catRepository: Repository<Category>) { }

    async getCategories(): Promise<Category[]> {
        return await this.catRepository.find({relations:['products']});
    }

    async getCategory(_id: number): Promise<Category[]> {
        return await this.catRepository.find({
            
            where: [{ "id": _id }],relations:['products']
        });
    }

    async updateCategory(user: Category) {
       return  this.catRepository.save(user)
    }
    async createCategory(user: Category):Promise<CategoryDto> {
        return await this.catRepository.save(user);
      
    }

    async deleteCategory(user: Category) {
        this.catRepository.delete(user);
    }
}