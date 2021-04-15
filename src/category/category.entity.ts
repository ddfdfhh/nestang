
import { Product } from 'src/products/product.entity';
import { Entity,OneToOne, Column,JoinColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name:string;

    @OneToOne(type => Category, category => category.id) 
    parent:Category;
    @OneToMany(type => Product, product => product.category) 
    products:Product[];

    @Column() 
    isActive:boolean;
}