import todo from './modules/todo.js';
import atmintis from './modules/storage.js';

const APP = (function () {
	let task = new todo();
	let locStor = new atmintis();

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
	let visi = document.querySelectorAll('.rm');
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
	editas.forEach((y, index) => {
		y.addEventListener('click', () => {
			locStor.editintiStorageViena(index);
			console.log('frontas: ' + index);
			console.log(y.parentNode.parentNode.firstChild);
			y.parentNode.parentNode.firstChild.removeAttribute('readonly');
			console.log(y.parentNode.parentNode.firstChild);
			y.parentNode.parentNode.firstChild.classList.add('has-error');
			y.parentNode.parentNode.firstChild.focus();
		});
	});

	editas.forEach((y, index) => {
		y.parentNode.parentNode.firstChild.addEventListener('keyup', (event) => {
			if (event.key == 'Enter') {
				y.parentNode.parentNode.firstChild.classList.remove('has-error');
				y.parentNode.parentNode.firstChild.setAttribute('readonly', 'true');
				task.input.focus();
			}
		});
	});

	return { locStor };
})();

console.log(APP.locStor.data);
console.log(localStorage);
