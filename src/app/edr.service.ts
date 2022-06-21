import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdrService {
  public baseUrl = "http://192.168.14.115:31889/api/subjects/"
  // public baseUrl = "http://localhost:8999/api/code/file"
  constructor(private http: HttpClient) { }

  getOrgCard(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }
  getOrgCardByEdrpou(edrpou: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+edrpou);
  }
}
