import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule,AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from "./provider/auth.service";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {firebaseconfig} from '../environments/environment';
import {PopupModule} from 'ng2-opd-popup';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
     PopupModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule
   
  ],
  providers: [AuthService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
