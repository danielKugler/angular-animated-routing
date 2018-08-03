import { Component, HostBinding } from '@angular/core';
import { FirstAnimation } from '../../../animations';

@Component({
	selector: 'app-first',
	template: `<h1>First Component</h1>`,
	styleUrls: ['./first.component.scss'],
	animations: [FirstAnimation]
})
export class FirstComponent {
	@HostBinding('@firstAnimation') animation;
}
