import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {ProductCategories} from "../productCategory/model/productCategory.model";

interface ProductCreationAttrs {
    name: string;
    price: number;
    rating: number;
    img: string;
}

@Table ({tableName: 'products', timestamps: false})
export class Product extends  Model<Product, ProductCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique product id'})
    @Column({type: DataType.INTEGER, unique: true , autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, allowNull: false ,defaultValue: ''})
    name: string;
    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;
    @Column({type: DataType.STRING, allowNull: false ,defaultValue: ''})
    description: string;
    @Column({type: DataType.INTEGER, allowNull: false})
    rating: number;
    @Column({type: DataType.STRING, allowNull: false ,defaultValue: ''})
    img: string;

    @ForeignKey(() => ProductCategories)
    @Column
    categoryId: number;
    @BelongsTo(() => ProductCategories)
    category: ProductCategories;
}