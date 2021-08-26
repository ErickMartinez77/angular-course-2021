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
import { SharedModule } from './shared/shared.module';
import { View1Component } from './view1/view1.component';
import { RouterModule, Routes } from '@angular/router';
import { View2Component } from './view2/view2.component';
import { View1sub1Component } from './view1/view1sub1/view1sub1.component';
import { View1sub2Component } from './view1/view1sub2/view1sub2.component';
import { Home1Component } from './pages/home/home1/home1.component';
import { Home2Component } from './pages/home/home2/home2.component';
import { Admin1Component } from './pages/admin/admin1/admin1.component';
import { Admin2Component } from './pages/admin/admin2/admin2.component';

const routes:Routes = [
  {
    path: '', redirectTo: 'view1', pathMatch:'full'
  },
  {
    path: 'view1', component:View1Component, 
    children: [
      {
        path: '', redirectTo: 'view1sub1', pathMatch:'full'
      },
      {
        path: 'view1sub1', component:View1sub1Component
      },
      {
        path: 'view1sub2', component:View1sub2Component
      }
    ]
  },
  {
    path: 'view2', component:View2Component
  },
  {
    path: 'view3', loadChildren: () => import('./view3/view3.module').then(m => m.View3Module)
  },
  {
    path: 'home',
    children:[
      {
        path: 'home1', component:Home1Component
      },
      {
        path: 'home2', component:Home2Component
      }
    ]
  },
  {
    path: 'admin',
    children:[
      {
        path: 'admin1', component:Admin1Component
      },
      {
        path: 'admin2', component:Admin2Component
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent, 
    Test1Component, 
    Test2Component,
    Test3Component,
    Directive1Directive,
    Directive2Directive,
    View1Component,
    View2Component,
    View1sub1Component,
    View1sub2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
