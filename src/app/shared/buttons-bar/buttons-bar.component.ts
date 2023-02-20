import { Component, Input, OnInit } from '@angular/core';
import { InteractionButton } from '../types';

@Component({
  selector: 'app-buttons-bar',
  templateUrl: './buttons-bar.component.html',
  styleUrls: ['./buttons-bar.component.sass']
})
export class ButtonsBarComponent  {
  preventLink(event: Event){
    event.preventDefault();
  }
  constructor() { }

  @Input() buttons?: InteractionButton[]

}
