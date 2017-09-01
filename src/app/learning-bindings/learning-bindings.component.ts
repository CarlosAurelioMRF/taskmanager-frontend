import { Component } from '@angular/core';

@Component({
    selector: 'learning-bindings',
    templateUrl: './learning-bindings.component.html'
})

export class LearningBindingsComponent {

    public onClick() {
        console.log("Evento onClick disparado");
    }

    public onMouseOver() {
        console.log("Evento onMouseOver disparado");
    }

    public onKeyDown() {
        console.log("Evento onKeyDown disparado");
    }

    public onKeyUp() {
        console.log("Evento onKeyUp disparado");
    }
}