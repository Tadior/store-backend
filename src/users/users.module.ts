import {forwardRef, Module} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./model/users.model";
import {Role} from "../roles/model/roles.model";
import {UserRoles} from "../roles/model/user-roles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule, forwardRef(() => AuthModule)],
  exports: [UsersService],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
