import { Injectable } from '@angular/core';
import { Contact } from './contact';

const LIST: string[] = ['Коля', 'Петя', 'Вася', 'Коля', 'Нина', 'Витя', 'Саша', 'Поля', 'Анастасия', 'Сергей', 'Андрей'];

let getRandomNum = (min: number, max: number) => {
	return ~~(Math.random() * (max - min) + min);
}
/**
 * @returns {string}
 */
let getRandPhone = () => {
	return '+7 (' + getRandomNum(908, 999) + ')' + getRandomNum(1000000, 9999999);
}

let randPerson = (count: number = 10) => {
	let items: Contact[] = [];
	while (count--) {
		items.push({
			id: count,
			phone: getRandPhone(),
			name: LIST[getRandomNum(0, LIST.length - 1)]
		});
	};

	return items;
};

@Injectable()
export class ListService {
	values: Contact[] = randPerson(5);
	id: number = 0;

	constructor() {
		this.id = this.values.length - 1;
	}

	add(item: Contact) {
		this.id++;
		this.values.unshift(Object.assign({
			id: this.id,
		}, item));

	}

	/**
	 * @param id
	 * @return Contact
	 */
	finById(id: number): Contact {
		let n: number = this.values.length
		while (n--) {
			if (this.values[n].id == id){
				return this.values[n];
			}
		}
		return {id: -2};
	}

	removeContact(id: number) {
		this.values.splice(this.finById(id).id, 1);
	}

}