import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  @Input() name: string;
  @Input() lastName: string;

  @Output() onSentData = new EventEmitter(null);

  constructor() {}

  ngOnInit() {}
  onShowData() {
    this.onSentData.emit('general data ' + this.name + ' ' + this.lastName);
  }
}
