import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Client1Component } from './client1/client1.component';
import { SharedModule } from '../shared/shared.module';

const routes:Routes = [
  {path:'', component:Client1Component},
];

@NgModule({
  declarations: [
    Client1Component,

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
export class ClientModule { }
