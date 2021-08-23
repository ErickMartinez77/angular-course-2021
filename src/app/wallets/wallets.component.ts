import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {
  @Input() wallet: string;
  @Input() name: string;
  @Input() eth: number;
  @Input() btc: number;

  @Output() votar = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
