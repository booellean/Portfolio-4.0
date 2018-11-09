import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { WebdevComponent } from './webdev/webdev.component';
import { DesignComponent } from './design/design.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { DeferLoadModule } from '@trademe/ng-defer-load';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    IllustrationComponent,
    WebdevComponent,
    DesignComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    DeferLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
