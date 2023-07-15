import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post()
  createCart(@Body() dto: CreateCartDto) {
    return this.cartService.createCart(dto);
  }
  @Get('/:id')
  getCartById(@Param('id') id: number) {
    return this.cartService.getCartById(id);
  }
}
