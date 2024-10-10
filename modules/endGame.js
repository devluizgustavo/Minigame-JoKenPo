import removeButton from "./removeButtons.js";
import invokeButton from "./invokeButton.js";

const p = document.querySelector('.text');
const scorePlayer = document.querySelector('.placJog');
const scoreCpu = document.querySelector('.placCpu');

export default function endGame() {
    document.querySelector('.parar').addEventListener('click', e => {
        removeButton()
        if (scorePlayer.innerHTML === scoreCpu.innerHTML) {
            p.innerHTML = `O jogo terminou em <b>empate.</b>`;
        }
        else if (scorePlayer.innerHTML > scoreCpu.innerHTML) {
            p.innerHTML = `O jogo terminou. Meus parabéns, você <b>venceu.</b>`;
        }
        else {
            p.innerHTML = `O jogo terminou. Que pena, você <b>perdeu.</b>`;
        }

        invokeButton('Reiniciar');
        
        document.querySelector('.reiniciar').addEventListener('click', e => {
            document.location.reload();
        })
    })
}