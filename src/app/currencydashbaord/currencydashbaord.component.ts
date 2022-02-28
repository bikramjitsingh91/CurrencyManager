import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

export interface CurrencyStore {
  baseCurr: string;
  usd: number;
  eur: number;
  cad: number;
  gbp: number;
  bgn: number;
  jpy: number;
  dateCreatedAt: number;
}

export interface CurrencyStoreRes {
  id: number,
  baseCurr: string;
  usd: number;
  eur: number;
  cad: number;
  gbp: number;
  bgn: number;
  jpy: number;
  dateCreatedAt: string;
}

export interface CurrencyStoreResList {
  currencyInfoList: CurrencyStoreRes[];
} 

// const ELEMENT_DATA: CurrencyStore[]

@Component({
  selector: 'app-currencydashbaord',
  templateUrl: './currencydashbaord.component.html',
  styleUrls: ['./currencydashbaord.component.css']
})
export class CurrencydashbaordComponent implements OnInit {

  public baseCurrency: String = "";
  public usd: number = 0;// = "";
  public eur: number = 0;// = "";
  public cad: number = 0;// = "";
  public jpy: number = 0;// = "";
  public gbp: number = 0;// = "";
  public bgn: number = 0;// = "";
  public selected : String = 'option2';
  dataSource: CurrencyStore[] = [];
  displayedColumns: string[] = ['baseCurr', 'usd', 'eur', 'cad','gbp','bgn','jpy', 'dateCreatedAt'];
  public showCurrInfo: boolean = false;
  public showCurrInfoTable: boolean = false;
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.fetchCurrInfoFromDB()
  }

  fetchCurrInfoFromDB(){
    this.currencyService.getCurrencyInfoFromDB().subscribe((res: any) => {
      console.log("res arrived");
      console.log(res);
      this.dataSource = [];
      res.currencyInfoList.forEach((x: CurrencyStoreRes) => {
        this.dataSource.push({
          baseCurr: x.baseCurr,
          usd: x.usd,
          eur: x.eur,
          cad: x.cad,
          gbp: x.gbp,
          bgn: x.bgn,
          jpy: x.jpy,
          dateCreatedAt: Date.parse(x.dateCreatedAt)
        });
      });
      displayedColumns: ['baseCurr','usd', 'eur', 'cad','gbp','bgn','jpy','dateCreatedAt'];
      this.showCurrInfoTable = true

    })
  }

  fetchCurrInfo(){
    console.log("Fetch Funtion called")
    this.currencyService.getCurrencyInfo().subscribe((res : any) => {
      console.log(res);
      this.baseCurrency = res.base;
      this.showCurrInfo = true;
      this.usd = res.rates.USD;
      this.eur = res.rates.EUR;
      this.cad = res.rates.CAD;
      this.gbp = res.rates.GBP;
      this.bgn = res.rates.BGN;
      this.jpy = res.rates.JPY;
    });
  }

  onChangeFetch(){
    console.log("onChangeFetch Funtion called")
    console.log("Selected " + this.selected);
    this.currencyService.getCurrencyInfoByBase(this.selected).subscribe((res : any) => {
      console.log(res);
      this.baseCurrency = res.base;
      this.showCurrInfo = true;
      this.usd = res.rates.USD;
      this.eur = res.rates.EUR;
      this.cad = res.rates.CAD;
      this.gbp = res.rates.GBP;
      this.bgn = res.rates.BGN;
      this.jpy = res.rates.JPY;
    });
  }

  onSaveToDB(){
    console.log("Save CurrInfo To DB")
    const currencyInfo = {
      "baseCurr": this.baseCurrency,
      "usd": this.usd,
      "eur": this.eur,
      "cad": this.cad,
      "gbp": this.gbp,
      "bgn": this.bgn,
      "jpy": this.jpy
    }
    this.currencyService.saveCurrencyInfo(currencyInfo).subscribe((res: any) => {
      console.log("res arrived");
      console.log(res);
      this.dataSource = [];
      res.currencyInfoList.forEach((x: CurrencyStoreRes) => {
        this.dataSource.push({
          baseCurr: x.baseCurr,
          usd: x.usd,
          eur: x.eur,
          cad: x.cad,
          gbp: x.gbp,
          bgn: x.bgn,
          jpy: x.jpy,
          dateCreatedAt: Date.parse(x.dateCreatedAt)
        });
      });
      displayedColumns: ['baseCurr',  'usd', 'eur', 'cad','gbp','bgn','jpy','dateCreatedAt'];
      this.showCurrInfoTable = true

    })
  }

  onClearCurrencyStoreDB(){
    this.currencyService.clearCurrencyInfoFromDB().subscribe(x => {
      this.dataSource = []
    })
  }

}
