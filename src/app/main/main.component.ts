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

  public lState: boolean = false; //lightbox is closed
  public lObject: any; //object that will be generated in the lightbox

  constructor() {}

  ngOnInit() {
  }

  onChangeLightBox(imageObject: any){
    this.lState ? this.lState = false : this.lState = true;
    imageObject ? this.lObject = imageObject : imageObject = imageObject;
    console.log(this.lState + '  ' + this.lObject + '  ' + this.lObject.name);
  }

}
