import { Component, Input } from '@angular/core';
import { Provider } from '@models';
import { MobileCardComponent } from '../mobile-card/mobile-card.component';

@Component({
  selector: 'app-provider-card',
  standalone: true,
  imports: [MobileCardComponent],
  template: `
    @if (provider) {
      <p class="text-xl">Name: {{ provider.name }}</p>
      <details class="cursor-pointer mt-2">
        <summary class="text-xl">Phones</summary>
        <div class="flex flex-col gap-6 mt-6">
          @for (phone of provider.phones; track phone.id) {
            <app-mobile-card [phone]="phone" />
          }
        </div>
      </details>
    }
  `,
  styles: ``,
})
export class ProviderCardComponent {
  @Input() provider: Provider | null = null;
}
