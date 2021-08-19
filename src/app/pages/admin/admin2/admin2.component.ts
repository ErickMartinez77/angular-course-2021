import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin2',
  template: `
    <p class="hola">
      admin2 works!
    </p>
    <p>{{test2 ?? test3}}</p>
    <p>{{test2 || 'confir'}}</p>
    <button (click)="testParams('erick', 'martinez')">Test</button>
  `,
  styles: [
    `
      .hola {
        background-color: yellow;
        color: red;
      }
    `
  ]
})
export class Admin2Component implements OnInit {

  test2 = null;
  test3 = 'cristian';

  constructor() {}

  ngOnInit() {}

  /*
   * @params name
   * @params lastname
   * * returns name and lastname joined
   */
  public testParams(name: string = 'jorge', lastName?: string = 'gutierrez'): string {
    const aux = 'juan';
    console.log((name ?? aux) + '' + lastName);
    return name + '' + lastName;
  }
}
