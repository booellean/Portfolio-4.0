# ![icon](https://i.imgur.com/XrU2jqa.png) Portfolio 4.0

## Dependencies

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7
- @angular-devkit/core v. 0.6.8
- TypeScript v. 2.7.2

## ![About](https://i.imgur.com/REJj0q2.png)

This is an Angular 6.0 application to showcase my portfolio. It can be divided into 4 sections

  - About
  - Design
  - Illustration
  - Web Development

This app is experimental and uses hash events as a stand in for traditional routing navigation. In doing so, the application does not break when a user tries to refresh a sub page or open a sub page as a bookmark. This relies on five main variables and their boolean values.

```
  public iState: boolean = false; //illustration section is closed or cropped
  public dState: boolean = false; //design section is closed or cropped
  public wState: boolean = false; //webdev section is closed or cropped
  public aState: boolean = false; //about section is closed or cropped
  public nState: boolean = true; //navbar is open, default for every new page request
```
The boolean values change on click and hash events. This affects the page content. It is able to do so by utilizing ` @Input() `, ` @Output() `, and ` EventEmitter<string>() `.

```
<nav [ngClass]="nState ? 'nav-open' : 'nav-closed'">
  <a  id="nav-webdev" [ngClass]="wState ? 'comic-open' : 'comic-closed'"
      (click)="onOpenPage('webdev')" ><span>WebDev</span></a>
  <a  id="nav-design" [ngClass]="dState ? 'comic-open' : 'comic-closed'"
      (click)="onOpenPage('design')"><span>Design</span></a>
  <a  id="nav-about" [ngClass]="aState ? 'comic-open' : 'comic-closed'"
      (click)="onOpenPage('about')"><span>About</span></a>
  <a  id="nav-illustration" [ngClass]="iState ? 'comic-open' : 'comic-closed'"
      (click)="onOpenPage('illustration')"><span>Illustration</span></a>
</nav>
```

When the anchor is clicked, the boolean value changes, which effects the page by changing values in the main.component.html

```
<main>
  <app-illustration *ngIf="iState"
                    (changeLightBox) ="onChangeLightBox($event)"></app-illustration>
  <app-design       *ngIf="dState"
                    (changeLightBox) ="onChangeLightBox($event)"></app-design>
  <app-about        *ngIf="aState"></app-about>
  <app-webdev       *ngIf="wState"></app-webdev>
</main>
```
### ToDo:

- Change the default boolean values to false for each item to incorporate more effective bookmarking.
- Change click event in nav.component.html to only change hash events and minimize functions in app.component.ts to respond to only hash changes and not click events.