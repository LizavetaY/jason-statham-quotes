import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class TelegramBotCommands {
  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply(
      'Привет, мой волк, я твой Jussy Statham Bot! Какое у тебя сегодня настроение?',
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Озорник 😏', callback_data: 'fun_ru' }],
            [{ text: 'Серьезный боец 🥋', callback_data: 'serious_ru' }],
            [{ text: 'Фан зарубежный 🎩', callback_data: 'fun_eng' }],
            [{ text: 'Инглиш джентльмен ☕️🇬🇧', callback_data: 'serious_eng' }],
          ]
        }
      }
    );
  }
}