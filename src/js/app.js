import Task from './modules/task.js';
import Storage from './modules/storage.js';
import UI from './modules/ui.js';

let ui = new UI();

function init() {
	Storage.displayTasks();
	addListeners();
}

function addListeners() {
	ui.form.addEventListener('submit', addTask);
	ui.ulList.addEventListener('click', removeTask);
	ui.button.addEventListener('click', removeAllTasks);
	ui.filter.addEventListener('keyup', filterTasks);
}

const filterTasks = (e) => {
	let ui = new UI();
	ui.filterTasks(e.target);
};

const addTask = (e) => {
	//initiate UI
	let ui = new UI();
	let input = ui.input.value;

	//validation
	const re = /^\s*$/gi;
	const badInput = re.test(input);
	console.log(badInput);

	if (badInput) {
		console.log('nera inputo');
		ui.showAlert('<b>Please enter something</b>', 'error');
		ui.clearInput();
	} else {
		//new task
		let task = new Task(input);
		console.log(task);

		ui.addTaskToList(task);
		ui.showAlert(' was added!', 'success');
		ui.clearInput();

		//localstorage
		Storage.addTask(task);
	}

	e.preventDefault();
};

const removeTask = (e) => {
	const taskId = e.target.parentElement.getAttribute('data-id');
	const liElementVal = e.target.parentNode.firstChild.data;
	const question = `Are  you sure about: ${liElementVal}`;
	const ui = new UI();

	if (e.target.className === 'rm-task') {
		if (confirm(question) === true) {
			ui.deleteTask(e.target);
			ui.showAlert(`<b>${liElementVal}</b>, was removed!`, 'success');
			Storage.removeTask(taskId);
		}
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
			ui.showAlert('<b>All tasks are gone</b>', 'success');
		}
	} else {
		ui.showAlert('<b>Nothing to remove!</b>', 'error');
	}
};

document.addEventListener('DOMContentLoaded', init);

console.log(Storage.getTasks());
console.log(localStorage);
