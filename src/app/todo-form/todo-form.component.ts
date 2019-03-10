import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  model = new Todo(12, 'Une chose à faire', 'Work');
  places = ['Work', 'Home'];
  constructor() {}

  ngOnInit() {}
}
