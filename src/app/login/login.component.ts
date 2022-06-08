import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  customerLoginForm:FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService) { 
    this.customerLoginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveForm(){
    console.log(this.customerLoginForm.value);
    if(this.customerLoginForm.invalid){
      return;
    } 
    // const {email, password} = this.customerLoginForm.value;
    this.authService.login(this.customerLoginForm.value.email, this.customerLoginForm.value.password).subscribe((val:any)=> {
      console.log(val);
      
    })
    
  }

}
