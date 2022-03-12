import {Component, HostListener} from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularSeminaire';


  constructor(private data: DataService) {

  }

  @HostListener("window:beforeunload",["$event"])
  unloadNotification($event:any){
    sessionStorage.setItem("user",JSON.stringify(this.data.curUser));
    sessionStorage.setItem("users",JSON.stringify(this.data.users))
  }
}
