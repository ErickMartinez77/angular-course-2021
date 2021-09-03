import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Test1Service } from './services/test1.service';
import { SingletonService } from './services/singleton.service';
import { Login2Component } from './components/login2/login2.component';
import { Login1Component } from './components/login1/login1.component';
import { UtilsService } from './services/utils.service';
import { PublicationService } from './services/publication.service';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  declarations: [LoginComponent, Login1Component, Login2Component],
  providers:[
    Test1Service,
    UtilsService,
    PublicationService
  ]
})
export class LoginModule {}
