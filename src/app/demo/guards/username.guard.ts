import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WelcomeUserService } from 'src/app/services/welcome-user.service';

@Injectable({
  providedIn: 'root'
})
export class UsernameGuard implements CanActivate {

  constructor(private _usernameService : WelcomeUserService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this._usernameService.getUsername())  return true;
      return false;
  }
  
}
