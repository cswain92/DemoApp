import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userData:any;

  constructor(private authService:AuthService, private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.userData = this.authService.getUserDetails();
   this.userData = JSON.parse(this.userData);
   console.log((this.userData));
   
  }

  onlogClick(){

  }
  logout(){
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('providerData');
    localStorage.removeItem('displayName');
    localStorage.removeItem('token');
    this.router.navigate(['']);
    this._snackBar.open('You have scccessfully Logged out!', 'dismiss', {
      duration: 4000
    });
  }

}
