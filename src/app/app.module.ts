import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ComplettedListTasksComponent } from './completted-list-tasks/completted-list-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTasksComponent,
    ComplettedListTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
