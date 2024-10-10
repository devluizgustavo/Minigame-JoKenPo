export default function invokeText(msg) {
    const p = document.querySelector('.text');
    p.innerHTML = '';
    p.innerHTML = msg;
}