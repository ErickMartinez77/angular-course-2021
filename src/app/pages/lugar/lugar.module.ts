import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lugar1Component } from './lugar1/lugar1.component';
import { Lugar2Component } from './lugar2/lugar2.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Lugar1Component,
    Lugar2Component
  ],
  exports:[
  ]
})
export class LugarModule { }