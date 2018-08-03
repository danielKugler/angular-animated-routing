import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'first'
	},
	{
		path: 'first',
		loadChildren: './first/first.module#FirstModule',
		data: {page: 'first'}
	},
	{
		path: 'second',
		loadChildren: './second/second.module#SecondModule',
		data: {page: 'second'}
	},
	{
		path: '**',
		redirectTo: 'first'
	}
];
