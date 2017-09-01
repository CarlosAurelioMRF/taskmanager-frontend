import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LearningBindingsComponent } from './learning-bindings/learning-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningBindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
