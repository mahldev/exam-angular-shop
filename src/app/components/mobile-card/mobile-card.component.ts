import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@components';
import { Phone } from '@models';

@Component({
  selector: 'app-mobile-card',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    @if (phone) {
      <div class="flex flex-col gap-4">
        <p class="text-2xl text-blue-600">{{ phone.title }}</p>
        @if (phone.description) {
          <p>Description: {{ phone.description }}</p>
        }
        <app-button text="Share" [handleClick]="handleClick" />
      </div>
    }
  `,
})
export class MobileCardComponent {
  private router = inject(Router);

  @Input() phone: Phone | null = null;

  handleClick = () => this.router.navigate([`products/${this.phone?.id}`]);
}
