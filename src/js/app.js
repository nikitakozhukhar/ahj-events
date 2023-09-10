import Game from "./components/Game";

import Counter from "./components/Counter";

const startGame = new Game(1);

const counter = new Counter('.count-container');

counter.logic();