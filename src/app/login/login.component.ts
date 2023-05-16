import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _auth: AuthService, private _router: Router) {}
  Login: FormGroup = new FormGroup({
    //key& value 3alatool
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/[A-Za-z0-9]+/),
    ]),
  });
  errorMsg:any;
  
  submitLogin() {
    if (this.Login.invalid) {
      return;
    } else {
      this._auth.login(this.Login.value).subscribe((res) => {
        if (res.token) {
          console.log(res);    
          localStorage.setItem('jwt',res.token)
          this._auth.saveData()
          this._router.navigateByUrl("/")
        } else {
          this.errorMsg=res.message;
        }
      });
    }
  }
}
