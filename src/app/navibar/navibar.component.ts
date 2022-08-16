import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HostListener } from "@angular/core";

declare var anime: any;
@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css']
})
export class NavibarComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void{
    anime({
      targets: '.c1 .el',
      direction: 'alternate',
      loop: true,
      scale: {
        value: '1.4',
        delay: function(el:any , i:any , l:any) {
          return i * 500;
        },
        duration: 1000
      }
    });
    
  }
  innerWidth:any = window.innerWidth;
  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
