import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { Test3Component } from './test3/test3.component';
import { Directive1Directive } from './directive1.directive';

@NgModule({
  declarations: [
    AppComponent, 
    Test1Component, 
    Test2Component,
    Test3Component,
    Directive1Directive
  ],
  imports: [
    BrowserModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
