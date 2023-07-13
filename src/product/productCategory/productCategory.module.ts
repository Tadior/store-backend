import {Module} from "@nestjs/common";
import {ProductCategoryController} from "./productCategory.controller";
import {ProductCategoryService} from "./productCategory.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {ProductCategories} from "./model/productCategory.model";

@Module({
    imports: [SequelizeModule.forFeature([ProductCategories])],
    exports: [ProductCategoryService],
    controllers: [ProductCategoryController],
    providers: [ProductCategoryService]
})
export class ProductCategoryModule {}