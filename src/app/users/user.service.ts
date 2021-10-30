import { Injectable } from '@angular/core';
import {HttpService} from '../services/http.service';
import {TokenManagerService} from '../services/token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpService, public  tokenMg: TokenManagerService) {
  }
  findAll() {
    return this.http.get('admin/accord/users');
  }





}
