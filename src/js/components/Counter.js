export default class Counter {
  constructor(){
  }

  getKill() {
    return document.querySelector('.kill').textContent++;
  }
  getMiss() {
    let miss = setInterval(() => {
      document.querySelector('.miss').textContent++
    }, 1000);
      // clearInterval(miss)
    // return 
  }

  logic() {
    const board = document.querySelector('.board');
    board.addEventListener('click', e => {

      const goblin = e.target.classList.contains('hole_has-goblin');
        if (goblin) {
          this.getKill();
        } else (
          // setInterval(() => {
          //   document.querySelector('.miss').textContent++
          // }, 1000)
         this.getMiss()
        )
      checkWinner()
    })

    let checkWinner = () => {
      const kill = document.querySelector('.kill').textContent;
      const miss = document.querySelector('.miss').textContent;
      if (kill == 5) {
        alert('Player\' win');
        document.querySelector('.kill').textContent = 0;
        document.querySelector('.miss').textContent = 0;
      }
      if (miss == 5) {
        alert('Goblin\'s win');
        document.querySelector('.kill').textContent = 0;
        document.querySelector('.miss').textContent = 0;
      }
    }
  }
}