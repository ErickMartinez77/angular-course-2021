import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "./components/register/register.component";
import {Router} from "@angular/router";
import { VacunasService } from '../pages/shared/services/vacunas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  vaccinated:any =[];
  unvaccinated:any =[];

  constructor(private authService: AuthService,
              private matDialog: MatDialog,
              private router: Router,
              private vacunasService:VacunasService) {
  }

  ngOnInit(): void {
    this.vacunasService.getAllVaccinated().subscribe(res=>{
      Object.entries(res).map((p:any) => this.vaccinated.push({id:p[0], ...p[1]}))
    });

    this.vacunasService.getAllUnvaccinated().subscribe(res=>{
      Object.entries(res).map((p:any) => this.unvaccinated.push({id:p[0], ...p[1]}))
    });
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

  onVaccinate(){

  }

  everybodyVaccinated():boolean{
    const aux = this.unvaccinated.filter(
      (t) => t.mineType === 'PoS' && t.miner < 20);

    return this.unvaccinated.length === aux.length;
  }

  getTotal(type: string){
    return this.vaccinated.reduce((acc:any, value:any) =>
    acc + (value[type] > 0 ? value[type] : 0)
    , 0);
  }

}
