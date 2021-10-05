import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'github-pages-src';

  get route() {
    return this.router.url || '/';
  }

  constructor(private router: Router) {}
}
