import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entitis/user.entiti';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dtos/user.dots';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async getUser(): Promise<User[]> {
    try {
      const users = (await this.userModel.find().lean()) as unknown as Promise<
        User[]
      >;
      if (!users) throw new NotAcceptableException();
      return users;
    } catch (error) {}
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    try {
      const user = new this.userModel(createUserDTO);
      await user.save();
      return user;
    } catch (error) {}
  }
}
