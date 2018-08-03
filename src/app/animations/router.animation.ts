import { trigger, query, transition, animateChild, sequence } from '@angular/animations';

export const RouterAnimation = trigger('routerAnimation', [
	transition('* => *', [
		sequence([
			query(':leave', [
				animateChild({delay: '400ms'})
			], {optional: true}),
			query(':enter', [
				animateChild({delay: '400ms'})
			], {optional: true})
		])
	])
]);
