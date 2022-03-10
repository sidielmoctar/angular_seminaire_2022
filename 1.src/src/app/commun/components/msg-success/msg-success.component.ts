import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'msg-success',
  templateUrl: './msg-success.component.html',
  styleUrls: ['./msg-success.component.css']
})
export class MsgSuccessComponent implements OnInit {
  @Input("msg") msg: any;
  constructor() { }

  ngOnInit(): void {
  }

}
