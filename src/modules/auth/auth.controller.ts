import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../users/dto/user.dto';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() request) {
    return await this.authService.login(request.user);
  }

  @Post('signup')
  @UseGuards(DoesUserExist)
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }
}
