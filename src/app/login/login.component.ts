import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PublicationService } from './services/publication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  transactions:any = [];
  wallets:any = [];

  constructor(private publicationService:PublicationService) {

  }

  ngOnInit(): void{
    this.publicationService.getAllTransactions().subscribe(res=>{
      Object.entries(res).map((p:any) => this.transactions.push({id:p[0], ...p[1]}))
    });

    this.publicationService.getAllWallets().subscribe(res=>{
      Object.entries(res).map((p:any) => this.wallets.push({id:p[0], ...p[1]}))
    });

  }


  update(){
    this.publicationService.updateTransactions('p001',{
      "date": "17/02/2021",
      "description": "update from frontend",
      "idUser": 1,
      "imageUrl": "http://firebase/img.jpg",
      "userPhotoUrl": "http://firebase/user1.jpg"
    }).subscribe(res=>console.log(res))
  }

  deleteA(){
    this.publicationService.deleteTransactions('p002').subscribe((res=>console.log(res)));
  }

  patch(){
    this.publicationService.patchWallets('p001',{
      "description": "update from frontend PATCH 2",
    }).subscribe(res=>console.log(res))
  }

  getTotalCoins(type:string){
    return this.wallets.reduce((acc:any, value:any) =>
    acc + (value[type] > 0 ? value[type] : 0)
    , 0);
  }

  onMine(transaction:any, i:number):void{

    const indexFROM = this.wallets.findIndex((w: { wallet: any; }) => w.wallet === transaction.from);
    const indexTO = this.wallets.findIndex((w: { wallet: any; }) => w.wallet === transaction.to);
    const iTr = this.transactions.findIndex((t: { id: any; })=>t.id === transaction.id)

    let fromNumber: number = this.wallets[indexFROM][transaction.moneyType] - transaction.quanty;

    let toNumber : number = this.wallets[indexTO][transaction.moneyType] + transaction.quantity;

    if (transaction.moneyType ==='eth' || transaction.moneyType === 'ETH'){
      this.publicationService.patchWallets(this.wallets[indexFROM].id, {eth:fromNumber}).subscribe(res=>console.log(res));
      this.publicationService.patchWallets(this.wallets[indexTO].id, {eth:toNumber}).subscribe(res=>console.log(res));
    } else {
      this.publicationService.patchWallets(this.wallets[indexFROM].id, {btc:fromNumber}).subscribe(res=>console.log(res));
      this.publicationService.patchWallets(this.wallets[indexTO].id, {btc:toNumber}).subscribe(res=>console.log(res));
    }
    this.publicationService.deleteTransactions(this.transactions[iTr].id);
  }

  getIfThereAreTransactions():boolean{
    const aux = this.transactions.filter(
      (t: { mineType: string; miner: number; }) => t.mineType === 'PoS' && t.miner < 20);

    return this.transactions.length === aux.length;
  }


}
