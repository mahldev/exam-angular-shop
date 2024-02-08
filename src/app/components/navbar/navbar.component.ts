import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="flex w-[1200px] justify-between items-center py-6 m-auto">
      <div>
        <ul class="flex items-center justify-center gap-6">
          <li><a routerLink="/" class="text-2xl text-white">My Store</a></li>
          <li>
            <a routerLink="providers/" class="text-xl text-white">Providers</a>
          </li>
        </ul>
      </div>
      <button
        class="flex bg-white px-6 py-3 text-blue-500 gap-2 rounded-md hover:scale-105 transition"
        (click)="handleClick()"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
        <p>Checkout</p>
      </button>
    </nav>
  `,
})
export class NavbarComponent {
  private router = inject(Router);
  handleClick = () => this.router.navigate(['checkout']);
}
