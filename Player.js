class Player {
    constructor(props) {
        this.player = props.player;
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
    }


    elHp = () => {
        return document.querySelector(`.player${this.player} .life`);
    }

    changeHP = (val) => {
        this.hp = this.hp - val

        if (this.hp <= 0) {
            this.hp = 0 ;
        }
    }

    renderHP = () => {
        this.elHp().style.width = this.hp;
        this.elHp().innerHTML = this.hp ;
    }
}

export const player1 = new Player({
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
});

export const player2 = new Player({
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
});

export  const createPlayer = (player) => {

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
