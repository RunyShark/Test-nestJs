import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser(): string {
    return 'user';
  }

  @Get('Set-Password')
  setPassword(): string {
    return 'Password';
  }
}
