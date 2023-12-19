import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private toDoListService:ToDoListService){}
  onSubmit(form:NgForm){
    this.toDoListService.addTask(form);
    form.resetForm();

  }

}
