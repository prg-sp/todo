import ToDo from './modules/todo.js';
import Memo from './modules/storage.js';

const APP = (function () {
	let task = new ToDo();
	let locStor = new Memo();

	//prideda task
	task.submitInputEvent((e) => {
		e.preventDefault();

		locStor.addToStorage();
		task.liAppend();
	});

	//pasalina visus task
	task.rmAllEvent(() => {
		locStor.removeAllStorage();
		task.liRemoveAll();
		console.log('removed all li');
	});

	//istrina po viena
	let visi = document.querySelectorAll('.delete');
	visi.forEach((x, index) => {
		x.addEventListener('click', () => {
			//is front endo
			x.parentNode.parentNode.remove();

			//is atminties
			locStor.vienaIsAmintIstrina(index);
		});
	});

	//editinimas
	let editas = document.querySelectorAll('.edit');
	editas.forEach((input) => {
		input.addEventListener('click', () => {
			console.log(input.parentNode.parentNode.firstChild);
			input.parentNode.parentNode.firstChild.removeAttribute('readonly');
			input.parentNode.parentNode.firstChild.classList.add('has-error');
			input.parentNode.parentNode.firstChild.focus();
		});
	});

	editas.forEach((input, index) => {
		input.parentNode.parentNode.firstChild.addEventListener(
			'keyup',
			(event) => {
				if (event.code == 'Enter') {
					input.parentNode.parentNode.firstChild.classList.remove('has-error');
					input.parentNode.parentNode.firstChild.setAttribute(
						'readonly',
						'true',
					);
					let newVal = input.parentNode.parentNode.firstChild.value;
					locStor.editintiStorageViena(index, newVal);
					task.input.focus();
				}
			},
		);
	});

	return { locStor };
})();

console.log(APP.locStor.data);
console.log(localStorage);
