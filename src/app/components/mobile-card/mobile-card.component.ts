import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@components';
import { Phone } from '@models';

@Component({
  selector: 'app-mobile-card',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  template: `
    @if (phone) {
      <div class="flex flex-col gap-4">
        <a
          title="{{ phone.title }} details"
          routerLink="products/{{ phone.id }}"
          class="text-2xl text-blue-600"
          >{{ phone.title }}</a
        >
        @if (phone.description) {
          <p>Description: {{ phone.description }}</p>
        }
        <app-button text="Share" [handleClick]="share" />
        @if (phone.stock === 0) {
          <app-button text="Notify Me" [handleClick]="notify" />
        }
      </div>
    }
  `,
})
export class MobileCardComponent {
  @Input() phone: Phone | null = null;

  share = () => alert('The product has been shared');
  notify = () => alert('notify');
}
