import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

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
    title: 'Spectrum Extraordinaire',
    show: false
  };

  constructor() { }

  ngOnInit() {
  }

}
