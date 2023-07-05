import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import * as process from "process";
import {User} from "./users/model/users.model";
import { RolesModule } from './roles/roles.module';
import sequelize from "sequelize";
import {Role} from "./roles/model/roles.model";
import {UserRoles} from "./roles/model/user-roles.model";
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  }), SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [User, Role, UserRoles],
    autoLoadModels: true
  }), UsersModule, RolesModule,],
})
export class AppModule {}
