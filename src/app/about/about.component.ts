import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { InteractionButton } from '../shared/types';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  animations: [
    trigger('load', [
      transition(':enter', [
        style({opacity: 0}),
        animate('{{ duration }}s {{ delay }}ms')
      ], {
        params: {
          duration: .4,
          delay: 0
        }
      }),

    ])
  ]
})
export class AboutComponent implements AfterViewInit {
  visited = 1;
  constructor() {
    if (localStorage.getItem('visited')) this.visited = 5;
    localStorage.setItem('visited', 'true')
  }

  show = false;

  buttons: InteractionButton[] = [
    {
      name: 'E-Mail me',
      icon: 'ph-envelope',
      url: 'mailto:wojciechduda03@gmail.com'
    },
    {
      name: 'GitHub',
      icon: 'ph-github-logo',
      url: 'https://github.com'
    },
    {
      name: 'Upwork',
      icon: 'upwork.png',
      url: 'https://github.com'
    }
  ]

  ngAfterViewInit(){

  }

  secret(){
    localStorage.removeItem('visited');
    location.reload();
  }

}
