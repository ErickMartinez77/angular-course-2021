import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Test1Service } from './services/test1.service';
import { SingletonService } from './services/singleton.service';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  declarations: [LoginComponent],
  providers:[
    Test1Service,
    SingletonService
  ]
})
export class LoginModule {}
