import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ListService } from '../list.service';
import { Contact } from '../contact';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

	private id: number;
	private subscription: Subscription;
	private contact: Contact = {};

	constructor(private activateRoute: ActivatedRoute, private items: ListService) {
		this.subscription = activateRoute.params.subscribe(params => {
			this.contact = items.finById(params['id']);
		});

	}

	ngOnInit() {
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
