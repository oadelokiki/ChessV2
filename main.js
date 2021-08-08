import {piece} from './piece.js';

var boardindex = new Array(8);

for(var i =0; i <8; i++){
    boardindex[i] = new Array(8);
}

var dude = new piece(3,4,'black', 'knight', 'exampleimg.jpeg');
console.log(dude.x);


var howmany = new piece(30, 32, 'black', 'redd', 'redds');

function makeboard(x){
    x +=2;
    console.log(howmany.color);
    console.log(x);

}