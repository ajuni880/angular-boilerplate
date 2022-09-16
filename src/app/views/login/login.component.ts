import { Component } from '@angular/core';
import { HelloComponent } from 'components/hello/hello.component';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [HelloComponent],
  template: `
    <h1>Login form</h1>
  `
})
export class LoginComponent {}
