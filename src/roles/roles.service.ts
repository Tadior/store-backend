import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./model/roles.model";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {
    }

    async createRole(dto: CreateRoleDto) {
        const existedRole = await this.getRoleByValue(dto.value)
        if (existedRole) {
            throw new HttpException('This role is already created', HttpStatus.BAD_REQUEST)
        }
        const role = await this.roleRepository.create(dto);
        return role
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}})
        // if (!role) {
        //     throw new HttpException('Incorrect role', HttpStatus.NOT_FOUND)
        // }
        return role;
    }
}
