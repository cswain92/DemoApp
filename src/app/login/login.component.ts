import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  customerLoginForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.customerLoginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveForm(){
    console.log(this.customerLoginForm.value);
    
  }

}
