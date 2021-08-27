import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path: 'app-admin1', component: Admin1Component,
    children:[
      {
        path: 'app-admin2', component: Admin2Component
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Admin1Component,
    Admin2Component
  ],
  exports:[
    Admin1Component
  ]
})
export class AdminModule { }