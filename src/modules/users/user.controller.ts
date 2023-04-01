import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';
import { UserDto } from "./dto/user.dto";
@Controller()
export class UserController {
  constructor(private usersService: UsersService) {}

  @Post('login')
  @UseGuards(DoesUserExist)
  async init(@Body() body: UserDto, @Res() response: Response) {
    try {
      const user = await this.usersService.findOneWithDeviceId(body.deviceId);

      if (user) {
        return response.status(200).json({
          message: 'Second Init',
        });
      }
      await this.usersService.create(body);
      return response.status(201).json({
        message: 'First Init',
      });
    } catch (error) {
      return response.status(500).json({
        error: error,
      });
    }
  }
}
