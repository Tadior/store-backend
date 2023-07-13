import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import * as process from "process";
import {User} from "./users/model/users.model";
import { RolesModule } from './roles/roles.module';
import sequelize from "sequelize";
import {Role} from "./roles/model/roles.model";
import {UserRoles} from "./roles/model/user-roles.model";
import { AuthModule } from './auth/auth.module';
import {Product} from "./product/model/product.model";
import {ProductModule} from "./product/product.module";
import {ProductCategoryModule} from "./product/productCategory/productCategory.module";
import {ProductCategories} from "./product/productCategory/model/productCategory.model";
// import {Product} from "./product/model/product.model";
// import {ProductModule} from "./product/product.module";
// import { ProductsController } from './products/products.controller';
// import { ProductsModule } from './products/products.module';
// import {ProductCategoryModule} from "./products/categories/productCategory.module";
// import {Product} from "./products/model/product.model";
// import {ProductCategory} from "./products/categories/model/productCategory.model";
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  }), SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [User, Role, UserRoles, Product, ProductCategories],
    autoLoadModels: true,
    synchronize: true
  }), UsersModule, RolesModule, AuthModule, ProductModule, ProductCategoryModule
    // ProductModule
    // ProductsModule,
    // ProductCategoryModule
  ],
})
export class AppModule {}
