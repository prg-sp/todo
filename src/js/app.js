import Task from './modules/task.js';
import Storage from './modules/storage.js';
import UI from './modules/ui.js';

function init() {
	Storage.displayTasks();
	addListeners();
}

function addListeners() {
	const form = document.querySelector('form');
	form.addEventListener('submit', addTask);

	const list = document.querySelector('ul');
	list.addEventListener('click', removeTask);

	const button = document.querySelector('.button');
	button.addEventListener('click', removeAllTasks);
}

const addTask = (e) => {
	//initiate UI
	let ui = new UI();
	let input = ui.input.value;

	//new task
	let task = new Task(input);
	console.log(task);

	//localstorage
	Storage.addTask(task);

	//validation
	const re = /^\s*$/gi;
	const rezas = re.test(input);

	if (rezas) {
		ui.showAlert('Please enter something', 'error');
	} else {
		ui.addTaskToList(task);
		ui.showAlert('All good for:', 'success');
		ui.clearInput();
	}

	e.preventDefault();
};

const removeTask = (e) => {
	const liElementVal = e.target.parentNode.firstChild.textContent;
	const question = `Are  you sure about: ${liElementVal}`;
	const taskId = e.target.parentElement.getAttribute('data-id');
	const ui = new UI();

	if (confirm(question) === true) {
		ui.deleteTask(e.target, '.rm-task');
		ui.showAlert(`Task: ${liElementVal} was removed!`, 'success');
		Storage.removeTask(taskId);
	}
};

const removeAllTasks = () => {
	const ui = new UI();
	const list = ui.ulList;

	if (list.firstChild) {
		if (confirm('Remove all?')) {
			while (list.firstChild) {
				ui.deleteAllTasks(list);
				Storage.removeAllTasks();
			}

			ui.showAlert('All tasks are gone', 'success');
		}
	}
};

document.addEventListener('DOMContentLoaded', init);

console.log(Storage.getTasks());
console.log(localStorage);
