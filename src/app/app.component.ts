import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-admin';
  showLayout = true;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(event['url'] == '/login' || event['url'] == '/register') {
          this.showLayout = false;
        } else {
          this.showLayout = true;
        }
      }
    })
  }

}
