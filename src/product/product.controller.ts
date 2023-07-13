import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Post, UseGuards, UsePipes} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {User} from "../users/model/users.model";
import {ValidationPipe} from "../pipes/validation.pipe";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../guards/roles.guard";
import {AddRoleDto} from "../users/dto/add-role.dto";
import {BanUserDto} from "../users/dto/ban-user.dto";
import {ProductService} from "./product.service";
import {Product} from "./model/product.model";
import {createProductDto} from "./dto/create-product.dto";

@ApiTags( 'Products')
// @UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}
    // @ApiOperation({summary: 'User creation'})
    // @ApiResponse({status: 200, type: User})
    // @UsePipes(new ValidationPipe())
    // @Post()
    // create(@Body() userDto: CreateUserDto) {
    //     return this.usersService.createUser(userDto);
    // }
    //
    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [Product]})
    @Get()
    getAllUsers() {
        return this.productService.getAllProducts();
    }

    @ApiOperation({summary: 'Create new product'})
    @ApiResponse({status: 200})
    // @Roles('Admin')
    // @UseGuards(RolesGuard)
    @Post()
    createProduct(@Body(new ValidationPipe()) dto: createProductDto) {
        return this.productService.createProduct(dto);
    }
    // @ApiOperation({summary: 'Ban user'})
    // @ApiResponse({status: 200})
    // @Roles('Admin')
    // @UseGuards(RolesGuard)
    // @Post('/ban')
    // ban(@Body() dto: BanUserDto) {
    //     return this.usersService.ban(dto);
    // }
}