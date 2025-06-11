import { Test, TestingModule } from '@nestjs/testing';
import { WorkingsController } from './workings.controller';
import { WorkingsService } from './workings.service';

describe('WorkingsController', () => {
  let controller: WorkingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingsController],
      providers: [WorkingsService],
    }).compile();

    controller = module.get<WorkingsController>(WorkingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
