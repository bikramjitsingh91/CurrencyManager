import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currencydashbaord',
  templateUrl: './currencydashbaord.component.html',
  styleUrls: ['./currencydashbaord.component.css']
})
export class CurrencydashbaordComponent implements OnInit {

  public baseCurrency: String = "";
  public eur: String = "";
  public cad: String = "";
  public jpy: String = "";
  public gbp: String = "";
  public bgn: String = "";
  public showCurrInfo: boolean = false;
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

  onSave(){
    console.log("submit button called")
    this.currencyService.getCurrencyInfo().subscribe((res : any) => {
      console.log(res);
      this.baseCurrency = res.base;
      this.showCurrInfo = true;
      this.eur = res.rates.EUR;
      this.cad = res.rates.CAD;
      this.gbp = res.rates.GBP;
      this.bgn = res.rates.BGN;


    });
  }

}
