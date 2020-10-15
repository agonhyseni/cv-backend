import { IsNumberString, IsOptional } from 'class-validator';

export class GetEducationDto {
  @IsNumberString()
  @IsOptional()
  id: number;
}
