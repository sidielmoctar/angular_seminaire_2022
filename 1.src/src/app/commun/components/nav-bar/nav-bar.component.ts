import { Component, OnInit } from '@angular/core';
import {UtilService} from "../../../services/util.service";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private util: UtilService, private data: DataService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.data.curUser = {dateN: "", email: "", firstName: "", id: 0, mdp: "", profil: "", tel: ""};
    this.util.navigateTo("login");
  }

}
