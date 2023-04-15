import { AfterViewChecked, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements AfterViewChecked {
  margin: string = '';
  @ViewChild('gt') gradient!: ElementRef<SVGElement>;
  constructor() { }

  @Input('colors') colors: {start: string, end: string}= {start: '#00d084', end: '#7bdcb5'}
  // {topStart: '#00d084', topEnd: '#7bdcb5', bottomStart: '#00d084', bottomEnd: '#00d084'}

  ngAfterViewChecked(): void {
      setTimeout(this.handleHeightChange)
  }

  @HostListener('window:resize')
  handleHeightChange = () => {
    this.margin = this.gradient.nativeElement.clientHeight / 6 + 'px';
  }
}
