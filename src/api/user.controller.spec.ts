import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { User } from './entitis/user.entiti';
import { getModelToken } from '@nestjs/mongoose';
import { UserModule } from './user.module';
import { UserSerializer } from './serializer/UserSerializer';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(getModelToken(User.name))
      .useValue(jest.fn())
      .compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  describe('getUser', () => {
    it('should be defined', async () => {
      jest
        .spyOn(userService, 'getUser')
        .mockImplementation(
          () =>
            Promise.resolve([{ name: 'example' }]) as unknown as Promise<
              User[]
            >,
        );

      const result = await controller.getUser();

      expect(result).toHaveLength(1);
      expect(result[0] instanceof UserSerializer).toEqual(true);
      expect(userService.getUser).toHaveBeenCalledTimes(1);
    });
  });
});
