import { Component, OnInit, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() iState: AppComponent;
  @Input() dState: AppComponent;
  @Input() wState: AppComponent;
  @Input() aState: AppComponent;
  @Input() lState: AppComponent;

  constructor() {}

  ngOnInit() {
  }

}
