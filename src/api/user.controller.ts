import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/user.dots';

@Controller('user')
export class UserController {
  @Get()
  getUser(): string {
    return 'user';
  }

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO): CreateUserDTO {
    return createUserDTO;
  }
}
