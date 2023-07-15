import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/model/users.model';
import { Cart } from './model/cart.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Cart])],
  exports: [CartService],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
