import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoArray=[];
  todo;
  
  addTodo(value) {
    if (value !== '') {
      this.todoArray.push(value)
    } else {
      alert('Field required **')
    }
  }

  deleteItem(todo) {
  	for (let i = 0; i <= this.todoArray.length; i++) {
  		if (todo === this.todoArray[i]) {
  			this.todoArray.splice(i,1)
  		}
  	}
  }

  todoSubmit(value:any) {
    if (value !== '') {
      this.todoArray.push(value.todo)
    } else {
      alert('Field required **')
    } 
  }
}