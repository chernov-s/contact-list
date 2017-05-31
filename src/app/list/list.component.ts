import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Contact } from '../contact';


let hasMatch = (query: string, template: string) => {
	let hlen:number = template.length;
	let nlen:number = query.length;
	let light: number[] = [];
	if (nlen > hlen) {
		return false;
	}
	if (nlen === hlen) {
		return query === template;
	}
	outer:
		for (let i = 0, j = 0; i < nlen; i++) {
			let nch = query.charCodeAt(i);
			while (j < hlen) {
				if (template.charCodeAt(j++) === nch) {
					light.push(j);
					continue outer;
				}
			}
			return false;
		}
	return light;
}

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	input: Contact;

	query: string = '';

	constructor(private items: ListService) {
		this.input = {};
	}

	ngOnInit() { }

	getItems() {
		return this.query.length > 0 ? this.filter() : this.items.values;
	}

	addItem() {
		this.items.add(this.input);
		this.input.name = '';
		this.input.phone = '';
	}

	removeItem(index: number) {
		this.items.removeContact(index);
	}

	filter() {
		let queryLower: string = this.query.toLowerCase();
		return this.items.values.filter((item) => {
			return hasMatch(queryLower, item.name.toLowerCase()) || hasMatch(queryLower, item.phone.toLowerCase());
		});
	}
}
