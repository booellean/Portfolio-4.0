import { Component, forwardRef } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Elle Pope';

  currentLocation: string; //used for closing the menu, making sure old page stays open

  public iState: boolean = false; //illustration section is closed or cropped
  public dState: boolean = false; //design section is closed or cropped
  public wState: boolean = false; //webdev section is closed or cropped
  public aState: boolean = false; //about section is closed or cropped
  public nState: boolean = true; //navbar is open

  onChangeHash(event: Event){
    this.currentLocation = window.location.hash;
    switch(this.currentLocation){
      case '#illustration':
        this.iState = true;
        this.dState = false;
        this.wState = false;
        this.aState = false;
        setTimeout( ()=>{
          this.nState = false;
        }, 1000); //Allows animation to play through before closing
        break;
      case '#design':
        this.iState = false;
        this.dState = true;
        this.wState = false;
        this.aState = false;
        setTimeout( ()=>{
          this.nState = false;
        }, 1000); //Allows animation to play through before closing
        break;
      case '#webdev':
        this.iState = false;
        this.dState = false;
        this.wState = true;
        this.aState = false;
        setTimeout( ()=>{
          this.nState = false;
        }, 1000); //Allows animation to play through before closing
        break;
      case '#about':
        this.iState = false;
        this.dState = false;
        this.wState = false;
        this.aState = true;
        setTimeout( ()=>{
          this.nState = false;
        }, 1000); //Allows animation to play through before closing
        break;
      default:
        return;
    }
  }

  onChangeBoolean(page: string){
    this.currentLocation = window.location.hash;

    switch(page){
      case 'hamburger-action':
        if(this.nState){
          switch(this.currentLocation){
            case '#illustration':
            this.iState = true;
            this.dState = false;
            this.wState = false;
            this.aState = false;
            setTimeout( ()=>{
              this.nState = false;
            }, 1000); //Allows animation to play through before closing
            break;
            case '#design':
              this.iState = false;
              this.dState = true;
              this.wState = false;
              this.aState = false;
              setTimeout( ()=>{
                this.nState = false;
              }, 1000); //Allows animation to play through before closing
              break;
            case '#webdev':
              this.iState = false;
              this.dState = false;
              this.wState = true;
              this.aState = false;
              setTimeout( ()=>{
                this.nState = false;
              }, 1000); //Allows animation to play through before closing
              break;
            case '#about':
              this.iState = false;
              this.dState = false;
              this.wState = false;
              this.aState = true;
              setTimeout( ()=>{
                this.nState = false;
              }, 1000); //Allows animation to play through before closing
              break;
            default:
              this.iState = false;
              this.dState = false;
              this.wState = false;
              this.aState = false;
              this.nState = false;
          }
        }else{
          this.iState = false;
          this.dState = false;
          this.wState = false;
          this.aState = false;
          this.nState = true;
        }
        break;
      case 'illustration':
        this.iState = true;
        this.dState = false;
        this.wState = false;
        this.aState = false;
        setTimeout( ()=>{
          this.nState = false;
        }, 1000); //Allows animation to play through before closing
        break;
      case 'design':
        this.iState = false;
        this.dState = true;
        this.wState = false;
        this.aState = false;
        setTimeout( ()=>{
          this.nState = false;
        }, 1000); //Allows animation to play through before closing
        break;
      case 'webdev':
        this.iState = false;
        this.dState = false;
        this.wState = true;
        this.aState = false;
        setTimeout( ()=>{
          this.nState = false;
        }, 1000); //Allows animation to play through before closing
        break;
      case 'about':
        this.iState = false;
        this.dState = false;
        this.wState = false;
        this.aState = true;
        setTimeout( ()=>{
          this.nState = false;
        }, 1000); //Allows animation to play through before closing
        break;
      default:
        this.iState = false;
        this.dState = false;
        this.wState = false;
        this.aState = false;
        this.nState = true;
    }
  }
}
