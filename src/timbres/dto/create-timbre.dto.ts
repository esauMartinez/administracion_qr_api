import { IsString } from 'class-validator';

export class CreateTimbreDto {
  @IsString()
  guia: string;

  @IsString()
  timbre: string;

  @IsString()
  estatus: string;
}
