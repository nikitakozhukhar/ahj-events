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
    
      let missTimeout = setInterval(() => {
        document.querySelector('.miss').textContent++;
        return missCount
      }, 1000);
      clearInterval(missTimeout);
    
    
    // let missCount = document.querySelector('.miss').textContent++;

    // missCount += 1;
    // return missCount
  }

  logic() {
    const holes = document.querySelectorAll('.hole');
    holes.forEach(hole => {
      hole.addEventListener('click', e => {
        const goblin = e.target.classList.contains('hole_has-goblin');

        if (goblin) {
          this.getKill();
          // checkWinner()
        } 
        if (!goblin) {
          let missCount = document.querySelector('.miss').textContent++;
          return missCount
          // this.getMiss();
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