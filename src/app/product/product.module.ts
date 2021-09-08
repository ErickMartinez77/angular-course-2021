import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Component } from './product1/product1.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path:'', component:Product1Component
  }
]

@NgModule({
  declarations: [
    Product1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class ProductModule { }
