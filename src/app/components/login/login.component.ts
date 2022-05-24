import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User | undefined;

  Login(username: String, password: String) {
    this.user = new User(username, password);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

}

class User {
  password: String;
  user: String;
  constructor(user: String, password: String) {
    this.password = password;
    this.user = user;
  }
}
