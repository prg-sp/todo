export default class toDo {
	constructor() {
		this.form = document.querySelector('form');
		this.ul = document.querySelector('ul');
		this.input = document.getElementById('task');
		this.button = document.querySelector('.button');
	}

	getInput() {
		return this.input.value;
	}

	irasuTikrinimas() {
		if (this.visi.length == 0) return console.log('nera nieko');
		console.log('yra');
	}

	getNodeList(cls) {
		return document.querySelectorAll(cls);
	}

	liAppend() {
		if (!this.ul.firstChild) this.ul.innerHTML = '';

		let li = `<li>${this.getInput()}`;
		this.ul.innerHTML += li;

		this.input.value = '';
	}

	liRemoveAll() {
		while (this.ul.firstChild) {
			this.ul.firstChild.remove();
		}
	}

	submitInputEvent(funkas) {
		this.form.addEventListener('submit', funkas);
	}

	rmAllEvent(funkas) {
		this.button.addEventListener('click', funkas);
	}
}
