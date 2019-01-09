import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.scss'],
  animations:[
    trigger('preview-container',[
      transition('* => *',[
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('50ms', [
          animate('.1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(10%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(0%)', offset: 1}),
          ]))
        ]), { delay: 1200 }) //end :leave query
      ])  //end transition
    ])]//end trigger //end animation
})
export class WebdevComponent implements OnInit {

  imagePath = '/assets/images/webdev/';

  wordpress = [{
    name: 'thinkclink',
    alt: 'Website Link for Thinkclink.com, Smart Investing',
    fileType: '.png',
    link: 'https://thinkclink.com/',
    title: 'ThinkClink Smart Investing',
    description: `This is a WordPress theme derived from the twentysixteen theme, with custom code and css. This website was commissioned to combine two of the client's former websites. This involved exporting the WordPress SQL database, creating custom categories from the old sites to control how data was dynamically generated, and transferring ownership of domain.`,
    date: 1542672000,
    show: false
   },{
    name: 'isaacisms',
    alt: 'Isaacisms: Insights from a Child',
    fileType: '.png',
    link: 'https://isaacisms.com/',
    github: 'https://github.com/booellean/TrefoilCultural',
    title: 'Isaacisms',
    description: `This is a WordPress theme derived from the twentysixteen theme, with custom code and css. This website was commissioned to combine two of the client's former websites nad host them under Trefoil Cultural and Environmental, however, the client had a change of heart and now the theme is used for one of his sites, Isaacisms. This involved exporting the WordPress SQL database, creating custom categories from the old sites to control how data was dynamically generated, and transferring ownership of domain.`,
    date: 1517443200,
    show: false
   },{
    name: 'whitewashed-tomb',
    alt: 'Whitewashed Tomb: a Blog by Richard Rothaus',
    fileType: '.png',
    link: 'https://whitewashedtomb.com/',
    title: 'Whitewashed Tomb',
    description: `Formerly adjoined to Isaacisms through Trefoil Cultural and Environmental, this site was the leftover data of the exported WordPress SQL database.`,
    date: 1517443200,
    show: false
   },{
     name: 'mr-ecology',
     alt: 'Website Link for Matt Rothaus Ecology',
     fileType: '.jpg',
     link: 'http://www.mr-ecology.com',
     github: 'https://github.com/booellean/MARothaus-Blog',
     title: 'Matt Rothaus Blog',
     description: `This is a custom WordPress website designed without a theme template. The Form is all custom PHP code. The structure of the the DOM content proved to be a difficult case for Edge and IE browsers due to a high reliance on fixed positioning. I was able to correct this by also fixing the position of all container tags and having overflow for child elements. With clever styling, I was able to style the overflow scrollbar to look natural with the browser's window scroll.`,
     date: 1505606400,
     show: false
    },{
      name: 'vulpe-venture',
      alt: `Website Link for Victoria Vulpe's Blog`,
      fileType: '.jpg',
      github: 'https://github.com/booellean/TheVulpeVenture',
      link: 'http://thevulpeventure.com',
      title: 'Victoria Vulpe Blog',
      description: `This is a custom WordPress theme derived from the twentyseventeen theme with custom css and code. One part I am most proud of with this code was by using WordPress' custom preview images to generate wrapper backgrounds based on individual blog posts.`,
      date: 1508025600,
      show: false
    }];

  staticPages = [{
    name: 'poly-entertainment',
    alt: 'Website Link for Poly entertainment',
    fileType: '.png',
    github: 'https://github.com/booellean/poly-entertainment',
    link: 'http://www.polyentertainment.com',
    title: 'Poly entertainment',
    description: 'This is an Express NodeJS application for a multi-media development company. Although currently static, it will eventually have a blog, videos of upcoming titles, and fully interactive free games.',
    date: 1549584000,
    show: false
  },{
    name: 'map-mothers-card',
    alt: `Website link for Mother's Day Card with Map`,
    fileType: '.jpg',
    github: 'https://github.com/booellean/map',
    link: 'https://booellean.github.io/map/',
    title: `Map Mother's Day Card`,
    description: `This is a static website for a digital mother's day card. This card utilizes google's map API to "bring" my mother to my favorite locations in Seattle. When the map coordinates are loaded, an associated video plays with that location so my mother can see where that location is.`,
    date: 1494720000,
    show: false
    },{
    name: 'dnd-form',
    alt: `Website link for D'n'D character sheet form`,
    fileType: '.jpg',
    github: 'https://github.com/booellean/database-handlebars',
    link: 'https://booellean.github.io/database-handlebars/',
    title: `Character Form with Handlebars and AJAX`,
    description: `This is a static website that utilizes a heroku server to save user inputted data. This form has a JQuery AJAX call to post and get data, and then generates that data into a grid table using Handlebars.`,
    date: 1496361600,
    show: false
    },{
    name: '8-ball',
    alt: `Website link for a sarcastic Magic 8-ball`,
    fileType: '.jpg',
    github: 'https://github.com/booellean/8-ball',
    link: 'https://booellean.github.io/8-ball/',
    title: `Magic 8-ball with Integrated UX`,
    description: `This is a static website that utilizes a user's microphone and gyroscope to create a unique user experiece where they can ask the ball a question and then "shake" for an answer. Some answers are pre-determined based on the question asked, despite if it's asked in an input field or microphone.`,
    date: 1489536000,
    show: false
    }];

  constructor() { }

  ngOnInit() {
  }

}
