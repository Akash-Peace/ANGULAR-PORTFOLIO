import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {this.intro = this.data.intro}
  intro: any;
  ngAfterViewInit(): void {
    
    var anDef:any = {opacityIn: [],scaleIn: [],scaleOut: 0,durationIn: 0,durationOut: 0,delay: 0};
    anDef.opacityIn = [0,1];
    anDef.scaleIn = [0.2, 0.7];
    anDef.scaleOut = 1;
    anDef.durationIn = 1200;
    anDef.durationOut = 1000;
    anDef.delay = 1000;

    
    anime.timeline({loop: true})
    .add({
      targets: '.anDef .letters-1',
      opacity: anDef.opacityIn,
      scale: anDef.scaleIn,
      duration: anDef.durationIn
    }).add({
      targets: '.anDef .letters-1',
      opacity: 0,
      scale: anDef.scaleOut,
      duration: anDef.durationOut,
      easing: "easeInExpo",
      delay: anDef.delay
    }).add({
      targets: '.anDef .letters-2',
      opacity: anDef.opacityIn,
      scale: anDef.scaleIn,
      duration: anDef.durationIn
    }).add({
      targets: '.anDef .letters-2',
      opacity: 0,
      scale: anDef.scaleOut,
      duration: anDef.durationOut,
      easing: "easeInExpo",
      delay: anDef.delay
    }).add({
      targets: '.anDef .letters-3',
      opacity: anDef.opacityIn,
      scale: anDef.scaleIn,
      duration: anDef.durationIn
    }).add({
      targets: '.anDef .letters-3',
      opacity: 0,
      scale: anDef.scaleOut,
      duration: anDef.durationOut,
      easing: "easeInExpo",
      delay: anDef.delay
    }).add({
      targets: '.anDef',
      opacity: 0,
      duration: 0,
      delay: 0
    });

  }

}
