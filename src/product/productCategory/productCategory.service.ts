import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {ProductCategories} from "./model/productCategory.model";
import {createCategoryDto} from "./dto/create-category.dto";

@Injectable()
export class  ProductCategoryService {
    constructor(@InjectModel(ProductCategories) private categories: typeof ProductCategories) {
    }
    async getCategoryByValue(value: string) {
        const category = await this.categories.findOne({where: {name: value}, include: {all: true}})
        return category;
    }
    async createCategory(dto: createCategoryDto) {
        const category = await this.categories.create(dto)
        return category;
    }
}