import { animate, style, transition, trigger } from '@angular/animations';

export const SecondAnimation = trigger('secondAnimation', [
	transition(':enter', [
		style({
			opacity: 0,
			transform: 'translateY(100%)'
		}),
		animate('400ms ease-in-out', style({
			opacity: 1,
			transform: 'translateY(0)'
		}))
	]),

	transition(':leave', [
		style({
			opacity: 1,
			transform: 'translateY(0)'
		}),
		animate('400ms ease-in-out', style({
			opacity: 0,
			transform: 'translateY(100%)'
		}))
	])
]);
