import { Component, inject } from '@angular/core';
import { ButtonComponent, MobileCardComponent } from '@components';
import { PhoneService } from '@services';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MobileCardComponent, ButtonComponent],
  template: `
    <h1 class="text-xl">Products</h1>
    <div class="flex flex-col mt-6 gap-12">
      @for (phone of phones; track phone.id) {
        <app-mobile-card [phone]="phone" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductListComponent {
  private phoneService = inject(PhoneService);

  phones = this.phoneService.getPhones();
}
