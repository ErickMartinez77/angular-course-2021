import { Component, OnInit } from '@angular/core';
import { SingletonService } from 'src/app/login/services/singleton.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private singletonService:SingletonService) { }

  ngOnInit() {
  }

  onShowMessage(): void{
    console.log(this.singletonService.getMessage());
  }

}
