import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {ContactComponent} from './contact/contact.component';
import {Page404Component} from './page404/page404.component';
import { ListService } from './list.service';

export const ContactListRoute:Routes = [
	{ 	path: '',
		redirectTo: 'list',
		pathMatch: 'full'
	},
	{
		path: 'contact/:id',
		component: ContactComponent
	},
	{
		path: 'list',
		component: ListComponent
	},
	{
		path: "**",
		component: Page404Component
	}
];

@NgModule({
	declarations: [
		AppComponent,
		ListComponent,
		ContactComponent,
		Page404Component
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(ContactListRoute)
	],
	providers: [ListService],
	bootstrap: [AppComponent]
})

export class AppModule {
}
