import { Component, Input } from '@angular/core';
import { ShippingPrice } from '@models';

@Component({
  selector: 'app-shipping-price',
  standalone: true,
  imports: [],
  template: `
    @if (shippingPrice) {
      <div
        class="flex justify-between px-6 py-4 rounded-md w-[400px] bg-zinc-300 hover:scale-105 transition cursor-pointer"
      >
        <p>{{ shippingPrice.name }}</p>
        <p>{{ shippingPrice.price }}$</p>
      </div>
    }
  `,
  styles: ``,
})
export class ShippingPriceComponent {
  @Input() shippingPrice: ShippingPrice | null = null;
}
