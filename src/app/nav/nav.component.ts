import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  page: string;

  @Input() iState: AppComponent;
  @Input() dState: AppComponent;
  @Input() wState: AppComponent;
  @Input() aState: AppComponent;
  @Input() nState: AppComponent;

  @Output() changeBoolean = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  onOpenPage(page: string){
    this.page = page;
    this.changeBoolean.emit(this.page);
  }

}
