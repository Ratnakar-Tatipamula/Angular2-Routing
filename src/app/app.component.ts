import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cat-app';

  constructor(private router: Router) { 
 
      console.log("hiii");
      console.log(this.router.url);   

  }

}
