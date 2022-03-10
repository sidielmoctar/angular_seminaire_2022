import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgSuccessComponent } from './msg-success/msg-success.component';



@NgModule({
  declarations: [
    MsgSuccessComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MsgSuccessComponent]
})
export class ComponentsModule { }
