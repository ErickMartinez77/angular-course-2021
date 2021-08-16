import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  // patron decorator
  selector: '[directive1Test]'
})
export class Directive1Directive {

  @Input() color:string = 'yellow';
  @Output() outputTest = new EventEmitter<any>(null);
  @Input() color2:string;

  @HostListener('click') onClick(){
    this.setBackgroundColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBackgroundColor('pink');
    this.outputTest.emit('test myoutput');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBackgroundColor('gray');
  }

  constructor(private element: ElementRef) {//ElementRef hace refe a culquier elemento html
    this.setBackgroundColor(this.color);
    this.element.nativeElement.style.border = '10px green solid';  
  }

  setBackgroundColor(color:string){
    this.element.nativeElement.style.backgroundColor = color
  }
}
