import { Injectable } from '@angular/core';
import { Phone } from '@models';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart: Phone[] = [];

  private saveToHistory = () => {
    const history = JSON.parse(localStorage.getItem('historiy') || '[]');
    localStorage.setItem(
      'historiy',
      JSON.stringify([...history, ...this.shoppingCart]),
    );
  };

  private clearCart = () => (this.shoppingCart = []);

  state = () => this.shoppingCart;

  addProduct = (product: Phone) =>
    (this.shoppingCart = [...this.shoppingCart, product]);

  removeProduct = (productId: string) =>
    (this.shoppingCart = this.shoppingCart.filter((p) => p.id !== productId));

  pucharse = () => {
    this.saveToHistory();
    this.clearCart();
  };

  onHistory = (id: string) => {
    const history: Phone[] = JSON.parse(
      localStorage.getItem('historiy') || '[]',
    );

    return history.some((p) => p.id === id);
  };
}
