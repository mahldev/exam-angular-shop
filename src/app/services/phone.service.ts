import { HttpClient } from '@angular/common/http';
import { Injectable, Injector, inject } from '@angular/core';
import { Phone } from '@models';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  private httpClient = inject(HttpClient);
  private api = 'http://localhost:3000/db.json';

  private phones: Phone[] = this.httpClient.get(this.api);

  private phones: getPhones = () => this.phones;
}
