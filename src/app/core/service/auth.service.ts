import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: Auth,
    private router: Router) { }
  

    login(email: string, password: string) {
      return from(signInWithEmailAndPassword(this.afAuth,email,password));
    }

    logout(){
      return from(this.afAuth.signOut())
    }
}
