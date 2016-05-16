import {Component} from '@angular/core';
import { Destination } from './destination';
import { DestinationDetailComponent } from './destination-detail.component';

@Component({
    selector: 'my-app',
	template:`
	  <h1>{{title}}</h1>
	  <h2>My Proposed Destinations</h2>
	  <ul class="heroes">
		  <li *ngFor="let destination of destinations" [class.selected]="destination === selectedDestination" (click)="onSelect(destination)">
		    <!-- each destination goes here -->
  			<span class="badge">{{destination.id}}</span> {{destination.name}}
		  </li>
	  </ul>
	  <my-destination-detail [destination]="selectedDestination"></my-destination-detail>
    `,
    styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
	directives: [DestinationDetailComponent]
})
export class AppComponent {
	title = "Iceland: West Side";
	destinations = DESTINATIONS;
	selectedDestination: Destination;
	onSelect(destination: Destination) { this.selectedDestination = destination; }
}

var DESTINATIONS : Destination [] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];


























