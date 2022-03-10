import ToDo from './todo.js';

export default class Storage extends ToDo {
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
		location.reload(true);
	}

	removeAllStorage() {
		localStorage.clear();
		location.reload(true);
	}

	showAllData() {
		this.data.forEach((item) => {
			if (!this.ul.firstChild) this.ul.innerHTML = '';
			let li = this.liValue(item);
			this.ul.innerHTML += li;
		});
	}

	vienaIsAmintIstrina(index) {
		this.itemsArray.slice(index, 1);
		localStorage.setItem('items', JSON.stringify(this.itemsArray));
	}

	editintiStorageViena(index, item) {
		this.itemsArray[index] = item;
		localStorage.setItem('items', JSON.stringify(this.itemsArray));
	}
}
