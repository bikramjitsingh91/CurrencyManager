import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencydashbaordComponent } from './currencydashbaord/currencydashbaord.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
// import {MatSelectModule} from '@angular/material';
// import { MatSelectModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select'
// import { MatOptionModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    CurrencydashbaordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatSelectModule,
    // MatOptionModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
