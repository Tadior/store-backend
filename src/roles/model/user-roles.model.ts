import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/model/users.model';
import { Role } from './roles.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({
    example: '4df5ccb3-8bc6-4334-b909-ca891aab8de0',
    description: 'unique id',
  })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;
  @ApiProperty({ example: '1', description: 'unique role id' })
  @ForeignKey(() => Role)
  @Column({ type: DataType.NUMBER })
  roleId: number;
  @ApiProperty({ example: '1', description: 'unique user id' })
  @ForeignKey(() => User)
  @Column({ type: DataType.NUMBER })
  userId: number;
}
