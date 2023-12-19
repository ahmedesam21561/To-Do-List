import { Injectable } from '@angular/core';
import { TODO } from './models/todo.model';
import { NgForm } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  todos:TODO[]=[];
  toDoListChanged=new Subject<TODO[]>();

  constructor() { }

  getToDoList(){
    return this.todos.slice();
  }

  addTask(form:NgForm){
    let todo=new TODO(Guid.create(),form.value.title,false);
    console.log("todo before add to todos : "+ todo.Title);
    this.todos.push(todo);
    console.log("todo after add to todos : "+ this.todos[0].Title);
    this.toDoListChanged.next(this.todos.slice());

  }
  deleteTask(id:Guid){
    let todo=this.todos.filter( x=>x.ID === id )[0];
    let index=this.todos.indexOf(todo,0);
    if(index >-1){
      this.todos.splice(index,1);
    }
    this.toDoListChanged.next(this.todos.slice());
  }

  completeTask(id:Guid){
    let todo=this.todos.filter( x=>x.ID === id )[0];
    todo.isCompletted=true;
    this.toDoListChanged.next(this.todos.slice());
  }

}
