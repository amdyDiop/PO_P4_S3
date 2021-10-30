import { Injectable } from '@angular/core';
import {tokenNotExpired} from "angular2-jwt";
import jwt_decode from "jwt-decode";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {
  token: string;
  public error: any;
  private tokenName: string = 'token';
  public localStorage = window.localStorage;
  constructor(private  httpSrv: HttpService,private router: Router) { }
  getToken() {
    if (!this.token) {
      this.token = this.localStorage.getItem(this.tokenName);
    }
    return this.token ? this.token : null;
  }
  public getTokenName(): string {
    return this.tokenName;
  }
  public setToken(token: string) {
    this.token = token;
    this.localStorage.setItem(this.getTokenName(), token);
  }
  removeToken() {
    this.token = '';
    this.localStorage.removeItem(this.getTokenName());
  }
  public expiredToken(): boolean {
    const token = this.getToken();
    return tokenNotExpired(this.getTokenName(), token);
  }
  login(login: string, password: string): any {
    const credentials =
      {
        username: login,
        password: password,
      };
    return this.httpSrv.post('login_check', credentials);
  }
 /** public genereToken(login: string, pass: string): void {
    this.login(login, pass)
  }*/
  decodeToken(): any {
    return  this.localStorage.getItem('token') ? jwt_decode(this.localStorage.getItem('token')) : null;
  }
  redirectByRole(role: string) {
    console.log(role)
    switch (role) {
      case 'ROLE_ADMIN': {
        this.router.navigate(['admin/dashboard']);
        break;
      }
      case 'ROLE_FORMATEUR': {
        this.router.navigate(['formateur']);
        break;
      }
      case 'ROLE_APPRENANT': {
        this.router.navigate(['apprenant']);
        break;
      } case 'ROLE_CM': {
        this.router.navigate(['cm']);
        break;
      }
      default: {
        this.router.navigate(['']);
        break;
      }
    }
  }
}
