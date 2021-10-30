import {Component, OnInit} from '@angular/core';
//import {ConnexionService} from './connexion.service';
import {FormBuilder, FormGroup} from '@angular/forms';
//import {TokenManagerService} from '../services/token-manager.service';
//import {AuthService} from '../services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Router} from '@angular/router';
//import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  myForm: FormGroup;
  token: any;
  message;
  user;

  constructor( builder: FormBuilder, private  router: Router) {
    this.myForm = builder.group({
      login: [''],
      password: [''],
    });
    // if (this.authSrv.isAuthenticaded() == true) {
    // this.tokenMg.redirectByRole(this.tokenMg.decodeToken().roles[0])
    // }
  }
  ngOnInit(): void {

  }
  onSubmit(): void {
    /**
    this.tokenMg.login(this.myForm.value.login, this.myForm.value.password)
      .subscribe(
        token => {
          this.tokenMg.setToken(token.token);
          // this.tokenMg.getToken();
          this.token = this.tokenMg.decodeToken();
          this.authSrv.getCurrentUser().subscribe(
            data => {
              this.user = data;
              if (this.user.archiver === false) {
                const role = this.tokenMg.decodeToken().roles[0];
              //  this.connexionSrv.redirectByRole(role);
              } else {
                this.alert.message('Vous avez plus accé a ce site merci de contacté l\'administrateur !', 'error');
              }
            },
            error => this.alert.message(error.error.message, 'error')
          );
        },
        (error) => {
          this.message = error.error.code;
          if (this.message === 401) {
            this.alert.message('login ou mot de passe incorrecte !', 'error');
          }
        });**/
  }
}
