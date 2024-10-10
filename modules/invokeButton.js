export default function invokeButton(name) {
    const divBtnGroup = document.querySelector('.buttons-group');
    const btn = document.createElement('button');
    btn.innerText = name;
    btn.classList.add(name.toLowerCase());
    divBtnGroup.appendChild(btn);
}