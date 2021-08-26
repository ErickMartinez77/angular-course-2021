import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    // this.router.params.subscribe(p=>{
    //   console.log('PARAMS', p);
    // });

    console.log('SNAPSHOT',this.router.snapshot.params);
  }

}