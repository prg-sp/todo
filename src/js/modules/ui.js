export default class UI {
	constructor() {
		this.container = document.querySelector('.alert-container');
		this.form = document.querySelector('form');
		this.input = document.getElementById('task');
		this.ulList = document.querySelector('ul');
		this.fltTasks = document.querySelectorAll('.rm-task');
		this.button = document.querySelector('.button');
		this.filter = document.getElementById('filter');
	}

	addTaskToList(task) {
		const list = this.ulList;
		const li = document.createElement('li');
		li.className = 'list__item';
		li.innerHTML = `${task.input} <button class='rm-task'>X</button>`;
		li.setAttribute('data-id', task.id);
		list.appendChild(li);
	}

	clearInput() {
		this.input.value = '';
	}

	showAlert(msg, className) {
		const input = this.input.value;
		const div = document.createElement('div');
		div.classList.add('alert', 'faded-out', `${className}`);

		requestAnimationFrame(() => {
			div.classList.remove('faded-out');
		});

		div.innerHTML = `<b>${input}</b> ${msg}`;

		const container = this.container;
		container.appendChild(div);

		setTimeout(() => {
			this.hideAlert();
		}, 2000);
	}

	hideAlert() {
		document.querySelector('.alert').remove();
	}

	deleteTask(target) {
		target.parentElement.remove();
		console.log(target.parentNode.firstChild.data);
	}

	deleteAllTasks(element) {
		element.firstChild.remove();
	}

	filterTasks(target) {
		const text = target.value.toLowerCase();

		this.fltTasks.forEach((task) => {
			const item = task.parentElement.firstChild.textContent;

			if (item.toLowerCase().indexOf(text) != -1) {
				task.parentElement.style.display = 'flex';
			} else {
				task.parentElement.style.display = 'none';
			}
		});
	}
}
