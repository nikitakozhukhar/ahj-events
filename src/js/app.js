import Game from "./components/Game";

import Counter from "./components/Counter";

const startGame = new Game(1);

startGame.startGame();

const counter = new Counter('.count-container');

// const container = counter.checkElement();

// console.log(counter.getKill());
// console.log(counter.getMiss());
// console.log(counter.getMiss());
console.log(counter.logic());