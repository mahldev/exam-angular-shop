import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneDetailsComponent } from '@components';
import { Phone } from '@models';
import { PhoneService } from '@services';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [PhoneDetailsComponent],
  template: ` <app-phone-details [phone]="selectedPhone" /> `,
})
export class ProductDetailsComponent {
  private activatedRoute = inject(ActivatedRoute);
  private phoneService = inject(PhoneService);

  id = this.activatedRoute.snapshot.params['id'];
  phones = this.phoneService.getPhones();
  selectedPhone: Phone | undefined = this.phones.find((p) => p.id === this.id);
}
