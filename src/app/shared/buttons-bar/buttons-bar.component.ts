import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { InteractionButton } from '../types';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-buttons-bar',
  templateUrl: './buttons-bar.component.html',
  styleUrls: ['./buttons-bar.component.sass'],
  standalone: true,
  imports: [CommonModule]
})
export class ButtonsBarComponent  {
  constructor(private httpClient: HttpClient) { }
  @Input() btnClass = '';
  preventLink(event: Event){
    event.preventDefault();
  }

  @Input() buttons?: InteractionButton[]

}
