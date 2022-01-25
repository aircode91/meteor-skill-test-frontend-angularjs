import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private _router: Router
  ) { }
  
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  setDataInLocalStorage(variableName:any, data:any) {
      localStorage.setItem(variableName, data);
  }

  getToken() {
      return localStorage.getItem('token');
  }


  logout(){
    localStorage.clear();
    this._router.navigate(['']);
  }

  clearStorage() {
      localStorage.clear();
  }
}
