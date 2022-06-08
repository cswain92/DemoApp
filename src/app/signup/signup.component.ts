import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';
import { passwordMatchValidator} from './passwordmatch.validator';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstFormGroup:FormGroup;
  secondFormGroup = this._formBuilder.group({
    state: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required],
  });
  isLinear = false;
  firstFormValid:boolean = false;
  secondFormValid:boolean = false;
  isSumitted:boolean=false;

  constructor(private _formBuilder: FormBuilder, private router:Router, private authService:AuthService,private _snackBar: MatSnackBar) {
    // this.firstFormGroup.setValidators(passwordMatchValidator());
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z&.() ]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z&.() ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("(0/91)?[7-9][0-9]{9}")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(6)]]
    }, {
      validators:passwordMatchValidator()
    });
    // console.log(this.firstFormGroup);
    
  }

  ngOnInit(): void {
    // console.log(this.firstFormGroup);
    
  }

  get confirmPassword() {
    return this.firstFormGroup.get('confirmPassword');
  }

  savefirstFormGroup(){
    if(!this.firstFormGroup.valid) return;
    this.firstFormValid = true;
    this.isSumitted = true;
    // console.log(this.firstFormGroup.value);
    
  }
  saveSecondFormGroup(){
    if(!this.secondFormGroup.valid) return;
    this.secondFormValid = true;
    // console.log(this.secondFormGroup.value);
    
  }
  backToHome(){
    this.router.navigate(['/']);
  }
  next(){
    
    console.log(this.firstFormGroup);
  }

  signIn(){
    
    if(this.firstFormGroup.valid && this.secondFormGroup.valid){
      this.authService.signupUser(this.firstFormGroup.value.firstName,this.firstFormGroup.value.phone,this.secondFormGroup.value.state,this.secondFormGroup.value.city,this.secondFormGroup.value.zip,this.firstFormGroup.value.email,this.firstFormGroup.value.password).subscribe((val:any)=> {
        console.log(val);
        if(val.hasOwnProperty('operationType') && val.operationType == "signIn"){
          localStorage.setItem('token',val.user.accessToken);
          localStorage.setItem('displayName',val.user.displayName);
          localStorage.setItem('isLoggedIn','true');
          localStorage.setItem('providerData',JSON.stringify(val.user.providerData));
  
          this.router.navigate(['/dashboard']);
          this._snackBar.open('You have scccessfully registered in!', 'dismiss', {
            duration: 4000
          });
        }
      })
    } return ;
  }
  log(data:any){
    if(data.errors?.passwordDontMatch) return true;
    return false;   
  }
  get f1(){
    return this.firstFormGroup.controls;
  }

}
