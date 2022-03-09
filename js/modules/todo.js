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

	liValue(value) {
		return `<li><input readonly="true" value="${value}"><div class="btn-wrapper"><button class='edit'>edit</button><button class='rm'>delete</button></div></li>`;
	}

	liAppend() {
		if (!this.ul.firstChild) this.ul.innerHTML = '';

		let li = this.liValue(this.input.value);
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
