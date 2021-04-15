
import { Entity, Column,OneToOne,JoinColumn,PrimaryGeneratedColumn, JoinTable, ManyToOne } from 'typeorm';
import {Category} from '../category/category.entity';
@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name:string;

    @ManyToOne(type => Category, category => category.id) 
    @JoinColumn()
    category:Category;
 
    @Column() 
    price:number;
}