import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appVisible]'
})
export class VisibleDirective {

  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('document:scroll') clicked(){
    if(this.el.nativeElement.offsetHeight + this.el.nativeElement.clientHeight ===  window.scrollY) console.log('visible');
    console.log(this.el.nativeElement.offsetTop - this.el.nativeElement.clientHeight)
    console.log(window.scrollY)


  }



}
