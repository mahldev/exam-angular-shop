import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <body class="w-full">
      <header class="bg-blue-500">
        <app-navbar />
      </header>
      <main class="w-[1200px] m-auto mt-6">
        <router-outlet />
      </main>
    </body>
  `,
})
export class AppComponent {}
