import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AlertService} from '../services/alert.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:  [];
  page = 1;


  constructor(public authSrv: AuthService, private userSrv: UserService, public alertSrv: AlertService,
              private avtivatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    let users = this.avtivatedRoute.snapshot.data['users'];
  }

}
