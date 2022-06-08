import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { MatFormFieldModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { initializeApp } from "firebase/app";
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SignupComponent } from './signup/signup.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AuthService } from './core/service/auth.service';
import { DataApiService } from './core/service/data-api.service';
import { AuthModule, provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrhdet6ZsrQ7TWzT1RNB5UiIXJgbZ53Ek",
  authDomain: "fir-264ec.firebaseapp.com",
  projectId: "fir-264ec",
  storageBucket: "fir-264ec.appspot.com",
  messagingSenderId: "961278004125",
  appId: "1:961278004125:web:da7b219084858fa700bd74"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    MatStepperModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
  providers: [AuthService,DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

