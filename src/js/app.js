import Game from "./components/Game";

import Counter from "./components/Counter";

const startGame = new Game(1);

startGame.startGame();

const conter = new Counter('.count-container');

const container = conter.checkElement();

console.log(container.children[1].classList)