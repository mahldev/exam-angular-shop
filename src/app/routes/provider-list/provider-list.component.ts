import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MobileCardComponent, ProviderCardComponent } from '@components';
import { ProviderService } from '@services';

@Component({
  selector: 'app-provider-list',
  standalone: true,
  imports: [AsyncPipe, MobileCardComponent, ProviderCardComponent],
  template: `
    @if (providersResponse | async; as response) {
      <h1 class="text-xl mt-6 mb-6">Providers</h1>
      <div class="flex flex-col gap-4">
        @for (provider of response.providers; track provider.id) {
          <app-provider-card [provider]="provider" />
        }
      </div>
    }
  `,
})
export class ProviderListComponent {
  private providerService = inject(ProviderService);

  providersResponse = this.providerService.getProviders();
}
