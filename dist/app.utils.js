"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfo = exports.feedback = exports._feedback = exports.greet = exports._greet = exports.questionsListData = void 0;
exports.questionsListData = {
    Frontend: [
        'Назовите , пожалуйста , Ваш стек технологий?',
        'Сколько опыта коммерческой разработки на React или Vue ?',
        'Работали ли Вы в команде разработчиков ?',
        'Сколько человек было в команде ?',
        'Какие функции выполняли на проекте ?',
        'Какая Ваша зп вилка ?',
        'Вы работаете как физлицо или юрлицо ?',
        'Если не работаете как ИП, то готовы были бы открыть ИП для работы с нами, с учетом, что мы покрываем все налоги ?',
        'Гражданство РФ ?',
        'Почему решили сменить место работы?',
        'Что ждете от нового места работы ?',
        'Прикрепите ,пожалуйста , CV любым удобным для Вас способом',
    ],
    Backend: [
        'Назовите , пожалуйста , Ваш стек технологий?',
        'Сколько опыта коммерческой разработки на Golang?',
        'Работали ли Вы в команде разработчиков ?',
        'Сколько человек было в команде ?',
        'Какие функции выполняли на проекте ?',
        'Какая Ваша зп вилка ?',
        'Вы работаете как физлицо или юрлицо ?',
        'Если не работаете как ИП, то готовы были бы открыть ИП для работы с нами, с учетом, что мы покрываем все налоги ?',
        'Гражданство РФ ?',
        'Почему решили сменить место работы?',
        'Что ждете от нового места работы ?',
        'Прикрепите ,пожалуйста , CV любым удобным для Вас способом',
    ]
};
const _greet = (name) => `	
Добрый день, ${name}!
Меня зовут Валерия. Я HR менеджер компании Kvando Technologies. Приятно познакомиться! 
Предлагаю ответить на пару вопросов, а затем пообщаемся детально
`;
exports._greet = _greet;
const greet = (name) => `	
Добрый день, ${name}!
Я HR менеджер компании Kvando Technologies. Приятно познакомиться! 
Предлагаю ответить на пару вопросов, а затем пообщаемся детально
`;
exports.greet = greet;
const _feedback = () => `Спасибо за обратную связь. HR менеджер свяжется с Вами в ближайшее время. 
			Телеграм для связи @ValeriBondareva`;
exports._feedback = _feedback;
const feedback = () => `Спасибо за обратную связь. 
			HR менеджер свяжется с Вами в ближайшее время.`;
exports.feedback = feedback;
const getUserInfo = (user) => `
Никнейм: ${(user === null || user === void 0 ? void 0 : user.username) ? '@' + user.username : '🤐'}
Имя: ${(user === null || user === void 0 ? void 0 : user.fist_name) || '🤐'}
Фамилия: ${(user === null || user === void 0 ? void 0 : user.lastname) || '🤐'}
Профиль: <a href="tg://user?id=${user === null || user === void 0 ? void 0 : user.id}" > ${(user === null || user === void 0 ? void 0 : user.fist_name) || 'noname'}${user.lastname ? ' ' + user.lastname : ''} </a>
`;
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=app.utils.js.map