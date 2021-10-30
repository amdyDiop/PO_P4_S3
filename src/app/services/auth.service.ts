import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import {TokenManagerService} from "./token-manager.service";
import {Router} from "@angular/router";
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserManager: BehaviorSubject<any> = new BehaviorSubject([]);
  public currentUserProvider = this.currentUserManager.asObservable();
  currentUser: any;
  public localStorage = window.localStorage;
  constructor(public httpSrv: HttpService,public tokenMg: TokenManagerService,public route: Router, public alert: AlertService) { }
  getCurrentUser() {
  return  this.httpSrv.get('auth/current_user')
  }
  getRoles(): string {
    if (this.currentUser) {
      console.log(this.currentUser.roles[0])
     return  this.currentUser.roles[0];
    }
    return null;
  }
  isAuthenticaded(){
    if (!(this.tokenMg.expiredToken())){
      this.alert.message("La session d’authentification a expiré. Reconnectez-vous.",'info')
      this.route.navigate(['connexion'])
    }
    return true
  }
}
