import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './model/users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import sequelize from 'sequelize';
import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CartService } from '../cart/cart.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
    private cartService: CartService,
  ) {}
  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('Admin');
    if (!role) {
      throw new HttpException(
        'User with this role can`t be created',
        HttpStatus.FORBIDDEN,
      );
    }
    await user.$set('roles', [role.id]);
    user.roles = [role];
    const cart = await this.cartService.createCart({ userId: user.id });
    await user.$set('cart', [cart.id]);
    user.cart = cart;
    return user;
  }
  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }
  async getUserByEmail(email: string) {
    const user = this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }
  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);

    if (role && user) {
      await user.$add('role', role.id);
      return dto;
    }
    throw new HttpException('User or role isn`t found', HttpStatus.NOT_FOUND);
  }
  async ban(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('User isn`t found', HttpStatus.NOT_FOUND);
    }
    user.banned = true;
    user.banReason = dto.banReason;
    await user.save();
    return user;
  }
}
