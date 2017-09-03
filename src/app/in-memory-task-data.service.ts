import { Injectable } from "@angular/core";

import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService {

    public createDb() {
        let tasks = [
            { id: 1, title: 'Aprender Angular' },
            { id: 2, title: 'Descansar' },
            { id: 3, title: 'Estudar muito' },
            { id: 4, title: 'Ler sobre Rails' },
            { id: 5, title: 'Tomar café' },
            { id: 6, title: 'Relembrar um pouco de Ruby' },
            { id: 7, title: 'Não dormir' },
            { id: 8, title: 'Comer bastante' },
            { id: 9, title: 'Ir ao banheiro com frenquencia' }
        ];

        return { tasks };
    }

}