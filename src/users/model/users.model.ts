import {
  BelongsToMany,
  Column,
  DataType,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../roles/model/roles.model';
import { UserRoles } from '../../roles/model/user-roles.model';
import { Cart } from '../../cart/model/cart.model';

interface UserCreationAttrs {
  email: string;
  password: string;
  login: string;
  firstname: string;
  lastname: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique id' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;
  @ApiProperty({ example: 'someEmail@gmail.com', description: 'user`s email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @ApiProperty({ example: 'Tadior', description: 'user`s login' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;
  @ApiProperty({ example: 'difficultPassword', description: 'user`s password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @ApiProperty({ example: 'Dmitriy', description: 'user`s firstname' })
  @Column({ type: DataType.STRING, allowNull: false })
  firstname: string;
  @ApiProperty({ example: 'Zamulin', description: 'user`s lastname' })
  @Column({ type: DataType.STRING, allowNull: false })
  lastname: string;
  @ApiProperty({ example: 'true', description: 'Is it a bad guy ?' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;
  @ApiProperty({
    example: 'because i want',
    description: 'the reason why users is banned',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
  @HasOne(() => Cart)
  cart: Cart;
}
