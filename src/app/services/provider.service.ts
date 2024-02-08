import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProviderResponseResult } from '@models';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  private http = inject(HttpClient);
  private providersURL = 'assets/providers.json';

  getProviders = () => this.http.get<ProviderResponseResult>(this.providersURL);
}
