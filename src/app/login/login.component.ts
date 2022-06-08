import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  customerLoginForm:FormGroup;

  constructor(private fb:FormBuilder, public authService:AuthService, private router:Router,private _snackBar: MatSnackBar) { 
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
      if(val.hasOwnProperty('operationType') && val.operationType == "signIn"){
        localStorage.setItem('token',val.user.accessToken);
        localStorage.setItem('displayName',val.user.displayName);
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('providerData',JSON.stringify(val.user.providerData));

        this.router.navigate(['/dashboard']);
        this._snackBar.open('You have scccessfully Logged in!', 'dismiss', {
          duration: 4000
        });
      }
      
    })
    
  }

}
