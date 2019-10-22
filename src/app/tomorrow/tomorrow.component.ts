import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})
export class TomorrowComponent implements OnInit {
  thingsToDoTomorrow: string[];

  constructor() {
    this.thingsToDoTomorrow = ['clean my room',
    'take a jog',
    'do 40 push-ups'];
   }

  ngOnInit() {
  }

  addTodo(value: string) {
    if (value !== '') {
      this.thingsToDoTomorrow.push(value)
    } else {
      alert('Field required **')
    }
  }

  deleteItem(todo: string) {
  	for (let i = 0; i <= this.thingsToDoTomorrow.length; i++) {
  		if (todo === this.thingsToDoTomorrow[i]) {
  			this.thingsToDoTomorrow.splice(i,1)
  		}
  	}
  }

  todoSubmit(value:any) {
    if (value !== '') {
      this.thingsToDoTomorrow.push(value.todo)
    } else {
      alert('Field required **')
    } 
  }

}
