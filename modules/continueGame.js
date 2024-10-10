import startGame from "./startGame.js";
import removeButtons from "./removeButtons.js";

export default function continueGame() {
    document.querySelector('.continuar').addEventListener('click', e => {
        removeButtons()
        startGame();
    })
}