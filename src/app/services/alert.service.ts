import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() { }
  message(message,type){
    Swal.fire({
      position: 'top-end', icon: type,
      title: message,
      showConfirmButton: false,
      timer: 3500
    })
  }
}
