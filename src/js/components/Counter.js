import Game from './Game';

const game = new Game(1);
const miss = document.querySelector('.miss');
const kill = document.querySelector('.kill');

export default class Counter {
  constructor() {
  }

  getKill() {
    return kill.textContent++;
  }
  getMiss() {
    return miss.textContent++
  }


  logic() {
    const board = document.querySelector('.board');

    board.addEventListener('click', e => {
      const goblin = e.target.classList.contains('hole_has-goblin');
      this.checkWinner();

      if (goblin) {
        this.getKill();
      } else {
        this.getMiss();
      }
    });

    setInterval(() => {
      game.changeHole();
    }, 1000)
  }

  checkWinner () {
    if (kill.textContent == 5) {
      alert('Player wins');
      this.resetCounts();
    }
    if (miss.textContent == 5) {
      alert('Goblins win');
      this.resetCounts();
    }
  };

  resetCounts() {
    kill.textContent = 0;
    miss.textContent = 0;
  }
}