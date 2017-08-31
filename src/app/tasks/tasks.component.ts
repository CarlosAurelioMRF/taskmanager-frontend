import { Component, OnInit } from '@angular/core';

const TASKS: Array<any> = [
    { id: 1, title: 'Fazer Tarefa 1' },
    { id: 2, title: 'Fazer Tarefa 2' },
    { id: 3, title: 'Fazer Tarefa 3' },
    { id: 4, title: 'Fazer Tarefa 4' },
    { id: 5, title: 'Fazer Tarefa 5' }
];

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {

    public tasks;

    public ngOnInit() {
        this.tasks = TASKS;
    }

}