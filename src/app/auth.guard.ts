import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  
  constructor(
    private _auth: AuthService,
    private _router: Router,
  ) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(this._auth.loggedIn()){
      // this._router.navigate(['/profile']);
      return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
  }


  // cancActivate(): boolean{
  //   if(this._auth.loggedIn()){
  //     // this._router.navigate(['/profile']);
  //     return true;
  //   }else{
  //     this._router.navigate(['/login']);
  //     return false;
  //   }
  // }
  
}
