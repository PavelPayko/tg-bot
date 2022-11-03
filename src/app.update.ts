import {
	Ctx,
	Hears,
	InjectBot,
	Message,
	On,
	Start,
	Update
} from 'nestjs-telegraf'
import { Telegraf } from 'telegraf'
import { setTimeout } from 'timers'
import { dialogButtons } from './app.buttons'
import { AppService } from './app.service'
import { feedback, getUserInfo, greet, questionsList } from './app.utils'
import { Context } from './context.interface'
import photo from '../assets/Kvando_photo.jpg'

@Update()
export class AppUpdate {
	constructor(
		@InjectBot() private readonly bot: Telegraf<Context>,
		private readonly appService: AppService
	) { }

	@Start()
	async startCommand(ctx: Context) {

		ctx.session.count = 0
		ctx.session.answers = []
		ctx.session.chatId = ctx.message.chat.id
		ctx.session.user = {
			fist_name: ctx.message.from?.first_name,
			id: ctx.message.from?.id,
			lastname: ctx.message.from.last_name,
			username: ctx.message.from.username
		}

		await ctx.reply(greet(ctx.message.from.first_name))

		await ctx.replyWithPhoto(photo)

		setTimeout(async () => (
			await ctx.reply(questionsList[0], dialogButtons(1))
		), 1000)

		ctx.session.count++
	}

	@On('message')
	async getMsg(@Message('message') message: string, @Ctx() ctx: Context) {

		let count = ctx.session.count
		//@ts-ignore
		if (count >= questionsList.length) {
			//@ts-ignore
			ctx.session.answers.push(`${count}. ${ctx?.message?.text || '-'}`)
			//@ts-ignore
			const cv = ctx.message?.document?.file_id
			ctx.session.cv = cv

			await ctx.reply(feedback(), dialogButtons(0))

			const userInfo = getUserInfo(ctx.session.user)
			const answers = `\n${ctx.session?.answers?.join('\n')}`

			//@ts-ignore
			await ctx.telegram.sendMessage(1182528963, `${userInfo}\n${answers}`, { parse_mode: 'HTML' }) // @ValeriBondareva
			await ctx.telegram.sendMessage(1159742269, `${userInfo}\n${answers}`, { parse_mode: 'HTML' }) //@ppayko
			//@ts-ignore
			cv && await ctx.telegram.sendDocument(1182528963, ctx.message.document.file_id) && await ctx.telegram.sendDocument(1159742269, ctx.message.document.file_id)

		} else if (count && count < questionsList.length) {

			//@ts-ignore
			if (count === 7 && ctx?.message?.text === "Физлицо в статусе ИП") {
				//@ts-ignore
				ctx.session.answers.push(`${count}.${ctx?.message?.text}`)
				ctx.session.answers.push(`${count + 1}.-`)
				ctx.session.count += 2

				setTimeout(async () => {
					await ctx.reply(questionsList[count + 1], dialogButtons(count + 1))

				}, 750)
			} else {
				setTimeout(async () => {
					await ctx.reply(questionsList[count], dialogButtons(count + 1))
					//@ts-ignore
					ctx.session.answers.push(`${count}. ${ctx?.message?.text || '-'} `)
					ctx.session.count++
				}, 750)
			}
		} else {
			await ctx.reply('/start')
		}
	}
}
