import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  @Input() data:any;

  constructor(private utilsService:UtilsService) { }

  ngOnInit(): void {
    this.utilsService.currentData().subscribe(s => console.log(s));
  }

}
