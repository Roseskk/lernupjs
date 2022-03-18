import {root} from "./variables.js";

export function createReloadButton() {
    let reload = document.createElement('div')
    reload.classList.add('reloadWrap');
    let button = document.createElement('button')
    button.classList.add('button');
    button.innerHTML = 'RESTART';
    button.id = 'reload';
    reload.appendChild(button);
    root.appendChild(reload);
    reload.addEventListener('click', function  reloaded() {
        window.location.reload();
    })

}