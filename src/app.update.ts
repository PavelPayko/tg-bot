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
import { actionButtons, dialogButtons } from './app.buttons'
import { AppService } from './app.service'
import { questionsList, showList } from './app.utils'
import { Context } from './context.interface'

let count = 0

@Update()
export class AppUpdate {
	constructor(
		@InjectBot() private readonly bot: Telegraf<Context>,
		private readonly appService: AppService
	) { }

	@Start()
	async startCommand(ctx: Context) {
		console.log(ctx);

		ctx.session.count = 1

		await ctx.reply(`Добрый день!
		Меня зовут Валерия. Я HR менеджер компании Kvando Technologies. Приятно познакомиться! 
		Предлагаю для начала ответить на пару вопросов, а затем пообщаемся детально`,
			actionButtons()
		)

		await ctx.reply(`1. Скажите, пожалуйста, у Вас опыт коммерческой разработки общий сколько ? ${ctx}`, dialogButtons(1))
	}

	// @Hears(['1. 0', '1. 1-3 года', '1. 3-6 лет', '1. больше 6 лет'])
	// async firstTask(ctx: Context) {
	// 	ctx.session.type = 'create'
	// 	await ctx.reply('2. Сколько опыта коммерческой разработки на React или Vue ?', dialogButtons(2))
	// }

	// @Hears(['1. 0', '1. 1-3 года', '1. 3-6 лет', '1. больше 6 лет'])
	// async secondTask(ctx: Context) {
	// 	ctx.session.count = 2
	// 	console.log(ctx.session.count);
	// 	await ctx.reply('2. Сколько опыта коммерческой разработки на React или Vue ?', dialogButtons(2))
	// }

	// @Hears(['2. 0', '2. 1-3 года', '2. 3-6 лет', '2. больше 6 лет'])
	// async thirdTask(ctx: Context) {
	// 	ctx.session.count = 3
	// 	console.log(ctx.session.count);
	// 	ctx.session.type = 'create'
	// 	await ctx.reply('3. Работали ли Вы в команде разработчиков ?', dialogButtons(3))
	// }

	// @Hears(['3. Да', '3. Нет'])
	// async fourthTask(ctx: Context) {
	// 	ctx.session.type = 'create'
	// 	await ctx.reply('4. Сколько человек было в команде ?', dialogButtons(4))
	// }

	// @Hears(['4. 1-3', '4. 3-10', '4. 10+'])
	// async fifthTask(ctx: Context) {
	// 	ctx.session.type = 'create'
	// 	await ctx.reply('5. Какие функции на проекте вы выполняли?', dialogButtons(5))
	// }

	// @Hears('text')
	// async sixthTask(ctx: Context) {
	// 	ctx.session.type = 'create'
	// 	await ctx.reply('6. Какая Ваша зп вилка ?', dialogButtons(6))
	// }

	// @Hears(['6. 50 - 100к', '6. 100 - 150к', '6. 150+'])
	// async seventhTask(ctx: Context) {
	// 	ctx.session.type = 'create'
	// 	await ctx.reply('7. Вы работаете как физлицо или юрлицо ?', dialogButtons(7))
	// }

	// @Hears(['7. Физлицо', '7. Физлицо в статусе ИП'])
	// async eighthTask(ctx: Context) {
	// 	ctx.session.type = 'create'
	// 	await ctx.reply('8. Если не работаете как ИП, то готовы были бы открыть ИП для работы с нами, с учетом, что мы покрываем все налоги ?', dialogButtons(8))
	// }

	// @Hears(['8. Да', '8. Нет'])
	// async ninthTask(ctx: Context) {
	// 	ctx.session.type = 'create'
	// 	await ctx.reply('9. Гражданство РФ ?', dialogButtons(9))
	// }

	// @Hears('📋 Список задач')
	// async listTask(ctx: Context) {
	// 	const todos = await this.appService.getAll()
	// 	await ctx.reply(showList(todos))
	// }

	// @Hears('✅ Завершить')
	// async doneTask(ctx: Context) {
	// 	ctx.session.type = 'done'
	// 	await ctx.deleteMessage()
	// 	await ctx.reply('Напиши ID задачи: ')
	// }

	// @Hears('✏️ Редактирование')
	// async editTask(ctx: Context) {
	// 	ctx.session.type = 'edit'
	// 	await ctx.deleteMessage()
	// 	await ctx.replyWithHTML(
	// 		'Напиши ID и новое название задачи: \n\n' +
	// 		'В формате - <b>1 | Новое название</b>'
	// 	)
	// }

	// @Hears('❌ Удаление')
	// async deleteTask(ctx: Context) {
	// 	ctx.session.type = 'remove'
	// 	await ctx.deleteMessage()
	// 	await ctx.reply('Напиши ID задачи: ')
	// }

	// @On('text')
	// async getMessage(@Message('text') message: string, @Ctx() ctx: Context) {
	// 	if (!ctx.session.type) return

	// 	if (ctx.session.type === 'create') {
	// 		const todos = await this.appService.createTask(message)
	// 		await ctx.reply(showList(todos))
	// 	}

	// 	if (ctx.session.type === 'done') {
	// 		const todos = await this.appService.doneTask(Number(message))

	// 		if (!todos) {
	// 			await ctx.deleteMessage()
	// 			await ctx.reply('Задачи с таким ID не найдено!')
	// 			return
	// 		}

	// 		await ctx.reply(showList(todos))
	// 	}

	// 	if (ctx.session.type === 'edit') {
	// 		const [taskId, taskName] = message.split(' | ')
	// 		const todos = await this.appService.editTask(Number(taskId), taskName)

	// 		if (!todos) {
	// 			await ctx.deleteMessage()
	// 			await ctx.reply('Задачи с таким ID не найдено!')
	// 			return
	// 		}

	// 		await ctx.reply(showList(todos))
	// 	}

	// 	if (ctx.session.type === 'remove') {
	// 		const todos = await this.appService.deleteTask(Number(message))

	// 		if (!todos) {
	// 			await ctx.deleteMessage()
	// 			await ctx.reply('Задачи с таким ID не найдено!')
	// 			return
	// 		}

	// 		await ctx.reply(showList(todos))
	// 	}
	// }

	@On('message')
	async getMsg(@Message('message') message: string, @Ctx() ctx: Context) {
		// if (!ctx.session.count) return
		const count = ctx.session.count

		if (ctx.session.count === 5) {
			// const todos = await this.appService.createTask(message)
			console.log(ctx.session.count);
			await ctx.reply(questionsList[count - 1], dialogButtons(0))
			ctx.session.count++
		}
		else {
			console.log(ctx.session.count);
			await ctx.reply(questionsList[count - 1], dialogButtons(count))
			ctx.session.count++
		}


	}

	// @On('text')
	// async getMessage(@Message('text') message: string, @Ctx() ctx: Context) {
	// 	if (!ctx.session.type) return

	// 	if (ctx.session.type === 'create') {
	// 		const todos = await this.appService.createTask(message)
	// 		await ctx.reply(showList(todos))
	// 	}

	// 	if (ctx.session.type === 'done') {
	// 		const todos = await this.appService.doneTask(Number(message))

	// 		if (!todos) {
	// 			await ctx.deleteMessage()
	// 			await ctx.reply('Задачи с таким ID не найдено!')
	// 			return
	// 		}

	// 		await ctx.reply(showList(todos))
	// 	}

	// 	if (ctx.session.type === 'edit') {
	// 		const [taskId, taskName] = message.split(' | ')
	// 		const todos = await this.appService.editTask(Number(taskId), taskName)

	// 		if (!todos) {
	// 			await ctx.deleteMessage()
	// 			await ctx.reply('Задачи с таким ID не найдено!')
	// 			return
	// 		}

	// 		await ctx.reply(showList(todos))
	// 	}

	// 	if (ctx.session.type === 'remove') {
	// 		const todos = await this.appService.deleteTask(Number(message))

	// 		if (!todos) {
	// 			await ctx.deleteMessage()
	// 			await ctx.reply('Задачи с таким ID не найдено!')
	// 			return
	// 		}

	// 		await ctx.reply(showList(todos))
	// 	}
	// }
}
