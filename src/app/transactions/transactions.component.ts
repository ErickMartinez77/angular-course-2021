import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  @Input() date:string;
  @Input() from:string;
  @Input() to:string;
  @Input() quantity:number;
  @Input() moneyType:string;
  @Input() mineType:string;
  @Input() miner:number;
  @Output() mine = new EventEmitter();

  public transHecha = true;
  public count=0;

  constructor() { }

  ngOnInit() {
  }

  onMine(){
    this.mine.emit();
    this.transHecha = false;
    this.count++;
  }

  verifyCount(){
    if (this.count === 7){
    }
    return this.count;
  }

}