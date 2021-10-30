import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-list-accord',
  templateUrl: './list-accord.component.html',
  styleUrls: ['./list-accord.component.scss']
})
export class ListAccordComponent implements OnInit {
  accords: any
  constructor(public activatedRoute: ActivatedRoute, public  alertSrv: AlertService) {
  }

  ngOnInit(): void {
    let data = this.activatedRoute.snapshot.data['referentiels']
    this.accords = data['hydra:member']
  }
}
