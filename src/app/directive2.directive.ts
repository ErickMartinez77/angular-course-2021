import { Directive, EventEmitter, Input, OnChanges, Output, TemplateRef, ViewContainerRef } from '@angular/core';
//DIRECTIVA ESTRUCTURAL
@Directive({
  selector: '[ngIfErick]'
})
export class Directive2Directive implements OnChanges{

  @Input() ngIfErick:boolean = true;

  @Output() test = new EventEmitter<any>(null);

  constructor(private templateRef: TemplateRef<any>, //hace referencia al html
    private viewContainerRef: ViewContainerRef) {


  }

  ngOnChanges(changes:any){
    console.log('changes: ',changes.ngIfErick.currentValue);
    this.setViewContainer(changes.ngIfErick.currentValue);
    this.test.emit('AAAAA');
  }

  setViewContainer(show:boolean){
    if(show){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  

}