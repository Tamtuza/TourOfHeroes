import { Component }    from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <h2>{{title}}</h2>
      <hero-search></hero-search>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/fight" routerLinkActive="active">Fight</a>
    </nav>
  </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
