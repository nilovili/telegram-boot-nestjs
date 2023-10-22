import { Module } from '@nestjs/common';
import { TelegramModule } from './modules/telegram/telegram.module';
import { NlpModule } from './modules/nlp/nlp.module';
import { DataModule } from './modules/data/data.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TelegramModule,
    NlpModule,
    DataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
