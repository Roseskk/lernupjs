let button = document.querySelector('.button');
let root = document.querySelector('.arenas');
let reload = document.getElementById('reload');


const player1 = {
    player : 1,
    name : 'Scorpion',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon : ['ak-47','m4a1','mp5','knife'],
    dmg : [10,5,7,15],
    attack : ()=> { console.log( this.name + 'Fight...') }
}

const player2 = {
    player : 2,
    name : 'Kitana',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon : ['ak-47','m4a1','mp5','knife'],
    dmg : [5,24,3,2,10],
    attack : ()=> { console.log( this.name + 'Fight...') }
}

function createPlayer(playerClass,player) {
    let player1 = document.createElement('div');
    player1.classList.add(playerClass)

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

    let $player1 = document.querySelector(`${'.'+playerClass}`);

    $player1.appendChild(progressBar);
    $player1.appendChild(character);

    progressBar.appendChild(life);
    progressBar.appendChild(name);

    character.appendChild(img)
}

function changeHp(player,dmg) {

    player.hp = player.hp - dmg

    if (player.hp <=0) {
        player.hp = 0;
        button.disabled = true;
        if (player1.hp <= 0 && player2.hp > 0) {
            let winner = document.createElement('div')
            winner.innerHTML = ' PLAYER 1 WIN'
            winner.style.color = 'red'
            winner.style.position = 'absolute'
            root.appendChild(winner);
            createReloadButton()

        } else if (player2.hp <= 0 && player1.hp >0) {
            let winner = document.createElement('div')
            winner.innerHTML = ' PLAYER 2 WIN'
            winner.style.color = 'red'
            winner.style.position = 'absolute'
            root.appendChild(winner);
            createReloadButton()
        }
    }
    renderHp(player)
}
function damage(dmg) {
   return  dmg[Math.floor(Math.random()*dmg.length)];

}

function elHp(player) {
    return  document.querySelector('.player' + player.player + ' '+  '.life')
}

function renderHp(player) {
    elHp(player).style.width = player.hp
    elHp(player).innerHTML = player.hp

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



document.addEventListener('click', function (){
    changeHp(player1,damage(player1.dmg));
    changeHp(player2,damage(player2.dmg));
})

createPlayer('player1',player1);
createPlayer('player2',player2);