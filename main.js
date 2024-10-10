import removeButtons from "./modules/removeButtons.js";
import startGame from './modules/startGame.js';

document.querySelector('#btnPlay').addEventListener('click', e => {
    removeButtons();
    startGame();
});
