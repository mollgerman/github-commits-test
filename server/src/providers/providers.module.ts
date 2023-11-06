import { Global, Module } from '@nestjs/common';
import { GithubService } from './github/github.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule],
  providers: [GithubService],
  exports: [HttpModule, GithubService],
})
export class ProvidersModule {}
