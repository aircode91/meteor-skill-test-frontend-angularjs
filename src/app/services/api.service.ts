import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:5000';

  constructor(private _http: HttpClient) {
  }


  // getTypeRequest(url) {
  //   return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
  //     return res;
  //   }));
  // }


  postTypeRequest(url: string,payload: any) {
    try {
      return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
        return res;
      }));
    } catch (error) {
      return error.message;
      
    }
  }


  // putTypeRequest(url, payload) {
  //   return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
  //     return res;
  //   }));
  // }


}
