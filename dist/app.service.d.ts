import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
export declare class AppService {
    private readonly taskRepository;
    constructor(taskRepository: Repository<TaskEntity>);
    getAll(): Promise<TaskEntity[]>;
    getById(id: number): Promise<TaskEntity>;
    createTask(name: string): Promise<TaskEntity[]>;
    doneTask(id: number): Promise<TaskEntity[]>;
    editTask(id: number, name: string): Promise<TaskEntity[]>;
    deleteTask(id: number): Promise<TaskEntity[]>;
}
