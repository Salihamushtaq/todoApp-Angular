import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  getUser(val:string){
    console.warn(val)
  }
  getData(val:string){
    console.warn(val)
}
getDatadown(val:string){
  console.warn(val)
}
getover(val:any){
  console.warn('over')
}
getenter(val:any){
  console.warn('enter')
}
leavemouse(val:any){
  console.warn(val)
}
}
