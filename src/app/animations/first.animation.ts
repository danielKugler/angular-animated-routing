import { animate, style, transition, trigger } from '@angular/animations';

export const FirstAnimation = trigger('firstAnimation', [
	transition(':enter', [
		style({
			opacity: 0,
			transform: 'translateX(100%)'
		}),
		animate('400ms ease-in-out', style({
			opacity: 1,
			transform: 'translateX(0)'
		}))
	]),

	transition(':leave', [
		style({
			opacity: 1,
			transform: 'translateX(0)'
		}),
		animate('400ms ease-in-out', style({
			opacity: 0,
			transform: 'translateX(100%)'
		}))
	])
]);
