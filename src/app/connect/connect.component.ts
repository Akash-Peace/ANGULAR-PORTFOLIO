import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  @Input() data: any;
  constructor() { }
  contact: any;
  connect: any;
  ngOnInit(): void {
    this.contact = this.data.contact;
    this.connect = this.data.connect;
  }
}
