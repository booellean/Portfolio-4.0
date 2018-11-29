import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  imagePath = '/assets/images/icons/';

  profile = {
    name: 'profile',
    alt: `Profile image of Elle Pope, showing their spectrum behaviors through gesture.`,
    fileType: '.jpg',
    show: false
  };

  titles = [
    'Spectrum Extraordinaire',
    'Frontend Developer',
    'Over Thinker',
    'Former Punk Enthusiast',
    'Random Title Generator',
    'Illustrative Exclusionist',
    'Video Game Dev Hobbyist',
    'Potential Streamer'
  ];

  num: number = Math.floor( Math.random() * this.titles.length);

  constructor() { }

  ngOnInit() {
  }

}
