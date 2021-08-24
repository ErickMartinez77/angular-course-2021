import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jurados1Component } from './jurados1/jurados1.component';
import { Jurados2Component } from './jurados2/jurados2.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Jurados1Component,
    Jurados2Component
  ],
  exports:[
  ]
})
export class JuradosModule { }