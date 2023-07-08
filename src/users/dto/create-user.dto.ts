import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'someEmail@gmail.com', description: 'user`s email'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;
    @ApiProperty({example: 'difficultPassword', description: 'user`s password'})
    @IsString({message: 'Must be string'})
    @Length(6, 20, {message: 'the length of password must be not less than 5 and no more 20 characters'})
    readonly password: string;
    @ApiProperty({example: 'Tadior', description: 'user`s login'})
    @IsString({message: 'Must be string'})
    @Length(5, 20, {message: 'the length of login must be not less than 5 and no more 20 characters'} )
    readonly login: string;
    @ApiProperty({example: 'Dmitriy', description: 'user`s firstname'})
    @IsString({message: 'Must be string'})
    readonly firstname: string;
    @ApiProperty({example: 'Zamulin', description: 'user`s lastname'})
    @IsString({message: 'Must be string'})
    readonly lastname: string;

}