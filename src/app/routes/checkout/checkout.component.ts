import { Component, inject } from '@angular/core';
import { ShoppingCartService } from '@services';
import { ButtonComponent, ShippingPriceComponent } from '@components';
import { ShippingPrice } from '@models';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ShippingPriceComponent, ButtonComponent, ReactiveFormsModule],
  template: `
    <div class="grid grid-cols-6">
      <section class="flex flex-col gap-3 col-span-2 w-full ">
        <h2 class="text-xl">Cart</h2>
        @for (phone of shoppingCart(); track phone.id) {
          <div class="flex bg-zinc-300 gap-6 px-6 py-3 self-start rounded-md">
            <p>{{ phone.title }} {{ phone.price }}$</p>
            <button
              (click)="remove(phone.id)"
              class="hover:scale-105 transition"
            >
              X
            </button>
          </div>
        }
      </section>
      <section class="col-span-4 w-full">
        <h2 class="text-xl">Shopping Prices</h2>
        <div class="flex flex-col gap-3 mt-6">
          @for (shippingPrice of shippingPrices; track shippingPrice.name) {
            <app-shipping-price [shippingPrice]="shippingPrice" />
          }
        </div>
        <form
          class="flex flex-col gap-6 mt-8"
          (submit)="handleSubmit($event)"
          [formGroup]="checkoutForm"
        >
          <label class="flex flex-col gap-2">
            Name
            <input
              type="text"
              class="border-gray-400 border w-[300px] rounded-md px-2 py-1"
              formControlName="name"
            />
          </label>
          <label class="flex flex-col gap-2">
            Address
            <input
              type="text"
              class="border-gray-400 border w-[300px] rounded-md px-2 py-1"
              formControlName="address"
            />
          </label>
          <app-button text="Pucharse" />
        </form>
      </section>
    </div>
  `,
})
export class CheckoutComponent {
  private shoppinCartService = inject(ShoppingCartService);
  private formBuilder = inject(FormBuilder);

  shippingPrices: ShippingPrice[] = [
    { name: 'Overnight', price: 25.99 },
    { name: '2-Day', price: 9.99 },
    { name: 'Postal', price: 2.99 },
  ];

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  shoppingCart = this.shoppinCartService.state;
  remove = this.shoppinCartService.removeProduct;
  pucharse = this.shoppinCartService.pucharse;

  handleSubmit = (event: Event) => {
    event.preventDefault();
    this.pucharse();
    this.checkoutForm.reset();
  };
}
