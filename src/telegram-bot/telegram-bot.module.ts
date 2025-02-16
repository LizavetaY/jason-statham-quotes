import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramBotCommands } from './telegram-bot.commands';
import { TelegramBotActions } from './telegram-bot.actions';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_BOT_TOKEN || '',
    })
  ],
  providers: [TelegramBotCommands, TelegramBotActions],
})
export class TelegramBotModule {}