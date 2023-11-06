import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

const API_URL = 'https://api.github.com/repos/mollgerman/github-commits-test/commits';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}
  public async getCommits() {
    try {
      const response = await firstValueFrom(this.httpService.get(API_URL));
      const data = { commitsArray: response.data };
      return data;
    } catch (error) {
      throw error.message;
    }
  }
}
