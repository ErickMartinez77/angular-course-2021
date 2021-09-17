import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacunasService {

  private url = environment.app.apiBaseUrl;
  key = environment.auth.key;

  constructor(private http: HttpClient) { }

  public getAllVaccinated(): Observable<any>{
    return this.http.get(`${this.url}/vaccinated.json`)
  }

  public postVaccinated(body:any): Observable<any>{
    return this.http.patch(`${this.url}/vaccinated.json`,body);
  }


  public getAllUnvaccinated(): Observable<any>{
    return this.http.get(`${this.url}/unvaccinated.json`)
  }

  public deleteUnvaccinated(id: string): Observable<any> {
    return this.http.delete(`${this.url}/unvaccinated/${id}.json`)
  }

  public patchUnvaccinated(id:string, body:any): Observable<any>{
    return this.http.patch(`${this.url}/unvaccinated/${id}.json`,body);
  }


}
