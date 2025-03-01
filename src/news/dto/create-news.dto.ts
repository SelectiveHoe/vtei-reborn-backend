import { IsNotEmpty, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateNewsDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  richText: string;

  @IsOptional()
  @IsArray()
  photos?: string[];
}
