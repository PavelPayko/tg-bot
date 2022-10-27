import { Markup } from 'telegraf'

export function actionButtons() {
	return Markup.keyboard(
		[
			Markup.button.callback('⚡️ Создать задачу', 'create'),
			Markup.button.callback('📋 Список задач', 'list'),
			Markup.button.callback('✅ Завершить', 'done'),
			Markup.button.callback('✏️ Редактирование', 'edit'),
			Markup.button.callback('❌ Удаление', 'delete')
		],
		{
			columns: 2
		}
	)
}

export function dialogButtons(num) {
	const buttons = {
		0: Markup.keyboard(
			[],
			{
				columns: 2
			}
		),
		1: Markup.keyboard(
			[
				Markup.button.callback('1. 0', 'create'),
				Markup.button.callback('1. 1-3 года', 'create'),
				Markup.button.callback('1. 3-6 лет', 'create'),
				Markup.button.callback('1. 6+ лет', 'create'),
			],
			{
				columns: 2
			}
		),
		2: Markup.keyboard(
			[
				Markup.button.callback('2. 0', 'create'),
				Markup.button.callback('2. 1-3 года', 'create'),
				Markup.button.callback('2. 3-6 лет', 'create'),
				Markup.button.callback('2. 6+ лет', 'create'),
			],
			{
				columns: 2
			}
		),
		3: Markup.keyboard(
			[
				Markup.button.callback('3. Да', 'create'),
				Markup.button.callback('3. Нет', 'create'),
			],
			{
				columns: 2
			}
		),
		4: Markup.keyboard(
			[
				Markup.button.callback('4. 1-3', 'create'),
				Markup.button.callback('4. 3-10', 'create'),
				Markup.button.callback('4. 10+', 'create'),
			],
			{
				columns: 2
			}
		),
		5: Markup.keyboard(
			[
				Markup.button.callback('5. Разработчик', 'create'),
			],
			{
				columns: 2
			}
		),
		6: Markup.keyboard(
			[
				Markup.button.callback('6. 50 - 100к', 'create'),
				Markup.button.callback('6. 100 - 150к', 'create'),
				Markup.button.callback('6. 150+', 'create'),
			],
			{
				columns: 2
			}
		),
		7: Markup.keyboard(
			[
				Markup.button.callback('7. Физлицо', 'create'),
				Markup.button.callback('7. Физлицо в статусе ИП', 'create'),
			],
			{
				columns: 2
			}
		),
		8: Markup.keyboard(
			[
				Markup.button.callback('8. Да', 'create'),
				Markup.button.callback('8. Нет', 'create'),
			],
			{
				columns: 2
			}
		),
		9: Markup.keyboard(
			[
				Markup.button.callback('9. Да', 'create'),
				Markup.button.callback('9. Нет', 'create'),
			],
			{
				columns: 2
			}
		),
	}

	return buttons[num]
}
