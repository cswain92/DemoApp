import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, User } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { from, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  app: any;
  auth: any;
  db: any;
  firestore: any;

  constructor(public afAuth: Auth,
    private router: Router) {
    // this.app = firebase.initializeApp(environment.firebase);
    // this.auth = this.app.auth()
    // this.db = this.app.database()
    // this.firestore = this.app.firestore()
    // this.userProfileRef = "https://fir-264ec-default-rtdb.firebaseio.com/users.json";

  }


  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.afAuth, email, password));
  }

  // signUp(email: string, password: string, username: string) {
  //   return createUserWithEmailAndPassword(email, password)
  // }

  // signupUser(name: string, phone: string, state: any, city: string,zip:any, email: string, password: string ){
  //  return  createUserWithEmailAndPassword(this.afAuth,email, password)
  //   .then((registeredUser:any) => {
  //     this.firestore.collection("usersCollection")
  //     .add({
  //       uid: registeredUser.user.uid,
  //       field: 'Info you want to get here',
  //       anotherField: 'Another Info...',
  //     })
  //   })
  // }
  signupUser(name: string, phone: string, state: any, city: string,zip:any, email: string, password: string ){
    return from(createUserWithEmailAndPassword(this.afAuth,email,password)).pipe(switchMap(({user})=> updateProfile(user,{displayName: name})))
   }
  logout() {
    return from(this.afAuth.signOut())
  }
  getUserDetails(){
    const userDetails = localStorage.getItem('providerData');
    return userDetails;
  }
}
