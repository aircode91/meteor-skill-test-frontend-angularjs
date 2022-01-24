import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  
  getUserDetails() {
    return localStorage.getItem('token') ? JSON.stringify(localStorage.getItem('token')): null;
  }


  setDataInLocalStorage(variableName:any, data:any) {
      localStorage.setItem(variableName, data);
  }

  getToken() {
      return localStorage.getItem('accessToken');
  }

  clearStorage() {
      localStorage.clear();
  }
}
