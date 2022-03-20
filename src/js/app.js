import Task from './modules/task.js';
import { storage } from './modules/storage.js';
import UI from './modules/ui.js';

function init() {
	// let i = new UI();
	// i.showAlert('nzn', 'success');
	addListeners();
}

// Task constructor
// -- task

// ui constructor
// -- delete task
// -- add task
// -- show task
// -- delte all
// -- show messages success eror

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
	console.log(ui);

	//get form value
	let input = ui.input.value;

	//new task
	let task = new Task(input);

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
	const ui = new UI();

	if (confirm(question) === true) {
		ui.deleteTask(e.target, '.rm-task');
		ui.showAlert('This task was deleted', 'success');
	}
};

const removeAllTasks = () => {
	const ui = new UI();
	const list = ui.ulList;

	if (list.firstChild) {
		if (confirm('Remove all?')) {
			while (list.firstChild) {
				ui.deleteAllTasks(list);
			}
			ui.showAlert('All tasks are gone', 'success');
		}
	}
};

// storage.addToStorage();

//pasalina visus task
// task.rmAllEvent(() => {
// 	storage.removeAllStorage();
// 	task.liRemoveAll();
// 	console.log('removed all li');
// });

//istrina po viena
//let visi = document.querySelectorAll('.delete');
//visi.forEach((x, index) => {
//	x.addEventListener('click', () => {
//		//is front endo
//		x.parentNode.parentNode.remove();

//		//is atminties
//		storage.vienaIsAmintIstrina(index);
//	});
//});

//editinimas
// let editas = document.querySelectorAll('.edit');
// editas.forEach((input) => {
// 	input.addEventListener('click', () => {
// 		console.log(input.parentNode.parentNode.firstChild);
// 		input.parentNode.parentNode.firstChild.removeAttribute('readonly');
// 		input.parentNode.parentNode.firstChild.classList.add('has-error');
// 		input.parentNode.parentNode.firstChild.focus();
// 	});
// });

// editas.forEach((input, index) => {
// 	input.parentNode.parentNode.firstChild.addEventListener('keyup', (event) => {
// 		if (event.code == 'Enter') {
// 			input.parentNode.parentNode.firstChild.classList.remove('has-error');
// 			input.parentNode.parentNode.firstChild.setAttribute('readonly', 'true');
// 			let newVal = input.parentNode.parentNode.firstChild.value;
// 			storage.editintiStorageViena(index, newVal);
// 			task.input.focus();
// 		}
// 	});
// });

document.addEventListener('DOMContentLoaded', init);

// console.log(storage.data);
// console.log(localStorage);
