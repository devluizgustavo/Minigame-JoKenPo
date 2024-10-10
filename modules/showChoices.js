import invokeText from './invokeText.js';
import invokeButton from './invokeButton.js';

export default function showChoices() {
    invokeText('<br>Escolha uma das <b>opções.</b>');
    invokeButton('Pedra');
    invokeButton('Papel');
    invokeButton('Tesoura');
}