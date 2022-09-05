import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/user.dots';
import { User } from './entitis/user.entiti';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly serviceUser: UserService) {}

  @Get()
  async getUser(): Promise<User[]> {
    try {
      return await this.serviceUser.getUser();
    } catch (error) {}
  }

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    try {
      return this.serviceUser.createUser(createUserDTO);
    } catch (error) {}
  }
}
