import { Component,ViewChild  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { AuthService } from "./provider/auth.service";
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isUserLogin:boolean;
  username:string;
  useremail:string;
  
  @ViewChild('logout') popup1: Popup;

  constructor(private afAuth: AngularFireAuth,private router:Router,private authService:AuthService,
  private popup:Popup){
    afAuth.authState.subscribe((auth)=>{
      if(auth==null){
        this.isUserLogin=false
      this.router.navigateByUrl("/login");
    }else{
      this.isUserLogin=true
      this.useremail=auth.email;
      this.username=auth.displayName
        this.router.navigateByUrl("/home");
      }
    })

  }
   logMeOut(){
     alert('logout')
    this.authService.logout().then((data)=>{
      this.router.navigateByUrl("/login");
    })

  }
  openLogoutPopup(){
    this.popup1.show();
  }
  yesLogMeOut(){
    this.logMeOut();
  }
}
