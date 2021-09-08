import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PublicationService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllTransactions(): Observable<any>{
    return this.http.get(`${this.url}/transactions.json`);
  }

  public getAllWallets(): Observable<any>{
    return this.http.get(`${this.url}/wallets.json`);
  }

  public createTransactions(body:any): Observable<any>{
    return this.http.post(`${this.url}/transactions.json`, body);
  }

  public updateTransactions(id: string, body:any): Observable<any>{
    return this.http.put(`${this.url}/wallets/${id}.json`, body);
  }

  public deleteTransactions(id: string): Observable<any>{
    return this.http.delete(`${this.url}/transactions/${id}.json`);
  }

  public patchWallets(id: string, body:any): Observable<any>{
    return this.http.patch(`${this.url}/wallets/${id}.json`, body);
  }
}
