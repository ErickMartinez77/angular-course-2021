import { Component, OnInit, Output } from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "./components/register/register.component";
import {Router} from "@angular/router";
import { VacunasService } from '../pages/shared/services/vacunas.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  @Output('update') update: EventEmitter<any> = new EventEmitter();

  vaccinated:any =[];
  unvaccinated:any =[];

  constructor(private vacunasService:VacunasService) {
  }

  ngOnInit(): void {
    this.loadVaccinated();
    this.loadUnvaccinated();

  }

  onVaccinate(vacc:any):void{
    const va= this.unvaccinated.find((h)=>h.name === vacc.name);

    va[vacc.doses] = vacc.doses++;

    this.vacunasService.patchUnvaccinated(va.id, va).subscribe((res)=>this.loadUnvaccinated())

    const tipoVacuna:string = vacc.vaccineType;

    if (tipoVacuna==='A'){
      this.createVaccinated(vacc);
      this.deleteVaccinated(va.id);
    }

    if(tipoVacuna === 'B' && va.doses >=2){
      this.createVaccinated(vacc);
      this.deleteVaccinated(va.id);
    }

    if(tipoVacuna === 'C' && va.doses >=3){
      this.createVaccinated(vacc);
      this.deleteVaccinated(va.id);
    }


  }

  createVaccinated(vacc:any){
    this.vacunasService.postVaccinated({
      name: vacc.name,
      age: vacc.age,
      date: vacc.date,
      vaccined:1
    }).subscribe(()=> this.loadVaccinated())
  }

  deleteVaccinated(id:string){
    this.vacunasService.deleteUnvaccinated(id).subscribe((res)=>this.loadUnvaccinated())
  }

  everybodyVaccinated():boolean{
    const aux = this.unvaccinated.filter((t) => t.disease && t.vaccinated === 0);

    return this.unvaccinated.length === aux.length;
  }

  loadVaccinated(): void{
    this.vacunasService.getAllVaccinated().subscribe(res=>{
      Object.entries(res).map((p:any) => this.vaccinated.push({id:p[0], ...p[1]}))
    });
  }

  loadUnvaccinated(): void{
    this.vacunasService.getAllUnvaccinated().subscribe(res=>{
      Object.entries(res).map((p:any) => this.unvaccinated.push({id:p[0], ...p[1]}))
    });
  }

  save(form:any){

  }


}
