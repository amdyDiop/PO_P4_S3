import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {TokenManagerService} from "./token-manager.service";
import {AlertService} from "./alert.service";

@Injectable()
export class GuardService implements CanActivate {

  constructor(private tokenMg: TokenManagerService, private router: Router,private alertSrv: AlertService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.tokenMg.expiredToken()) {
      return true;
    } else {
      this.alertSrv.message('la connexion est obligatoire pour accéder a cette resource','error')
      this.router.navigate(['connexion']);
    }
  }

}
