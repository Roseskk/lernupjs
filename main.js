let button = document.querySelector('.button');
let root = document.querySelector('.arenas');
let form = document.querySelector('.control');
let reload = document.getElementById('reload');

const HIT = {
    head: 30,
    body: 25,
    foot: 20
};

const ATTACK = ['head', 'body', 'foot'];


const player1 = {
    player : 1,
    name : 'Scorpion',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon : ['ak-47','m4a1','mp5','knife'],
    dmg : [10,5,7,15],
    elHp,
    changeHp,
    renderHp,
}

const player2 = {
    player : 2,
    name : 'Kitana',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon : ['ak-47','m4a1','mp5','knife'],
    dmg : [5,24,3,2,10],
    elHp,
    changeHp,
    renderHp,
}


function createPlayer(player) {
    console.log(player)
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
root.appendChild(createPlayer(player1))
root.appendChild(createPlayer(player2))
function elHp() {
    return  document.querySelector('.player' + this.player + ' '+  '.life')
}


function changeHp(val) {
    // console.log(damage(this.dmg))
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
function damage() {
   return  Math.floor(Math.random() * 40);
}

function renderHp() {
    this.elHp().style.width = this.hp;
    this.elHp().innerHTML = this.hp ;


}
function enemyAttack() {
    const hit = ATTACK[damage(3) - 1];
    const defence = ATTACK[damage(3) - 1];

    return {
        value: damage(HIT[hit]),
        hit,
        defence
    };
}

function playerAttack() {
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

function result() {
     if (player1.hp <=0 || player2.hp <=0) {
         button.disabled = true
         createReloadButton()
     }

}


function createReloadButton() {
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


form.addEventListener('submit',function submit(e){
    e.preventDefault()
    const enemy = enemyAttack();
    const player = playerAttack();


    if (enemy.hit !== player.defence) {
        player1.changeHp(player.value)
        player1.renderHp();
    }

    if (player.hit !== enemy.defence) {
        player2.changeHp(enemy.value)
        player2.renderHp();
    }
    result()
})

// document.addEventListener('click', function (){
//     changeHp(player1,damage(player1.dmg));
//     changeHp(player2,damage(player2.dmg));
// })
