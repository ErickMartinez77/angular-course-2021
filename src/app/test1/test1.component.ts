import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'erick-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {
  @Input('status') statusTest: string = 'working';

  @Output('onSendData') sendData = new EventEmitter(null);

  constructor() {}

  onClickTest(event: any) {
    console.log('Event Click', event);

    this.sendData.emit({
      name: 'erick',
      status: 'busy'
    });
  }
}
