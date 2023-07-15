import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './model/cart.model';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepository: typeof Cart) {}

  async createCart(dto: CreateCartDto) {
    const cart = await this.cartRepository.create(dto.userId);
    return cart;
  }

  async getCartById(id: number) {
    const cart = await this.cartRepository.findOne({
      where: { userId: id },
      include: { all: true },
    });
    if (!cart) {
      throw new HttpException(
        'Cart with such id doesn`t exist',
        HttpStatus.NOT_FOUND,
      );
    }
    return cart;
  }
}
