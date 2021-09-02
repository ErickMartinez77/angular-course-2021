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

const routes:Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)},
  {path:'pages', loadChildren: () => import('./pages/pages.module').then(m=>m.PagesModule)}
];

@NgModule({
  declarations: [
    AppComponent,
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
