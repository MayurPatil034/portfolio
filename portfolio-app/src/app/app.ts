import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div style="display: flex; height: 100vh; margin: 0; font-family: Arial, sans-serif;">
      <app-sidebar></app-sidebar>
      <div style="flex: 1; padding: 40px; overflow-y: auto; background: #ecf0f1;">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'portfolio-app';
}