import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {

  }

  currencyURLWithBase = 'https://api.vatcomply.com/rates?base=USD';
  currencyURL = 'https://api.vatcomply.com/rates';
  //saveCurrencyURL = 'http://localhost:8082/saveCurrencyInfo';
  currencyServiceUrl = 'http://52.202.120.202:5000';//  'http://currency-bs-app.ca-central-1.elasticbeanstalk.com';

  getCurrencyInfo() {
    return this.http.get(this.currencyURLWithBase);
  }

  getCurrencyInfoByBase(base : String) {
    return this.http.get(this.currencyURL + '?base=' + base);
  }

  saveCurrencyInfo(currencyInfo: any){
    return this.http.post(this.currencyServiceUrl + "/saveCurrencyInfo",currencyInfo);
  }

  getCurrencyInfoFromDB(){
    return this.http.get(this.currencyServiceUrl + '/getCurrencyInfo');
  }

  clearCurrencyInfoFromDB(){
    return this.http.delete(this.currencyServiceUrl + '/clearCurrencyStore');
  }
}
