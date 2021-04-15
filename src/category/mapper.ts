import CategoryDto from './categoryDto';
import {Category} from './category.entity';
const map=(category:Category):CategoryDto=>{
   const {name}=category;
   return {name}
}
export default map;