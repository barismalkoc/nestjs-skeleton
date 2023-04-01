import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {
  readonly id: string;
  @IsNotEmpty()
  @MinLength(8)
  readonly deviceId: string;
  @IsNotEmpty()
  readonly region: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}
