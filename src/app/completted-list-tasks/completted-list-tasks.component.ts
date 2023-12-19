import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ToDoListService } from '../to-do-list.service';
import { TODO } from '../models/todo.model';

@Component({
  selector: 'app-completted-list-tasks',
  templateUrl: './completted-list-tasks.component.html',
  styleUrls: ['./completted-list-tasks.component.css']
})
export class ComplettedListTasksComponent implements OnInit {

  todos:TODO[]=[];
  constructor(private toDoListService:ToDoListService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.todos=this.toDoListService.getToDoList();

    this.toDoListService.toDoListChanged
      .subscribe(arg => this.todos = arg);


  }

  onDelete(id:Guid){
    // const todo=this.todos.filter( x=>x.ID === id )[0];
    // const index=this.todos.indexOf(todo,0);
    // if(index >-1){
    //   this.todos.splice(index,1);
    // }
    this.toDoListService.deleteTask(id);
  }


}
