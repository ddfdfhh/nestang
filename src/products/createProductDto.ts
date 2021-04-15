import {IsNotEmpty, IsNumber } from 'class-validator';

export class createProductDto {

    @IsNotEmpty()
    name:string;

    @IsNotEmpty() @IsNumber()
    category:number;
 
    @IsNotEmpty() @IsNumber()
    price:number;
}