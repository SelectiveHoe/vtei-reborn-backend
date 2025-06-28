import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePageDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  content: any;
}
