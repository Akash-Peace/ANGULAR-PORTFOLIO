import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {this.projects = this.data.projects}

  projects: any;

}
