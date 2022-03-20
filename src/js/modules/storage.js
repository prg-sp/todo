import UI from './ui.js';

export default class Storage {
	static getTasks() {
		let tasks;

		if (localStorage.getItem('tasks') === null) {
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem('tasks'));
		}

		return tasks;
	}

	static addTask(task) {
		const tasks = Storage.getTasks();
		tasks.push(task);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	static displayTasks() {
		const tasks = Storage.getTasks();
		tasks.forEach((task) => {
			let ui = new UI();
			ui.addTaskToList(task);
		});
	}

	static removeTask(id) {
		const tasks = Storage.getTasks();
		tasks.forEach((task, index) => {
			if (id == task.id) {
				console.log(`${id} : ${task.input}`);
				tasks.splice(index, 1);
			}

			localStorage.setItem('tasks', JSON.stringify(tasks));
		});
	}

	static removeAllTasks() {
		localStorage.clear();
	}
}
