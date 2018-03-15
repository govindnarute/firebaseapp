import { Component, OnInit } from '@angular/core';
import { AuthService } from "../provider/auth.service";
import { Router } from "@angular/router";
import{ AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import { Angular2Csv } from 'angular2-csv/Angular2-csv';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
items:AngularFireList<any[]>;
users:any
  constructor(private authService:AuthService,private router:Router,private db:AngularFireDatabase) {
  
   }

  ngOnInit() {
     this.items= this.db.list("users")
    this.items.valueChanges().subscribe((data)=>{
     
     this.users=data
    })

  }
  logout(){
    this.authService.logout().then((data)=>{
      this.router.navigateByUrl("/login");
    })
  }
exportToCsv(){
  var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    useBom: true
  };
  new Angular2Csv(this.users, 'UserDetails',options);
}

}
