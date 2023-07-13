import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {Product} from "./model/product.model";
import {createProductDto} from "./dto/create-product.dto";
import {ProductCategoryService} from "./productCategory/productCategory.service";

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product) private productRepository: typeof Product, private productCategoryService: ProductCategoryService
    ) {}

    async getAllProducts() {
        return await this.productRepository.findAll({include: {all: true}})
    }
    async createProduct(dto: createProductDto) {
        const category = await this.productCategoryService.getCategoryByValue(dto.category);

        if (!category) {
            throw new HttpException('Such category doesn`t exist', HttpStatus.BAD_REQUEST)
        }
            const product = await this.productRepository.create(dto)
            await product.$set('category', [category.id])
            product.category = category;
            return product;

    }
}