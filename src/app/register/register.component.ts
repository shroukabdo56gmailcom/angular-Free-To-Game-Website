import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';//lazem ns7ab nos5a 3shan ast5dmo
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private auth:AuthService,private _router:Router){}
registration:FormGroup=new FormGroup({
  //key& value 3alatool
  first_name:new FormControl(null,[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
]),
  last_name:new FormControl(null,[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
]),
email: new FormControl(null, [Validators.email, Validators.required]),
password:new FormControl(null,[Validators.required,Validators.pattern(
  /[A-Za-z0-9]+/
)]),

})
isRegisterd=false;
submitForm(){
  console.log(this.registration.value);
  if (this.registration.invalid) {
    return console.log('invalid info');
  }else{
this.auth.register(this.registration.value).subscribe((res)=>{
  if (res.errors) {
    console.log(res.errors);  
    this.isRegisterd = true;
  }else{
    console.log(res);
    this._router.navigateByUrl('/')
  }
}
)
  }
  
}
}
