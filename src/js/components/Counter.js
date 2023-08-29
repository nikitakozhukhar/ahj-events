export default class Counter {
  constructor() {
    // if (typeof elem === 'string') {
    //   element = document.querySelector(element)
    // }
    // this.element = element;
  }

  getKill() {
    // return checkElement()
    let killCount = document.querySelector('.kill').textContent++;
    // killCount += 1;
    return killCount
  }

  getMiss() {
    let missCount = document.querySelector('.miss').textContent++;

    // missCount += 1;
    return missCount
  }

  logic() {
    const holes = document.querySelectorAll('.hole');
    holes.forEach(hole => {
      hole.addEventListener('click', e => {
        const goblin = e.target.classList.contains('hole_has-goblin');

        if (goblin) {
          this.getKill();
          // checkWinner()
        } else {
          this.getMiss();
        }
        checkWinner()
        // debugger;
      })
      
    })

    let checkWinner = () => {
      const kill = document.querySelector('.kill').textContent;
      const miss = document.querySelector('.miss').textContent;
      if (kill == 5) {
        alert('Player win')
      }
      if (miss == 5) {
        alert('Goblin win')
      }
    }
  }

  
}

const board = document.querySelector('.board');
const holes = board.querySelector('.hole');

board.addEventListener('click', e => {
  console.log(e.target)
})
// console.log(board);

// console.log(holes)