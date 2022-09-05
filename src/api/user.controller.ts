import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/user.dots';
import { User } from './entitis/user.entiti';
import { UserService } from './user.service';
import { UserSerializer } from './serializer/UserSerializer';
import { plainToInstance } from 'class-transformer';
@Controller('user')
export class UserController {
  constructor(private readonly serviceUser: UserService) {}

  @Get()
  async getUser(): Promise<UserSerializer[]> {
    try {
      const data = await this.serviceUser.getUser();
      return plainToInstance(UserSerializer, data, {
        excludeExtraneousValues: true,
      });
    } catch (error) {}
  }

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    try {
      return this.serviceUser.createUser(createUserDTO);
    } catch (error) {}
  }
}
