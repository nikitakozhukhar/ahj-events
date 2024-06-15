export default function cursor() {
  const cursorHummer = document.querySelector('.cursor-hummer');
  const board = document.querySelector('.board');
  let angle = 0;

  document.addEventListener('mousemove', e => {
    cursorHummer.style.left = `${e.pageX - 16}px`;
    cursorHummer.style.top = `${e.pageY - 16}px`;
    cursorHummer.style.display = 'block';
  })

  document.addEventListener('mousedown', () => {
    angle -= 45;
    cursorHummer.style.transform = `rotate(${angle}deg)`;
  })

  document.addEventListener('mouseup', () => {
    angle += 45;
    cursorHummer.style.transform = `rotate(${angle}deg)`;
  })

  board.classList.add('active');
}