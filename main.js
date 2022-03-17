let button = document.querySelector('.button');
let root = document.querySelector('.arenas')


const player1 = {
    player : 1,
    name : 'Scorpion',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon : ['ak-47','m4a1','mp5','knife'],
    attack : ()=> { console.log( this.name + 'Fight...') }
}

const player2 = {
    player : 2,
    name : 'Kitana',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon : ['ak-47','m4a1','mp5','knife'],
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

function changeHp(player) {
    let life = document.querySelector('.player' + player.player + ' '+  '.life')
    player.hp = player.hp - Math.floor(Math.random() * 30)
    life.innerHTML = player.hp
    if (player.hp <=0) {
        player.hp = 0;
        console.log('asd')
        button.disabled = true;
        if (player1.hp <= 0 && player2.hp > 0) {
            let winner = document.createElement('div')
            winner.innerHTML = ' PLAYER 1 WIN'
            winner.style.color = 'red'
            winner.style.position = 'absolute'
            root.appendChild(winner);
        } else if (player2.hp <= 0 && player1.hp >0) {
            let winner = document.createElement('div')
            winner.innerHTML = ' PLAYER 2 WIN'
            winner.style.color = 'red'
            winner.style.position = 'absolute'
            root.appendChild(winner);
        }
    }
    life.style.width = player.hp
}

document.addEventListener('click', function (){
    changeHp(player1);
    changeHp(player2);
})

createPlayer('player1',player1);
createPlayer('player2',player2);