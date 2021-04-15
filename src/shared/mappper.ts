import CategoryDto from '../category/categoryDto';
import {Category} from '../category/category.entity';
export const map=(category:Category):CategoryDto=>{
   const {name}=category;
   return {name}
}
