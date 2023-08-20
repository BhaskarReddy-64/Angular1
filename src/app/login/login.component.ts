import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userID: string='';
  password: string='';

  login()
  {
    console.log('userID:',this.userID);
    console.log('password:',this.password)
  }

  path:string="t,,/assets/th.jpg";
}
