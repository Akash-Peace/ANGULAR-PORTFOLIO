import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {this.skills = this.data.skills}

  skills: any;

}
