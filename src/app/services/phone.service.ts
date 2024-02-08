import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PhoneResponseResult } from '@models';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  private httpClient = inject(HttpClient);
  private apiURL = 'assets/db.json';

  getPhones = () => this.httpClient.get<PhoneResponseResult>(this.apiURL);
}
