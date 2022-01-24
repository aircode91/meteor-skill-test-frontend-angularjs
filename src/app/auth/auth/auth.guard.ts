import { AuthService } from './../../services/auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from 'rxjs';


@Injectable()
class AuthGuard implements CanActivate{

    constructor(
        private AuthService,
        private Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        retrun this.AuthService.get
    }

}