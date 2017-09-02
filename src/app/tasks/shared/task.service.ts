import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/Observable/throw';

import { Task } from "./task.model";

@Injectable()

export class TaskService {

    private tasksUrl = "api/tasks";

    public constructor(private http: Http) { }

    public getTasks(): Observable<Task[]> {
        return this.http.get(this.tasksUrl)
            .catch(this.handleErrors)
            .map((response: Response) => response.json().data as Task[]);
    }
    
    public getImportantTasks(): Observable<Task[]> {
        return this.getTasks()
            .catch(this.handleErrors)
            .map(tasks => tasks.slice(0, 3));
    }

    public getTask(id: number): Observable<Task> {
        let url = `${this.tasksUrl}/${id}`;

        return this.http.get(url)
        .catch(this.handleErrors)
            .map((response: Response) => response.json().data as Task);
    }

    private handleErrors(error: Response) {
        console.log("Salvando o erro no arquivo de log - Erro: ", error);
        
        return Observable.throw(error);
    }

}