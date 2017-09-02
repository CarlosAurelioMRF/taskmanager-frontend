import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {

    public tasks: Array<Task>;
    public selectedTask: Task;

    public constructor(private taskService: TaskService) {
    }

    public ngOnInit() {
        // Realizando o processamento assync
        this.taskService.getTasks()
            .then((tasks) => this.tasks = tasks)
            .catch((error_msg) => console.log(error_msg));
    }

    public onSelect(task: Task): void {
        this.selectedTask = task;
    }

}

// arrow function: "=>"
//function() {
//    alert("Learn");
//}

//() => {
//
//}

//() => alert("Learn");