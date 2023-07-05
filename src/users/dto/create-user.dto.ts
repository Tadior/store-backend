import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'someEmail@gmail.com', description: 'user`s email'})
    readonly email: string;
    @ApiProperty({example: 'difficultPassword', description: 'user`s password'})
    readonly password: string;
    @ApiProperty({example: 'Tadior', description: 'user`s login'})
    readonly login: string;
    @ApiProperty({example: 'Dmitriy', description: 'user`s firstname'})
    readonly firstname: string;
    @ApiProperty({example: 'Zamulin', description: 'user`s lastname'})
    readonly lastname: string;

}