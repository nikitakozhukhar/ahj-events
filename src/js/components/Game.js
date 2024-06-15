export default class Game {
  constructor(activeHole) {
    this.activeHole = activeHole;
  }

  getHole(index) {
    return document.getElementById(`hole${index}`);
  }

  deactivateHole(index) {
    this.getHole(index).className = 'hole';
  }

  activateHole(index) {
    this.getHole(index).className = 'hole hole_has-goblin';
  }

  changeHole() {
    this.deactivateHole(this.activeHole);
    this.activeHole = Math.floor(1 + Math.random() * 16);
    this.activateHole(this.activeHole);
  }
}
