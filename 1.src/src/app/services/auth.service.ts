import { Injectable } from '@angular/core';
import {IUser} from "../models/iuser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logIn(user: IUser): boolean {
    return true;
  }


  logOut() {

  }
}
