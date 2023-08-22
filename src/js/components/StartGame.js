export default class StartGame {
	constructor(activeHole) {
		activeHole = 1;
	}

	getHole(index) {
		document.getElementById(`${index}`)
	}

	deactivateHole(index) {
		this.getHole(index).className = 'hole'
	}

	activateHole(index) {
		this.getHole(index).className = 'hole hole_has-goblin'
	}

	 nextHole() {
		setTimeout(() => {
			this.deactivateHole(this.activeHole);
			activeHole = Math.floor(1 + Math.random() * 16);
			this.activateHole(this.activeHole);
			this.nextHole();
		  }, 1000)
	 } 

}