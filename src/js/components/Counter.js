import Game from './Game';

let game = new Game(1);
let miss = document.querySelector('.miss');
let kill = document.querySelector('.kill');

export default class Counter {
  constructor() {
  }

  getKill() {
    return kill.textContent++;
  }
  getMiss() {
    const hasGoblin = document.querySelector('hole_has-goblin');

    if (!hasGoblin) {
      miss.textContent++
    } 
  }

  logic() {
    const board = document.querySelector('.board');
    
    setInterval(() => {
      this.getMiss();
      this.checkWinner();
    }, 1000);

    board.addEventListener('click', e => {
      const goblin = e.target.classList.contains('hole_has-goblin');
      if (goblin) {
        this.getKill();
        this.checkWinner();
      } else {
        miss.textContent++
      }
    });

    setInterval(() => {
      game.startGame();
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