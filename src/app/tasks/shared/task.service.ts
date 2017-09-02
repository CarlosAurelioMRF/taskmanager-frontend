import { Injectable } from "@angular/core";

import { Task } from "./task.model";

const TASKS: Array<Task> = [
    { id: 1, title: 'Fazer Tarefa 1' },
    { id: 2, title: 'Fazer Tarefa 2' },
    { id: 3, title: 'Fazer Tarefa 3' },
    { id: 4, title: 'Fazer Tarefa 4' },
    { id: 5, title: 'Fazer Tarefa 5' }
];

@Injectable()

export class TaskService {

    public getTasks(): Array<Task> {
        return TASKS;
    }
    
}