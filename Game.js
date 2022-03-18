import {ATTACK, button, HIT, player1, player2, root} from "./variables.js";
import {createReloadButton} from "./render.js";
import {logs} from "./logs.js";
import {enemyAttack, playerAttack, random, result} from "./service.js";
import {createPlayer} from "./Player.js";

export default class Game {
    constructor() {
        this.arenas = document.querySelector('.arenas');
        this.form = document.querySelector('.control');
    }

    result = () => {
        if (player1.hp <= 0 || player2.hp <= 0) {
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



    enemyAttack = () => {
        const hit = ATTACK[random(3) - 1];
        const defence = ATTACK[random(3) - 1];

        return {
            value: random(HIT[hit]),
            hit,
            defence,
        };
    }

    playerAttack = () => {
        const attack = {};

        for (let item of this.form) {
            if (item.checked && item.name === 'hit') {
                attack.value = random(HIT[item.value]);
                attack.hit = item.value;
            }

            if (item.checked && item.name === 'defence') {
                attack.defence = item.value;
            }

            item.checked = false;
        }

        return attack;
    }

    createReloadButton=()=> {
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

    addPlayers = () => {
        this.arenas.appendChild(createPlayer(player1));
        this.arenas.appendChild(createPlayer(player2));
    }

    mainForm = () => {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            const enemy = enemyAttack();
            const player = playerAttack();

            let dmg = Math.floor(Math.random()  * 10)

            if (enemy.hit !== player.defence) {
                player1.changeHp(player.value)
                player1.renderHp();
                logs('hit', player2, player1, dmg);
            }

            if (player.hit !== enemy.defence) {
                player2.changeHp(enemy.value)
                player2.renderHp();
                logs('defence', player1, player2, dmg);
            }
            this.result()
        });
    }

    start = () => {
        this.addPlayers();
        this.mainForm();
        logs('start', player1, player2);
    }
}