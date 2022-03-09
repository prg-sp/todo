import todo from './todo.js';

export default class storage extends todo {
	constructor() {
		super();
		this.itemsArray = localStorage.getItem('items')
			? JSON.parse(localStorage.getItem('items'))
			: [];

		localStorage.setItem('items', JSON.stringify(this.itemsArray));
		this.data = JSON.parse(localStorage.getItem('items'));

		console.log(typeof this.data);

		this.shoAllData();
	}

	addToStorage() {
		if (this.input.value !== '') this.itemsArray.push(this.input.value);
		localStorage.setItem('items', JSON.stringify(this.itemsArray));
		this.data = JSON.parse(localStorage.getItem('items'));

		console.log(`prideijas: ${this.itemsArray}`);
		console.log(`pridiejimas storage: ${localStorage.items}`);
	}

	removeAllStorage() {
		localStorage.clear();
	}

	shoAllData() {
		this.data.forEach((item) => {
			if (!this.ul.firstChild) this.ul.innerHTML = '';
			let li = `<li class="">${item}<button>edit</button><button class='rm'>delete</button></li>`;
			this.ul.innerHTML += li;

			this.input.value = '';
		});
	}

	vienaIsAmintIstrina() {
		console.log(this.itemsArray[index]);
		this.itemsArray.splice(index, 1);
		console.log('atemiau viena: ' + this.itemsArray);

		localStorage.setItem('items', JSON.stringify(this.itemsArray));
		this.data = JSON.parse(localStorage.getItem('items'));
		console.log('o ka sako atmintis?: ' + localStorage.items);
		// this.dataShow();
	}
}
