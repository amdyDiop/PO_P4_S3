import { Injectable } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {TokenManagerService} from "../../services/token-manager.service";

@Injectable({
  providedIn: 'root'
})
export class AccordService {
  constructor(public http: HttpService, public  tokenMg: TokenManagerService) {
  }

  findAll() {
    return this.http.get('admin/accords' );
  }

  findOneById(id: number) {
    return this.http.get('admin/accord/' + id);
  }
  create(data) {
    return this.http.post('admin/accord', data);
  }

  edit(id, data) {
    return this.http.post('admin/accord/' + id, data);
  }
  delete(id: number) {
    return this.http.delete('admin/accord/' + id);
  }
}
