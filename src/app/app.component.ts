import { Component, forwardRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Elle Pope';

  public iState: boolean = false;
  public dState: boolean = false;
  public wState: boolean = false;
  public aState: boolean = false;

  onChangeBoolean(page: string){
    switch(page){
      case 'illustration':
        this.iState = true;
        this.dState = false;
        this.wState = false;
        this.aState = false;
        break;
      case 'design':
        this.iState = false;
        this.dState = true;
        this.wState = false;
        this.aState = false;
        break;
      case 'webdev':
        this.iState = false;
        this.dState = false;
        this.wState = true;
        this.aState = false;
        break;
      case 'about':
        this.iState = false;
        this.dState = false;
        this.wState = false;
        this.aState = true;
        break;
      default:
        this.iState = false;
        this.dState = false;
        this.wState = false;
        this.aState = false;
    }
  }
}
