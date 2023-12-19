import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TODO } from './models/todo.model';
import { Guid } from 'guid-typescript';
import { ToDoListService } from './to-do-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //todos:TODO[]=[];


  constructor(){}
 // todos=this.toDoListService.todos;
  // onSubmit(form:NgForm){

  //   //this.todos.push(todo);
  //   this.toDoListService.addTask(form);
  //   form.resetForm();
  // }

  // onComplete(id:Guid){
  //   // const todo=this.todos.filter( x=>x.ID === id )[0];
  //   // todo.isCompletted=true;
  //   this.toDoListService.completeTask(id);
  // }

  // onDelete(id:Guid){
  //   // const todo=this.todos.filter( x=>x.ID === id )[0];
  //   // const index=this.todos.indexOf(todo,0);
  //   // if(index >-1){
  //   //   this.todos.splice(index,1);
  //   // }
  //   this.toDoListService.deleteTask(id);
  // }

}
