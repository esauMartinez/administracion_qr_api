import { IsString } from 'class-validator';

export class CreateTimbreDto {
  @IsString()
  guia: string;

  @IsString()
  qr: string;

  @IsString()
  estatus: string;

  @IsString()
  qrCCP: string;
}
