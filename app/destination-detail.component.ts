import {Component, Input} from '@angular/core';
import { Destination } from './destination';

@Component({
    selector: 'my-destination-detail',
    template: `
	  <div *ngIf="destination">
	    <h2>{{destination.name}} details!</h2>
	    <div><label>id: </label>{{destination.id}}</div>
	    <div>
	      <label>name: </label>
	      <input [(ngModel)]="destination.name" placeholder="name"/>
	    </div>
	  </div>
	  `
    })
export class DestinationDetailComponent {
  @Input() 
  destination: Destination;
}

