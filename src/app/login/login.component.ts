import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // userID: string='';
  // password: string='';

  // login()
  // {
  //   console.log('userID:',this.userID);
  //   console.log('password:',this.password)
  // }
  username : string =""; 
  password : string =""; 
  show: boolean= false; 
  submit(){ console.log("user name is " + this.username) 
  this.clear(); } 
  clear(){ 
    this.username =""; 
    this.password = ""; 
    this.show = true; }

  path:string="t,,/assets/th.jpg";
  students: any[];

    constructor(private _loginService: LoginService) {
        this.students = this._loginService.getStudents();
    }
}
