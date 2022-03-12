import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgSuccessComponent } from './msg-success/msg-success.component';
import { MsgDangerComponent } from './smg-danger/msg-danger.component';



@NgModule({
  declarations: [
    MsgSuccessComponent,
    MsgDangerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MsgSuccessComponent,
    MsgDangerComponent
  ]
})
export class ComponentsModule { }
