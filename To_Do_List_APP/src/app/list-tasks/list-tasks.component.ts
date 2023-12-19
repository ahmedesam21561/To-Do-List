import { Subscription } from 'rxjs';
import { Component,OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list.service';
import { Guid } from 'guid-typescript';
import { TODO } from '../models/todo.model';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  todos:TODO[]=[];
  // subscription:Subscription;

  constructor(private toDoListService:ToDoListService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    this.todos=this.toDoListService.getToDoList();

    this.toDoListService.toDoListChanged
      .subscribe(arg => this.todos = arg);

  }
  onComplete(id:Guid){
    // const todo=this.todos.filter( x=>x.ID === id )[0];
    // todo.isCompletted=true;
    this.toDoListService.completeTask(id);
  }


}
