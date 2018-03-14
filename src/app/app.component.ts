import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isUserLogin:boolean
  username:string
  useremail:string
  constructor(private afAuth: AngularFireAuth,private router:Router){
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
}
