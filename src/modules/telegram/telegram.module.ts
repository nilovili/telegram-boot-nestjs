import { Module } from '@nestjs/common';
import { TelegramService } from './services/telegram.service';
import { DataModule } from '../data/data.module';
import { NlpModule } from '../nlp/nlp.module';

@Module({
  imports: [DataModule, NlpModule],
  providers: [TelegramService],
})
export class TelegramModule {}
