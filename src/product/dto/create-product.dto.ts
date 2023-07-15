import { IsArray, IsNumber, IsString } from 'class-validator';
import { Column, DataType } from 'sequelize-typescript';

export class createProductDto {
  readonly value: string;
  @IsString({ message: 'description must be string' })
  name: string;
  @IsNumber({ allowNaN: false }, { message: 'price must be number' })
  price: number;
  @IsNumber({ allowNaN: false }, { message: 'rating must be number' })
  rating: number;
  @IsString({ message: 'img must be string' })
  img: string;
  @IsString({ message: 'category items must be string' })
  category: string;
}
