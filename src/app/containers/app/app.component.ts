import { Component } from '@angular/core';
import { RouterAnimation } from '../../animations';

@Component({
	selector: 'app-root',
	template: `
		<h1>We have routed animation in here</h1>
		<ul>
			<li><a routerLink="/first">First</a></li>
			<li><a routerLink="/second">Second</a></li>
		</ul>
		<div class="main" [@routerAnimation]="getState(appOutlet)">
			<router-outlet #appOutlet="outlet"></router-outlet>
		</div>
	`,
	styleUrls: ['./app.component.scss'],
	animations: [RouterAnimation]
})
export class AppComponent {

	getState(outlet) {
		return outlet.activatedRouteData['page'] || 'start';
	}
}
