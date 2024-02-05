import { Component, inject } from '@angular/core';
import { ShoppingCartService } from '@services';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-xl">Cart</h2>
    <section class="flex flex-col gap-3 mt-6">
      @for (phone of shoppingCart(); track phone.id) {
        <div class="bg-zinc-600 px-6 py-3 self-start text-white">
          {{ phone.title }} $ {{ phone.price }}
          <button (click)="remove(phone.id)" class="text-white">X</button>
        </div>
      }
    </section>
  `,
})
export class CheckoutComponent {
  private shoppinCartService = inject(ShoppingCartService);

  shoppingCart = this.shoppinCartService.state;
  remove = this.shoppinCartService.removeProduct;
}
