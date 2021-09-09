import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private matDialog:MatDialog, private router: Router) {


  }

  ngOnInit(): void{
  }

  login(form:any){
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(res => {
      console.log('RESPONSE', res);
      this.router.navigate(['pages']);
    });
  }
  onCreateNewAccount(){
    this.matDialog.open(RegisterComponent)
  }

}
