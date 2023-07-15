import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './model/product.model';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { AuthModule } from '../auth/auth.module';
import { ProductCategoryModule } from './productCategory/productCategory.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Product]),
    forwardRef(() => AuthModule),
    ProductCategoryModule,
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
