import { Headers, Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { Task } from "./task.model";

@Injectable()

export class TaskService {

    private tasksUrl = "api/tasks";
    private headers = new Headers({'Content-type': 'application/json'});

    public constructor(private http: Http) { }

    public getAll(): Observable<Task[]> {
        return this.http.get(this.tasksUrl)
            .catch(this.handleErrors)
            .map((response: Response) => response.json().data as Task[]);
    }
    
    public getImportant(): Observable<Task[]> {
        return this.getAll()
            .catch(this.handleErrors)
            .map(tasks => tasks.slice(0, 3));
    }

    public getById(id: number): Observable<Task> {
        let url = `${this.tasksUrl}/${id}`;

        return this.http.get(url)
        .catch(this.handleErrors)
            .map((response: Response) => response.json().data as Task);
    }

    public create(task: Task): Observable<Task> {
        let url = this.tasksUrl;
        let body = JSON.stringify(task);

        return this.http.post(url, body, {headers: this.headers})
            .catch(this.handleErrors)
            .map(response => response.json().data as Task);
    }

    public update(task: Task): Observable<Task> {
        let url = `${this.tasksUrl}/${task.id}`;
        let body = JSON.stringify(task);

        return this.http.put(url, body, { headers: this.headers })
            .catch(this.handleErrors)
            .map(() => task);
    }

    public delete(id: number): Observable<null> {
        let url = `${this.tasksUrl}/${id}`;

        return this.http.delete(url, { headers: this.headers})
            .catch(this.handleErrors)
            .map(() => null);
    }

    public searchByTitle(term: string): Observable<Task[]> {
        let url = `${this.tasksUrl}?title=${term}`;

        return this.http.get(url)
            .catch(this.handleErrors)
            .map((response: Response) => response.json().data as Task[]);
    }

    private handleErrors(error: Response) {
        console.log("Salvando o erro no arquivo de log - Erro: ", error);
        
        return Observable.throw(error);
    }

}