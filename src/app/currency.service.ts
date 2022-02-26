import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {

  }

  currencyURL = 'https://api.vatcomply.com/rates?base=USD';

  getCurrencyInfo() {
    return this.http.get(this.currencyURL);
  }
}
