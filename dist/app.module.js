"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const LocalSession = require("telegraf-session-local");
const app_service_1 = require("./app.service");
const app_update_1 = require("./app.update");
const config_1 = require("./config");
const sessions = new LocalSession({ database: 'session_db.json' });
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_telegraf_1.TelegrafModule.forRoot({
                middlewares: [sessions.middleware()],
                token: config_1.TG_TOKEN
            }),
        ],
        providers: [app_service_1.AppService, app_update_1.AppUpdate]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map