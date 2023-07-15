import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString({ message: 'value must be string' })
  readonly value: string;
  @IsString({ message: 'description must be string' })
  readonly description: string;
}
