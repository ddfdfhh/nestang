
import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name:string;

    @Column() 
    email:string;
    @Column('date') 
    created_at:Date;

    @Column() 
    password:string;
    @Column() 
    isActive:boolean;
    @Column({default: ''})
    avatar: string;
   @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }
}