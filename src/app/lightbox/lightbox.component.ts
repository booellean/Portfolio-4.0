import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  @Input() lState: AppComponent;
  @Input() lObject: AppComponent;

  constructor() { }

  @Output() changeLightBox = new EventEmitter<string>();

  onLightBox(){
    this.changeLightBox.emit();
  }

  ngOnInit() {
  }

}
