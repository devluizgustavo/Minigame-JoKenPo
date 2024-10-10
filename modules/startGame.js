import showChoices from "./showChoices.js";
import invokeText from "./invokeText.js";
import logicTheGame from "./logicTheGame.js";
import randomChoiceCPU from './randomChoiceCPU.js';
import invokeButton from "./invokeButton.js";
import continueGame from './continueGame.js';
import endGame from './endGame.js';
import removeButtons from "./removeButtons.js";

const scorePlayer = document.querySelector('.placJog');
const scoreCpu = document.querySelector('.placCpu');

export default function startGame() {
    showChoices();
    const op = ['Tesoura', 'Papel', 'Pedra'];

    const handleChoice = (choice) => {
        invokeText('');

        const round = logicTheGame(choice, randomChoiceCPU())

        if (round) {
            scorePlayer.innerHTML++;
        } else if (!round) {
            scoreCpu.innerHTML++;
        } else {
            return;
        }

        removeButtons();

        invokeButton('Parar');
        invokeButton('Continuar');
        continueGame();
        endGame();
    }

    document.querySelector('.pedra').addEventListener('click', () => handleChoice(op[2]));
    document.querySelector('.papel').addEventListener('click', () => handleChoice(op[1]));
    document.querySelector('.tesoura').addEventListener('click', () => handleChoice(op[0]));
}