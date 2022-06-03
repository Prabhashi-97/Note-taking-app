import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isLogged: boolean = false;

  authUsername = "abc@gmail.com"
  authPassword = "123";

  username: any;
  password: any;

  errorMsg = "";

  login() {
    if (this.username == this.authUsername) {
      if (this.password == this.authPassword) {
        this.isLogged = true;
        this.errorMsg = "";
      } else {
        this.errorMsg = "Password is invalid!";
      }
    } else {
      this.errorMsg = "Username is invalid!"
    }
  }

}
