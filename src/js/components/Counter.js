import Game from './Game';

let game = new Game(1);

export default class Counter {
  constructor() {
  }

  getKill() {
    return document.querySelector('.kill').textContent++;
  }
  getMiss() {
    setInterval(() => {
      document.querySelector('.miss').textContent++
    }, 1000);
  }

  logic() {
    const board = document.querySelector('.board');
    let missCount = 0;

    board.addEventListener('click', e => {
      const goblin = e.target.classList.contains('hole_has-goblin');
      if (goblin) {
        this.getKill();
        checkWinner();
      } else {
        missCount++;
          this.getMiss();
      }
      checkWinner();
    });
    let checkWinner = () => {
      const kill = document.querySelector('.kill').textContent;
      if (kill == 5) {
        alert('Player wins');
        this.resetCounts();
      }

      if (missCount == 5) {
        alert('Goblins win');
        this.resetCounts();
      }
    };

    setInterval(() => {
      game.startGame();
    }, 1000)

  }

  resetCounts() {
    document.querySelector('.kill').textContent = 0;
    document.querySelector('.miss').textContent = 0;
    missCount = 0;
  }
}