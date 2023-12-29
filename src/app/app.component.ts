
import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, LoginComponent, UserListComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
    list:any = []
    task:string = '';
    ngOnInit(): void{
      this.GetAll();
    }

  title = 'World';
//   submitbtn (){
//     alert("Data is submitted");
//   }
//   getName(name:string, secondname:string){
//       alert(name);
//       alert(secondname);
//   }
//   getData(val:string){
//     console.warn(val)
// }
// displayval= '';

// getValue(value:string){
//   console.warn(value)
//   this.displayval = value;
// }

Add(){
  let obj = {
    TaskName : this.task,
    isComplete: false

  };
  this.list.push(obj);
  this.save();
  console.log('addd task:', obj)
  this.task = '';
  console.warn(this.list)
}
deleteAll(){
  this.list = [];
  this.save();
}
delete(index: number){
  if(this.list.length > index){
    this.list.splice(index, 1);
    this.save();
  }
}
ChangeStatus(index: number, currentValue: boolean){
  if(this.list.length> index){
    let obj = this.list[index];
    if(obj !=null && typeof obj != 'undefined'){
      obj.isComplete =!currentValue;
      this.list[index] = obj;
      this.save();
    }
  }
}
save(){
  localStorage.setItem("todo", JSON.stringify(this.list))
}
GetAll(){
  let value = localStorage.getItem("todo");
  if(value !='' && value != null && typeof value!= 'undefined'){
    this.list = JSON.parse(value!);
    console.log("localStorage value:", value);
  }
}
}

