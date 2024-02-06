import { Injectable } from '@angular/core';
import { Phone } from '@models';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart: Phone[] = [];

  state = () => this.shoppingCart;

  addProduct = (product: Phone) =>
    (this.shoppingCart = [...this.shoppingCart, product]);

  removeProduct = (productId: string) =>
    (this.shoppingCart = this.shoppingCart.filter((p) => p.id !== productId));
}
