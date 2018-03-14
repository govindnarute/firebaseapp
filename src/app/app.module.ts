import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule,AngularFireAuth } from 'angularfire2/auth';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from "./provider/auth.service";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
export const firebaseconfig = {
    apiKey: "AIzaSyCV2ab1Zx7Nd3o_QSsECpWVKruESHZbBpA",
    authDomain: "fir-app-bc830.firebaseapp.com",
    databaseURL: "https://fir-app-bc830.firebaseio.com",
    projectId: "fir-app-bc830",
    storageBucket: "fir-app-bc830.appspot.com",
    messagingSenderId: "525118750227"
  }
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseconfig)
  ],
  providers: [AuthService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
