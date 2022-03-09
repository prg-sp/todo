import todo from './modules/todo.js';
import atmintis from './modules/storage.js';

const APP = (function () {
	let task = new todo();
	// let atmintis = new atmintis();

	//prideda task
	task.submitInputEvent((e) => {
		e.preventDefault();

		task.liAppend();
	});

	//pasalina visus task
	task.rmAllEvent(() => {
		task.liRemoveAll();
		console.log('removed all li');
	});
})();

// console.log(task.data);
// console.log(task.data[0]);
console.log(localStorage);
console.log(localStorage.items);
