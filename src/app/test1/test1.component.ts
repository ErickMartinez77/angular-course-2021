import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'erick-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {
  @Input('status') statusTest: string = 'working';

  constructor() {}
}
