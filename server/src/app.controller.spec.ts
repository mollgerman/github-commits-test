import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { GithubService } from './providers/github/github.service';
import { ProvidersModule } from './providers/providers.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ProvidersModule],
      controllers: [AppController],
      providers: [GithubService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return Object', async () => {
      expect(await appController.getGithub()).toHaveProperty('commitsArray');
    });
  });
});
