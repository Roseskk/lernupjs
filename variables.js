import {changeHp, elHp, renderHp} from "./service.js";

export const button = document.querySelector('.button');
export const root = document.querySelector('.arenas');
export const form = document.querySelector('.control');

export const reload = document.getElementById('reload');

export const HIT = {
    head: 30,
    body: 25,
    foot: 20
};

export const ATTACK = ['head', 'body', 'foot'];


export const player1 = {
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

export const player2 = {
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