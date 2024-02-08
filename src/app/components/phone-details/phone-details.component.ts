import { Component, Input, inject } from '@angular/core';
import { Phone } from '@models';
import { ButtonComponent } from '@components';
import { ShoppingCartService } from '@services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-phone-details',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  template: `
    @if (phone) {
      <div class="flex flex-col gap-6 mt-6">
        <h2 class="text-xl font-semibold">{{ phone.title }}</h2>
        <div class="flex items-center">
          <p>$</p>
          <p class="text-lg font-semibold">{{ phone.price }}</p>
        </div>
        @if (phone.provider) {
          <a
            title="{{ phone.provider }} details"
            routerLink="/providers/{{ phone.provider }}"
          >
            <p>Provider: {{ phone.provider }}</p>
          </a>
        }
        @if (phone.description) {
          <p>{{ phone.description }}</p>
        }
        <app-button text="Buy" [handleClick]="handleClick" />
      </div>
    }
  `,
})
export class PhoneDetailsComponent {
  private shoppingCartService = inject(ShoppingCartService);

  @Input() phone: Phone | null = null;

  handleClick = () =>
    this.phone && this.shoppingCartService.addProduct(this.phone);
}
