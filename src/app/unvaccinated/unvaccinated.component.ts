import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-unvaccinated',
  templateUrl: './unvaccinated.component.html',
  styleUrls: ['./unvaccinated.component.scss']
})
export class UnvaccinatedComponent implements OnInit {
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
