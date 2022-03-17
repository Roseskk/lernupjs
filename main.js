
const player1 = {
    name : 'Scorpion',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon : ['ak-47','m4a1','mp5','knife'],
    attack : ()=> { console.log( this.name + 'Fight...') }
}

const player2 = {
    name : 'Kitana',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon : ['ak-47','m4a1','mp5','knife'],
    attack : ()=> { console.log( this.name + 'Fight...') }
}

function createPlayer(player,name1,hp,image) {
    let player1 = document.createElement('div');
    player1.classList.add(player)

    let progressBar = document.createElement('div');
    progressBar.className = 'progressbar';

    let life = document.createElement('div');
    life.className = 'life';
    life.innerHTML = hp;
    life.style.width = '100%';

    let name = document.createElement('div');
    name.className = 'name';
    name.innerHTML = name1;

    let character = document.createElement('div');
    character.className = 'character';

    let img = document.createElement('img');
    img.src = image;

    let root = document.querySelector('.arenas')
    root.appendChild(player1);

    let $player1 = document.querySelector(`${'.'+player}`);

    $player1.appendChild(progressBar);
    $player1.appendChild(character);

    progressBar.appendChild(life);
    progressBar.appendChild(name);

    character.appendChild(img)
}

createPlayer('player1','Scorpion','80','http://reactmarathon-api.herokuapp.com/assets/scorpion.gif');
createPlayer('player2','Kitana','100','http://reactmarathon-api.herokuapp.com/assets/kitana.gif');