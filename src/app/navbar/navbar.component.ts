import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  linkname:any;
  constructor( private router: Router ) {

    
   }

  ngOnInit() {
    
    this.linkname = this.router.url;
    console.log("the url is ");
    console.log(this.linkname);
    

  }

}
