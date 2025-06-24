import { IsNotEmpty, IsObject } from 'class-validator';

export class CreatePageDto {
  @IsNotEmpty()
  @IsObject()
  content: any;
}
