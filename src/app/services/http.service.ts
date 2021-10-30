import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string;
  httpOptions: any = null;
  user: any;
  customUrl: string;

  constructor(private httpSrv: HttpClient, public router: Router, public alertSrv: AlertService) {
    this.customUrl = 'https://localhost:8000/api/';
  }
  get<T>(url: string) {
    return this.httpSrv.get<T>(this.customUrl + url);
  }

  post(url: string, data: any) {
    return this.httpSrv.post(this.customUrl + url, data);
  }

  put(url: string, data: any) {
    return this.httpSrv.put(this.customUrl + url, data);
  }

  deleteMultiple(url: string, data: any) {
    return this.httpSrv.post(this.customUrl + url, data);
  }
  delete(url: string) {
    return this.httpSrv.delete(this.customUrl + url);
  }
  handleError(error: any) {
    if (error.error.code === 401) {
      this.router.navigate(['connexion']);
    }
  }
}
