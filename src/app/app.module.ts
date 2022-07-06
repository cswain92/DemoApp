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
import { provideFirebaseApp, getApp } from '@angular/fire/app';
import { Firestore, FirestoreInstances, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SignupComponent } from './signup/signup.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AuthService } from './core/service/auth.service';
import { DataApiService } from './core/service/data-api.service';
import { AuthModule, provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DataTableComponent } from './data-table/data-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

const app = initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DataTableComponent,
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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
    
    
    
  ],
  providers: [DataApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

