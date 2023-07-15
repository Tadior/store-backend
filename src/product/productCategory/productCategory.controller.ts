import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductCategoryService } from './productCategory.service';
import { createCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class ProductCategoryController {
  constructor(private productCategoryService: ProductCategoryService) {}
  @Get('/:value')
  getCategoryByValue(@Param('value') value: string) {
    return this.productCategoryService.getCategoryByValue(value);
  }
  @Post()
  createCategory(@Body() dto: createCategoryDto) {
    return this.productCategoryService.createCategory(dto);
  }
}
