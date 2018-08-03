import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// containers
import * as fromContainers from './containers';


// routes
export const ROUTES: Routes = [
	{
		path: '',
		component: fromContainers.SecondComponent,
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES)
	],
	declarations: [...fromContainers.containers],
	exports: [...fromContainers.containers],
})
export class SecondModule {
}
