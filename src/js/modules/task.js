export default class Task {
	constructor(input) {
		this.input = input;
		this.id = this.randNum();
	}

	randNum() {
		return Math.floor(Math.random() * 200);
	}
}
