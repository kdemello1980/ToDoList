import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forecast';

  /**
   * Set up the navLinks that are iterated over in app.component.html
   */
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Cities',
        link: './cities',
        index: 0
      },
      {
        label: 'Forecast',
        link: './forecast/',
        index: 1
      }
    ];
  }
  ngOnInit(): void {
      this.router.events.subscribe((res) => {
        this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
