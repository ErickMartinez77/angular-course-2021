import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider/slider-module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner/progress-spinner-module';
import { SingletonService } from './login/services/singleton.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProviderComponent } from './provider/provider.component';
import { Client1Component } from './client/client1/client1.component';

const routes:Routes = [
  {path:'', redirectTo:'provider', pathMatch:'full'},
  {path:'client', loadChildren: () => import('./client/client.module').then(m=>m.ClientModule)},
  {path:'product', loadChildren: () => import('./product/product.module').then(m=>m.ProductModule)},
  {path:'provider', component:ProviderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
