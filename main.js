import {ATTACK, form, HIT, player1, player2, root} from "./variables.js";


import {logs} from "./logs.js";
import {createPlayer, enemyAttack, playerAttack, result} from "./service.js";


root.appendChild(createPlayer(player1))
root.appendChild(createPlayer(player2))





logs('start', player1, player2);


form.addEventListener('submit',function submit(e){
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
    result()
})

