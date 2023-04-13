"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
let AppService = class AppService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAll() {
        return this.taskRepository.find();
    }
    async getById(id) {
        return this.taskRepository.findOneBy({ id });
    }
    async createTask(name) {
        const task = await this.taskRepository.create({ name });
        await this.taskRepository.save(task);
        return this.getAll();
    }
    async doneTask(id) {
        const task = await this.getById(id);
        if (!task)
            return null;
        task.isCompleted = !task.isCompleted;
        await this.taskRepository.save(task);
        return this.getAll();
    }
    async editTask(id, name) {
        const task = await this.getById(id);
        if (!task)
            return null;
        task.name = name;
        await this.taskRepository.save(task);
        return this.getAll();
    }
    async deleteTask(id) {
        const task = await this.getById(id);
        if (!task)
            return null;
        await this.taskRepository.delete({ id });
        return this.getAll();
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.TaskEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map