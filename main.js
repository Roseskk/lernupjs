let button = document.querySelector('.button');
let root = document.querySelector('.arenas');
let form = document.querySelector('.control');
const $chat = document.querySelector('.chat');
let reload = document.getElementById('reload');

const LOGS = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца'
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал , и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.'
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};


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
const random = (min = 1, max = 20) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
};

const time = (time) => time < 10 ? `0${time}` : time;

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return  `${time(hours)}:${time(minutes)}:${time(seconds)}`;


};
const logs = (type, player1, player2, damage = 0) => {
    const text = type.includes('start', 'draw')
        ? LOGS[type]
        : LOGS[type][random(0, LOGS[type].length - 1)];

    const formattedDate = getTime();

    let console = '';

    switch (type) {
        case 'start':
            console = text
                .replace('[time]', formattedDate)
                .replace('[player1]', player1.name)
                .replace('[player2]', player2.name);
            break;
        case 'end':
            console = `${formattedDate} - ${text}`
                .replace('[playerWins]', player1.name)
                .replace('[playerLose]', player2.name);
            break;
        case 'hit':
            console = `${formattedDate} - ${text} - ${damage} [${player2.hp}/100]`
                .replace('[playerKick]', player1.name)
                .replace('[playerDefence]', player2.name);
            break;
        case 'defence':
            console = `${formattedDate} - ${text}`
                .replace('[playerDefence]', player1.name)
                .replace('[playerKick]', player2.name);
            break;
        default:
            console = text;
    }

    $chat.insertAdjacentHTML('afterbegin', `<p>${console}</p>`);
};
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

