import { IsString } from 'class-validator';

export class createCategoryDto {
  @IsString({ message: 'value must be string' })
  readonly name: string;
}
