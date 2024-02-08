import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '@services';
import { Provider } from '@models';
import { ProviderCardComponent } from '@components';

@Component({
  selector: 'app-provider-details',
  standalone: true,
  imports: [ProviderCardComponent],
  template: `
    @if (selectedProvider) {
      <h1 class="text-xl mt-6 mb-6">Providers</h1>
      <app-provider-card [provider]="selectedProvider" />
    }
  `,
})
export class ProviderDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private providerService = inject(ProviderService);

  name = this.activatedRoute.snapshot.params['name'];

  selectedProvider: Provider | undefined = undefined;

  ngOnInit(): void {
    this.providerService
      .getProviders()
      .subscribe(
        (response) =>
          (this.selectedProvider = response.providers.find(
            (p) => p.name === this.name,
          )),
      );
  }
}
