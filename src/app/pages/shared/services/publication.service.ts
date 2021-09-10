import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private url = environment.app.apiBaseUrl;

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}/publications.json`)
  }

}
