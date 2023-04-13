"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuesionsListButtons = exports.vacancyButtons = exports.dialogButtonsData = void 0;
const telegraf_1 = require("telegraf");
exports.dialogButtonsData = {
    Frontend: {
        remove: telegraf_1.Markup.removeKeyboard(),
        0: telegraf_1.Markup.removeKeyboard(),
        1: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('0', 'create'),
            telegraf_1.Markup.button.callback('1-3 года', 'create'),
            telegraf_1.Markup.button.callback('3-6 лет', 'create'),
            telegraf_1.Markup.button.callback('6+ лет', 'create'),
        ], {
            columns: 2
        }).oneTime(),
        2: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Да', 'create'),
            telegraf_1.Markup.button.callback('Нет', 'create'),
        ], {
            columns: 2,
        }).oneTime(),
        3: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('1-3', 'create'),
            telegraf_1.Markup.button.callback('3-10', 'create'),
            telegraf_1.Markup.button.callback('10+', 'create'),
        ], {
            columns: 3
        }).oneTime(),
        4: telegraf_1.Markup.removeKeyboard(),
        5: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('50 - 100к', 'create'),
            telegraf_1.Markup.button.callback('100 - 150к', 'create'),
            telegraf_1.Markup.button.callback('150+', 'create'),
        ], {
            columns: 3
        }).oneTime(),
        6: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Физлицо', 'create'),
            telegraf_1.Markup.button.callback('Самозанятый', 'create'),
            telegraf_1.Markup.button.callback('Физлицо в статусе ИП', 'create'),
        ], {
            columns: 2,
        })
            .oneTime(),
        7: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Да', 'create'),
            telegraf_1.Markup.button.callback('Нет', 'create'),
        ], {
            columns: 2,
        }).oneTime(),
        8: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Да', 'create'),
            telegraf_1.Markup.button.callback('Нет', 'create'),
        ], {
            columns: 2,
        }).oneTime(),
        9: telegraf_1.Markup.removeKeyboard(),
        10: telegraf_1.Markup.removeKeyboard(),
        11: telegraf_1.Markup.removeKeyboard(),
    },
    Backend: {
        remove: telegraf_1.Markup.removeKeyboard(),
        0: telegraf_1.Markup.removeKeyboard(),
        1: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('0', 'create'),
            telegraf_1.Markup.button.callback('1-3 года', 'create'),
            telegraf_1.Markup.button.callback('3-6 лет', 'create'),
            telegraf_1.Markup.button.callback('6+ лет', 'create'),
        ], {
            columns: 2
        }).oneTime(),
        2: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Да', 'create'),
            telegraf_1.Markup.button.callback('Нет', 'create'),
        ], {
            columns: 2,
        }).oneTime(),
        3: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('1-3', 'create'),
            telegraf_1.Markup.button.callback('3-10', 'create'),
            telegraf_1.Markup.button.callback('10+', 'create'),
        ], {
            columns: 3
        }).oneTime(),
        4: telegraf_1.Markup.removeKeyboard(),
        5: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('50 - 100к', 'create'),
            telegraf_1.Markup.button.callback('100 - 150к', 'create'),
            telegraf_1.Markup.button.callback('150+', 'create'),
        ], {
            columns: 3
        }).oneTime(),
        6: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Физлицо', 'create'),
            telegraf_1.Markup.button.callback('Самозанятый', 'create'),
            telegraf_1.Markup.button.callback('Физлицо в статусе ИП', 'create'),
        ], {
            columns: 2,
        })
            .oneTime(),
        7: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Да', 'create'),
            telegraf_1.Markup.button.callback('Нет', 'create'),
        ], {
            columns: 2,
        }).oneTime(),
        8: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Да', 'create'),
            telegraf_1.Markup.button.callback('Нет', 'create'),
        ], {
            columns: 2,
        }).oneTime(),
        9: telegraf_1.Markup.removeKeyboard(),
        10: telegraf_1.Markup.removeKeyboard(),
        11: telegraf_1.Markup.removeKeyboard(),
    }
};
exports.vacancyButtons = telegraf_1.Markup.keyboard([
    telegraf_1.Markup.button.callback('Frontend', 'create'),
    telegraf_1.Markup.button.callback('Backend', 'create')
], {
    columns: 2,
}).oneTime();
exports.getQuesionsListButtons = telegraf_1.Markup.keyboard([
    telegraf_1.Markup.button.callback('фронт', 'create'),
    telegraf_1.Markup.button.callback('бэк', 'create')
], {
    columns: 2,
}).oneTime();
//# sourceMappingURL=app.buttons.js.map