import { Markup } from 'telegraf'

export function dialogButtons(num) {
	const buttons = {
		0: Markup.removeKeyboard(),
		1: Markup.keyboard(
			[
				Markup.button.callback('0', 'create',),
				Markup.button.callback('1-3 года', 'create'),
				Markup.button.callback('3-6 лет', 'create'),
				Markup.button.callback('6+ лет', 'create'),
			],
			{
				columns: 2,
			},
		).oneTime(),
		2: Markup.keyboard(
			[
				Markup.button.callback('0', 'create'),
				Markup.button.callback('1-3 года', 'create'),
				Markup.button.callback('3-6 лет', 'create'),
				Markup.button.callback('6+ лет', 'create'),
			],
			{
				columns: 2
			}
		).oneTime(),
		3: Markup.keyboard(
			[
				Markup.button.callback('Да', 'create'),
				Markup.button.callback('Нет', 'create'),
			],
			{
				columns: 1
			}
		).oneTime(),
		4: Markup.keyboard(
			[
				Markup.button.callback('1-3', 'create'),
				Markup.button.callback('3-10', 'create'),
				Markup.button.callback('10+', 'create'),
			],
			{
				columns: 1
			}
		).oneTime(),
		5: Markup.removeKeyboard(),
		6: Markup.keyboard(
			[
				Markup.button.callback('50 - 100к', 'create'),
				Markup.button.callback('100 - 150к', 'create'),
				Markup.button.callback('150+', 'create'),
			],
			{
				columns: 1
			}
		).oneTime(),
		7: Markup.keyboard(
			[
				Markup.button.callback('Физлицо', 'create'),
				Markup.button.callback('Самозанятый', 'create'),
				Markup.button.callback('Физлицо в статусе ИП', 'create'),
			],
			{
				columns: 2,
			}
		)
			.oneTime(),
		8: Markup.keyboard(
			[
				Markup.button.callback('Да', 'create'),
				Markup.button.callback('Нет', 'create'),
			],
			{
				columns: 1,

			},

		).oneTime(),
		9: Markup.keyboard(
			[
				Markup.button.callback('Да', 'create'),
				Markup.button.callback('Нет', 'create'),
			],
			{
				columns: 1
			}
		).oneTime(),
		10: Markup.removeKeyboard(),
		11: Markup.removeKeyboard(),
		12: Markup.removeKeyboard(),
	}

	return buttons[num]
}
