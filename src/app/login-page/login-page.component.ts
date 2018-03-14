import { Component, OnInit } from '@angular/core';
import { AuthService } from "../provider/auth.service";
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
login(){
  alert('login with google')
  this.authService.login().then((data)=>{
   console.log(data) 
this.router.navigateByUrl('/home');
console.log(data)
  })
}

}
