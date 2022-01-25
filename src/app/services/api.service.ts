import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api';

  constructor(private _http: HttpClient) {
  }


  getTypeRequest(url:string) {
    return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
      return res;
    }));
  }


  postTypeRequest(url: string,payload: string) {
    try {
      return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
        return res;
      }));
    } catch (error) {
      return error;
      
    }
  }


  putTypeRequest(url: string,payload: string) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }


}
