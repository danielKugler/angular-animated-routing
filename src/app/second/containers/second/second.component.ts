import { Component, HostBinding } from '@angular/core';
import { SecondAnimation } from '../../../animations';

@Component({
	selector: 'app-start',
	template: `<h1>Second Component</h1>`,
	styleUrls: ['./second.component.scss'],
	animations: [SecondAnimation]
})
export class SecondComponent {
	@HostBinding('@secondAnimation') animation;
}
