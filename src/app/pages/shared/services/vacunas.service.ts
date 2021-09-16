import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacunasService {

  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllVaccinated(): Observable<any>{
    return this.http.get(`${this.url}/vaccinated.json`)
  }

  public getAllUnvaccinated(): Observable<any>{
    return this.http.get(`${this.url}/unvaccinated.json`)
  }
}
