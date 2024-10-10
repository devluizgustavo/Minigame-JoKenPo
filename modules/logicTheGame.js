import invokeText from "./invokeText.js";

export default function logicTheGame(escolhaJogador, escolhaCPU) {
    if (escolhaJogador === escolhaCPU) {
        invokeText(`Essa rodada deu <b>empate.</b><br>
                    <br><br>Jogador: <b>${escolhaJogador}</b> | CPU: <b>${escolhaCPU}</b>`)
        return 0;
    }

    else if (
        (escolhaJogador === 'Pedra' && escolhaCPU === 'Tesoura') ||
        (escolhaJogador === 'Tesoura' && escolhaCPU === 'Papel') ||
        (escolhaJogador === 'Papel' && escolhaCPU === 'Pedra')
    ) {
        invokeText(`Você venceu essa <b>rodada.</b><br>
                    <br><br>Jogador: <b>${escolhaJogador}</b> | CPU: <b>${escolhaCPU}</b> `)
        return true;
    } else {
        invokeText(`Você perdeu essa <b>rodada<b/><br>
                    <br><br>Jogador: <b>${escolhaJogador}</b> | CPU: <b>${escolhaCPU}</b>`)
        return false;
    }
}