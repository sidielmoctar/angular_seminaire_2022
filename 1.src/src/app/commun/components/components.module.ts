import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgSuccessComponent } from './msg-success/msg-success.component';
import { MsgDangerComponent } from './smg-danger/msg-danger.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    MsgSuccessComponent,
    MsgDangerComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MsgSuccessComponent,
    MsgDangerComponent,
    NavBarComponent,
    SideBarComponent
  ]
})
export class ComponentsModule { }
