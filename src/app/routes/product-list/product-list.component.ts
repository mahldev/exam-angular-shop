import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonComponent, MobileCardComponent } from '@components';
import { PhoneResponseResult } from '@models';
import { PhoneService } from '@services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MobileCardComponent, ButtonComponent, AsyncPipe],
  template: `
    @if (phoneResponse | async; as response) {
      <h1 class="text-xl">Products</h1>
      <div class="flex flex-col mt-6 gap-12">
        @for (phone of response.phones; track phone.id) {
          <app-mobile-card [phone]="phone" />
        }
      </div>
    }
  `,
})
export class ProductListComponent {
  private phoneService = inject(PhoneService);
  phoneResponse: Observable<PhoneResponseResult> =
    this.phoneService.getPhones();
}
