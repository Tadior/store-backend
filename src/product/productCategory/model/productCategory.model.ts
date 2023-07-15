import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from '../../model/product.model';

interface RoleCategoryCreationAttr {
  name: string;
}

@Table({ tableName: 'categories', timestamps: false })
export class ProductCategories extends Model<
  ProductCategories,
  RoleCategoryCreationAttr
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @HasMany(() => Product)
  products: Product[];
  // @ForeignKey(() => Product)
  // @Column
  // productId: number
  // @BelongsTo(() => Product)
  // product: Product
}
