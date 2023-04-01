import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    console.log(user);
    return await this.userRepository.create<User>({ ...user });
  }

  async findOneWithDeviceId(deviceId): Promise<User> {
    return await this.userRepository.findOne({
      where: { deviceId: deviceId },
    });
  }

  async findOneWithEmail(email): Promise<User> {
    return await this.userRepository.findOne({
      where: { email: email },
    });
  }

  async findOneWithUsername(username): Promise<User> {
    return await this.userRepository.findOne({
      where: { username: username },
    });
  }

  async findOneWithId(id): Promise<User> {
    return await this.userRepository.findOne({
      where: { id: id },
    });
  }
}
