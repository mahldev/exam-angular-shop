import { Component, OnInit, inject } from '@angular/core';
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
export class ProductDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private phoneService = inject(PhoneService);

  selectedPhone: Phone | undefined;
  id = this.activatedRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.phoneService.getPhones().subscribe({
      next: (response) =>
        (this.selectedPhone = response.phones.find((p) => p.id === this.id)),
    });
  }
}
