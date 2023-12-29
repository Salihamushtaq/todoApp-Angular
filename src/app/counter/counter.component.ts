import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
title = 'Counter';
name= 'Able to work';
count = 0;
counteradd(){
  this.count++
  console.warn(this.count)
}
counterremove(){
  this.count--
  console.warn(this.count)
}
getdata(){
  
}
}
