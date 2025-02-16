import { Action, Ctx, Update } from 'nestjs-telegraf';
import { FileNames } from 'src/enums/file-names.enum';
import { getJSONData, getRandomQuote } from 'src/helpers/helpers';
import { IJsonData } from 'src/helpers/type';
import { Context } from 'telegraf';

@Update()
export class TelegramBotActions {
  @Action(/(fun|serious)_(ru|eng)/)
  async onAnswer(@Ctx() ctx: Context) {
    // @ts-ignore
    const userChoice = ctx.callbackQuery?.data;

    if (!userChoice) {
      return ctx.reply('Упси! Что-то пошло не так.. Попробуй еще раз :(');
    }
    
    switch (userChoice) {
      case 'fun_ru':
        const jsonFunRUData: IJsonData = getJSONData(FileNames.FunRU);
        await ctx.reply(getRandomQuote(jsonFunRUData?.quotes || []));
        break;
      case 'serious_ru':
        const jsonSeriousRUData: IJsonData = getJSONData(FileNames.SeriousRU);
        await ctx.reply(getRandomQuote(jsonSeriousRUData?.quotes || []));
        break;
      case 'fun_eng':
        const jsonFunENGData: IJsonData = getJSONData(FileNames.FunENG);
        await ctx.reply(getRandomQuote(jsonFunENGData?.quotes || []));
        break;
      case 'serious_eng':
        const jsonSeriousENGData: IJsonData = getJSONData(FileNames.SeriousENG);
        await ctx.reply(getRandomQuote(jsonSeriousENGData?.quotes || []));
        break;
      default:
        await ctx.reply('Что-то цитатки закончились :(');
    }
  }
}