import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {

    constructor(private service: CategoryService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getCategory(params.id);
    }
    @Get()
    getAll() {
        return this.service.getCategories();
    }

    @Post()
    create(@Body() user: Category) {
        return this.service.createCategory(user);
    }
    
    @Put()
    update(@Body() user: Category) {
        return this.service.updateCategory(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteCategory(params.id);
    }

}