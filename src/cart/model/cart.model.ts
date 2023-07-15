import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/model/users.model';

interface cartCreationAttrs {
  userId: string;
}

@Table({ tableName: 'carts', timestamps: false })
export class Cart extends Model<Cart, cartCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  // @Column({type: DataType.INTEGER, allowNull: false})
  // @ForeignKey(() => User)
  @ForeignKey(() => User)
  // @BelongsTo(() => User)
  userId: number;
}
