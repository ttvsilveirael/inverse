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

  doLogin() {
    this.user = new User('elsilveira', 'test123');
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  doLogout(){
    localStorage.removeItem('user');
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
