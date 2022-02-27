import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {

  }

  currencyURL = 'https://api.vatcomply.com/rates?base=USD';
  //saveCurrencyURL = 'http://localhost:8082/saveCurrencyInfo';
  saveCurrencyURL = 'http://currency-bs-app.ca-central-1.elasticbeanstalk.com/saveCurrencyInfo';

  getCurrencyInfo() {
    return this.http.get(this.currencyURL);
  }

  saveCurrencyInfo(currencyInfo: any){
    return this.http.post(this.saveCurrencyURL,currencyInfo);
  }
}
