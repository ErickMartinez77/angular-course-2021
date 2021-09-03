import { Component, OnInit } from '@angular/core';
import { PublicationService } from './services/publication.service';
import { SingletonService } from './services/singleton.service';
import { Test1Service } from './services/test1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private test1Service: Test1Service, private singletonService: SingletonService, private publicationService:PublicationService) {
    console.log(this.test1Service.getItems());

    this.singletonService.setMessage('Hello from login');
  }

  ngOnInit(): void{
    this.publicationService.getAll().subscribe(res=>{
      console.log('RESPONSE: ', res)
    })
  }

  setMessage(){
    this.singletonService.setMessage('Hi from login');
  }

  update(){
    this.publicationService.update('p001',{
      "date": "17/02/2021",
      "description": "update from frontend",
      "idUser": 1,
      "imageUrl": "http://firebase/img.jpg",
      "userPhotoUrl": "http://firebase/user1.jpg"
    }).subscribe(res=>console.log(res))
  }

  create(){
    this.publicationService.create({
      "date": "17/02/2021",
      "description": "create from frontend",
      "idUser": 1,
      "imageUrl": "http://firebase/img.jpg",
      "userPhotoUrl": "http://firebase/user1.jpg"
    }).subscribe(res=>console.log(res))
  }

  deleteA(){
    this.publicationService.delete('p002').subscribe((res=>console.log(res)));
  }

  patch(){
    this.publicationService.patch('p001',{
      "description": "update from frontend PATCH 2",
    }).subscribe(res=>console.log(res))
  }

  onSubmitTemplate(values:any){
    console.log('VALUES: ', values)
  }

}
