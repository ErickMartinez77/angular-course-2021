import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';
//DIRECTIVA DE ATRIBUTO
@Directive({
  // patron decorator
  selector: '[directive1Test]'
})
export class Directive1Directive implements OnChanges{

  @Input() directive1Test:string = 'yellow';
  @Output() outputTest = new EventEmitter<any>(null);

  @HostListener('click') onClick(){
    this.setBackgroundColor(this.directive1Test);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBackgroundColor('pink');
    this.outputTest.emit('test myoutput');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBackgroundColor('gray');
  }

  constructor(private element: ElementRef) {//ElementRef hace refe a culquier elemento html
    this.setBackgroundColor(this.directive1Test);
    this.element.nativeElement.style.border = '10px green solid';  
  }

  setBackgroundColor(color:string){
    this.element.nativeElement.style.backgroundColor = color
  }

  ngOnChanges(changes:any){
    this.setBackgroundColor(changes.directive1Test.currentValue);
  }
}
