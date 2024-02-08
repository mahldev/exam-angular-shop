import { Routes } from '@angular/router';
import {
  ProductListComponent,
  ProductDetailsComponent,
  CheckoutComponent,
  ProviderListComponent,
  ProviderDetailsComponent,
} from '@routes';

export const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Home page' },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    title: 'Product details',
  },
  { path: 'checkout', component: CheckoutComponent, title: 'Checkout' },
  {
    path: 'providers',
    component: ProviderListComponent,
    title: 'Provider list',
  },
  {
    path: 'providers/:name',
    component: ProviderDetailsComponent,
    title: 'Provider details',
  },
];
