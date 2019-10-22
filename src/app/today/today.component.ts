import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  thingsToDoToday: string[];
  todo: string;

  constructor() {
    this.thingsToDoToday = ['play Xbox',
    'eat something healthy',
    'do 40 push-ups'];
   }
    
  ngOnInit() {
  }

  addTodo(value: string) {
    if (value !== '') {
      this.thingsToDoToday.push(value)
    } else {
      alert('Field required **')
    }
  }

  deleteItem(todo: string) {
  	for (let i = 0; i <= this.thingsToDoToday.length; i++) {
  		if (todo === this.thingsToDoToday[i]) {
  			this.thingsToDoToday.splice(i,1)
  		}
  	}
  }

  todoSubmit(value:any) {
    if (value !== '') {
      this.thingsToDoToday.push(value.todo)
    } else {
      alert('Field required **')
    } 
  }
}
