import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [ProvidersModule],
  controllers: [AppController]
})
export class AppModule {}
