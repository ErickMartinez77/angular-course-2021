import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.scss']
})
export class Admin1Component implements OnInit {

  name = 'erick';
  auxJSON = {name:"jorge",lastname:"perez"};

  auxObs$ = new BehaviorSubject<number[]>([1,2,3]); //$ al final, significa que la variable es un observable.

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    const aux = this.auxObs$.getValue();
    const aux1 = [4,5].concat(aux);
    
    this.auxObs$.next(aux1);
  }

}