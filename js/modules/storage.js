import todo from './todo.js';

export default class storage extends todo {
	constructor() {
		super();

		this.itemsArray = localStorage.getItem('items')
			? JSON.parse(localStorage.getItem('items'))
			: [];

		localStorage.setItem('items', JSON.stringify(this.itemsArray));
		this.data = JSON.parse(localStorage.getItem('items'));

		this.showAllData();
	}

	addToStorage() {
		this.itemsArray.push(this.input.value);
		localStorage.setItem('items', JSON.stringify(this.itemsArray));
		this.data = JSON.parse(localStorage.getItem('items'));

		console.log(`i areju: ${this.itemsArray}`);
		console.log(`i storage: ${localStorage.items}`);
		location.reload(true);
	}

	removeAllStorage() {
		localStorage.clear();
		location.reload(true);
		console.log(localStorage);
	}

	showAllData() {
		this.data.forEach((item) => {
			if (!this.ul.firstChild) this.ul.innerHTML = '';
			let li = this.liValue(item);
			this.ul.innerHTML += li;
		});
	}

	vienaIsAmintIstrina(index) {
		console.log('atemiau: ' + this.itemsArray.splice(index, 1));
		console.log('array liko: ' + this.itemsArray);
		this.itemsArray.slice(index, 1);

		localStorage.setItem('items', JSON.stringify(this.itemsArray));
		console.log('storage?: ' + localStorage.items);
	}

	editintiStorageViena(index) {
		console.log('atmintis: ' + index);
		// this.itemsArray.slice(index,1);
		// localStorage.setItem('items', JSON.stringify(this.itemsArray));
	}
}
