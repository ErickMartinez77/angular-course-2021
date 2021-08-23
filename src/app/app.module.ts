import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { Test3Component } from './test3/test3.component';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { HomeModule } from './pages/home/home.module';
import { AdminModule } from './pages/admin/admin.module';
import { BuyModule } from './pages/buy/buy.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { WalletsComponent } from './wallets/wallets.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent, 
    Test1Component, 
    Test2Component,
    Test3Component,
    Directive1Directive,
    Directive2Directive,
    WalletsComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
