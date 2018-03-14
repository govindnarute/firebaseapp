import { Component, OnInit } from '@angular/core';
import { AuthService } from "../provider/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logout().then((data)=>{
      this.router.navigateByUrl("/login");
    })
  }

}
