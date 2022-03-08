class toDo {
	constructor() {
		this.form = document.querySelector('form');
		this.ul = document.querySelector('ul');
		this.input = document.getElementById('task');
		this.button = document.querySelector('button');
	}

	getInputs() {
		return this.input.value;
	}

	append() {
		const li = document.createElement('li');
		li.textContent = this.input.value;
		this.ul.append(li);
		this.input.value = '';
	}

	liRemove() {
		this.ul.firstChild.remove();
	}

	eventas(funkas) {
		this.form.addEventListener('submit', funkas);
	}

	rmEvent(funkas) {
		this.button.addEventListener('click', funkas);
	}
}

let taskas = new toDo();

taskas.eventas((e) => {
	e.preventDefault();

	taskas.append();
});

taskas.rmEvent(() => {
	console.log('kkk');
	taskas.liRemove();
});
