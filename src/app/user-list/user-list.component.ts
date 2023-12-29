import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  template: `
    <p class="custom">
      user-list works!
    </p>
  `,
  styles: 
  `.custom {color: blue}`
})
export class UserListComponent {

}
