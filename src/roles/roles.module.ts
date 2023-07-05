import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./model/roles.model";
import {User} from "../users/model/users.model";
import {UserRoles} from "./model/user-roles.model";

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RolesService],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
