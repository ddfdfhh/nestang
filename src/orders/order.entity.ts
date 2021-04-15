
import { Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn } from 'typeorm';
import {User} from '../users/user.entity';
import {Product} from '../products/product.entity';
@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User) @JoinColumn() 
    user:User;
    @OneToOne(type => User) @JoinColumn() 
    product:Product;

    @Column('date') 
    created_at:Date;

    @Column() 
    amount:number;
}