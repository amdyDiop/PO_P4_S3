import {Component, OnInit} from '@angular/core';
//import {ConnexionService} from "../../connexion/connexion.service";
//import {TokenManagerService} from "../../services/token-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  actif=false
// connexion: ConnexionService, private tokenMg: TokenManagerService,
  constructor( public router: Router) {
  }

  logout() {
   // this.tokenMg.removeToken();
    this.router.navigate(['connexion']);
  }


  ngOnInit(): void {
    if (this.router.url.startsWith("/detail")) {
      this.actif =true
    }
  }

}
