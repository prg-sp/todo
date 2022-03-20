export default class UI {
	constructor() {
		this.container = document.querySelector('.small-container');
		this.form = document.querySelector('form');
		this.input = document.getElementById('task');
		this.ulList = document.querySelector('ul');
	}

	addTaskToList(task) {
		const list = this.ulList;
		const li = document.createElement('li');
		li.innerHTML = `${task.input} <button class='rm-task'>x</button>`;
		li.setAttribute('data-id', task.id);
		// console.log(`xx: ${task.input}`);
		list.appendChild(li);
	}

	clearInput() {
		this.input.value = '';
	}

	showAlert(msg, className) {
		const input = this.input.value;
		const div = document.createElement('div');
		div.className = `alert ${className}`;
		const text = document.createTextNode(`${msg} ${input}`);
		div.appendChild(text);

		const container = this.container;
		const form = this.form;
		container.insertBefore(div, form);

		setTimeout(() => {
			this.hideAlert();
		}, 3000);
	}

	hideAlert() {
		document.querySelector('.alert').remove();
	}

	deleteTask(target, className) {
		if (target.classList.contains(className));
		target.parentNode.remove();
	}

	deleteAllTasks(element) {
		element.firstChild.remove();
	}
}
