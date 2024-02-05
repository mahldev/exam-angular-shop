import { Routes } from '@angular/router';
import {
  ProductListComponent,
  ProductDetailsComponent,
  CheckoutComponent,
} from '@routes';

export const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Home page' },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    title: 'Product details',
  },
  { path: 'checkout', component: CheckoutComponent, title: 'Checkout' },
];
