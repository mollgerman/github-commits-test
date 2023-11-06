import { Controller, Get } from '@nestjs/common';
import { GithubService } from './providers/github/github.service';

@Controller()
export class AppController {
  constructor(private readonly githubService: GithubService) {}

  @Get('github')
  public async getGithub() {
    return this.githubService.getCommits();
  }
}