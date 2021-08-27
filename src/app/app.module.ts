import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
