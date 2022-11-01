import { User } from './context.interface'

export const showList = todos =>
	`Твой список задач: \n\n${todos
		.map(todo => (todo.isCompleted ? '✅' : '🔘') + ' ' + todo.name + '\n\n')
		.join('')}`

export const questionsList = [
	'Скажите, пожалуйста, у Вас опыт коммерческой разработки общий сколько ?',
	'Сколько опыта коммерческой разработки на React или Vue ?',
	'Работали ли Вы в команде разработчиков ?',
	'Сколько человек было в команде ?',
	'Какую роль играли на проекте ?',
	'Какая Ваша зп вилка ?',
	'Вы работаете как физлицо или юрлицо ?',
	'Если не работаете как ИП, то готовы были бы открыть ИП для работы с нами, с учетом, что мы покрываем все налоги ?',
	'Гражданство РФ ?',
	'Почему решили сменить место работы?',
	'Что ждете от нового места работы ?',
	'Пришлите, пожалуйста, свое CV',
]

export const greet = (name: string) => `	Добрый день, ${name}!
		Меня зовут Валерия. Я HR менеджер компании Kvando Technologies. Приятно познакомиться! 
		Предлагаю для начала ответить на пару вопросов, а затем пообщаемся детально`

export const feedback = () => `Спасибо за обратную связь. HR менеджер свяжется с Вами в ближайшее время. 
			Телеграм для связи @ValeriBondareva`

export const getUserInfo = (user: User) => `
			Никнейм: ${user?.username ? '@' + user.username : '🤐'}
			Имя: ${user?.fist_name || '🤐'}
			Фамилия: ${user?.lastname || '🤐'}
			Профиль: <a href="tg://user?id=${user?.id}" > ${user?.fist_name || 'noname'}${user.lastname ? ' ' + user.lastname : ''} </a>
				` 