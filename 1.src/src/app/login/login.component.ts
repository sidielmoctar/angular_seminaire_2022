import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {IUser} from "../models/iuser";
import {UtilService} from "../services/util.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public msgErr = false;
  public user: IUser = {
    dateN: "", email: "", firstName: "", id: 0, mdp: "", profil: "", tel: ""
  }

  constructor(private auth: AuthService, private util: UtilService) { }

  ngOnInit(): void {
  }

  logIn(user: IUser) {
    if(this.auth.logIn(user)) {
      this.util.navigateTo("home");
    } else {
      this.msgErr = true;
    }
  }

}
