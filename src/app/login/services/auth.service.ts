import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  //Confir

  url = environment.auth.apiBaseUrl;
  key = environment.auth.key;

  constructor(private http: HttpClient) { }

  public login(body:any):Observable<any>{
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`,body)
  }

  public signUp(body:any){
    return this.http.post(`${this.url}/v1/accounts:signUp?key=${this.key}`,body)
  }
}
