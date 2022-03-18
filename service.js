import {logs} from "./logs.js";
import {createReloadButton} from "./render.js";
import {ATTACK, button, form, HIT, player1, player2} from "./variables.js";

export const random = (min = 1, max = 20) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
};

export  function createPlayer(player) {

    let player1 = document.createElement('div');
    player1.classList.add('player' + player.player)

    let progressBar = document.createElement('div');
    progressBar.className = 'progressbar';

    let life = document.createElement('div');
    life.className = 'life';
    life.innerHTML = player.hp;
    life.style.width = '100%';

    let name = document.createElement('div');
    name.className = 'name';
    name.innerHTML = player.name;

    let character = document.createElement('div');
    character.className = 'character';

    let img = document.createElement('img');
    img.src = player.img;

    let root = document.querySelector('.arenas')
    root.appendChild(player1);

    let $player1 = document.querySelector(`${'.player'+player.player}`);

    $player1.appendChild(progressBar);
    $player1.appendChild(character);

    progressBar.appendChild(life);
    progressBar.appendChild(name);

    character.appendChild(img)

    return player1;
}

export function elHp() {
    return  document.querySelector('.player' + this.player + ' '+  '.life')
}


export function changeHp(val) {
    this.hp = this.hp - val

    if (this.hp <= 0) {
        this.hp = 0 ;
    }

    // if (player.hp <=0) {
    //     player.hp = 0;
    //     button.disabled = true;
    //     if (player1.hp <= 0 && player2.hp > 0) {
    //         let winner = document.createElement('div')
    //         winner.innerHTML = ' PLAYER 1 WIN'
    //         winner.style.color = 'red'
    //         winner.style.position = 'absolute'
    //         root.appendChild(winner);
    //         createReloadButton()
    //
    //     } else if (player2.hp <= 0 && player1.hp >0) {
    //         let winner = document.createElement('div')
    //         winner.innerHTML = ' PLAYER 2 WIN'
    //         winner.style.color = 'red'
    //         winner.style.position = 'absolute'
    //         root.appendChild(winner);
    //         createReloadButton()
    //     }
    // }
}
export function damage() {
    return  Math.floor(Math.random() * 40);
}

export function renderHp() {
    this.elHp().style.width = this.hp;
    this.elHp().innerHTML = this.hp ;


}
export function enemyAttack() {
    const hit = ATTACK[damage(3) - 1];
    const defence = ATTACK[damage(3) - 1];

    return {
        value: damage(HIT[hit]),
        hit,
        defence
    };
}

export function playerAttack() {
    const attack = {};

    for (let item of form) {
        if (item.checked && item.name === 'hit') {
            attack.value = damage();
            attack.hit = item.value;
        }

        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }

        item.checked = false;
    }

    return attack;
}

export function result() {
    if (player1.hp <=0 || player2.hp <=0) {
        button.disabled = true
        createReloadButton()
    }
    if (player1.hp === 0 && player1.hp < player2.hp) {
        logs('end', player1, player2);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        logs('end', player1, player2);
    } else if (player1.hp === 0 && player2.hp === 0) {
        logs('draw');
    } else {
        console.log(new Error('Something went wrong!'));
    }

}