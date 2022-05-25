import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
constructor(router: Router)

ngOnInit(): void {
    this.user = new user('','');
}
public user:  | undefined;

setUsername(event:any){
  this.user?.setUsername(event);
}

setPassword(event:any){
  this.user?.setPassword(event);
}
doLogin(){
  if(this.user == null){
    return;
  }
  if(this.user?.password == null|| this.user.password == '')
  {return;
  }
  if(this.user?.username == null|| this.user.usarname == '')
  {return;
  }
}
  localStorage.setItem('user',JSON.stringify(this.user));


doLogin(){
  localStorage.removeItem('user');

}
}


