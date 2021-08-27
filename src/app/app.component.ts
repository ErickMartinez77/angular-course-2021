import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  
}
