import { Test, TestingModule } from '@nestjs/testing';
import { userService } from './user.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [userService],
    }).compile();

    service = module.get<ApiService>(userService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
