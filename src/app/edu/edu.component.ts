import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {this.education = this.data.education}

  education: any;

}
