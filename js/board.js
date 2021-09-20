import piece from "./piece.js";
import move from './move.js'

export var boardindex = new Array(8);
export var buttonindex = new Array(8);
export var imageindex = new Array(8);

for(var i =0; i <8; i++){
    boardindex[i] = new Array(8);
    imageindex[i] = new Array(8);
    buttonindex[i] = new Array(8);

    for(var j =0; j <8 ; j++){
        boardindex[i][j] = 0;
        imageindex[i][j] = 0;
        buttonindex[i][j] = 0;
    }

}

for(let i = 0; i< 8; i++){
    for(let j = 0; j < 8; j++){
        
        buttonindex[i][j] = document.createElement('button');
        
        buttonindex[i][j].onclick = function(){move(i, j)};
        
    }
}

boardindex[7][4] = new piece(7, 4, 'black', 'king', './images/king.png');
boardindex[7][3] =  new piece(7, 3, 'black', 'queen', './images/queen.png');
boardindex[7][0] =  new piece(7, 0, 'black', 'rook', './images/rook.png' );
boardindex[7][1] =  new piece(7, 1, 'black', 'knight', './images/knight.jpeg');
boardindex[7][2] =  new piece(7, 2, 'black', 'bishop', './images/bishop.png');
boardindex[7][5] =  new piece(7, 5, 'black', 'bishop', './images/bishop.png');
boardindex[7][6] =  new piece(7, 6, 'black', 'knight', './images/knight.jpeg');
boardindex[7][7] = new piece(7, 7, 'black', 'rook', './images/rook.png');

boardindex[6][0] =  new piece(6, 0, 'black', 'pawn', './images/pawn.png');
boardindex[6][1] =  new piece(6, 1, 'black', 'pawn', './images/pawn.png');
boardindex[6][2] =  new piece(6, 2, 'black', 'pawn', './images/pawn.png');
boardindex[6][3] =  new piece(6, 3, 'black', 'pawn', './images/pawn.png');
boardindex[6][4] =  new piece(6, 4, 'black', 'pawn', './images/pawn.png');
boardindex[6][5] =  new piece(6, 5, 'black', 'pawn', './images/pawn.png');
boardindex[6][6] =  new piece(6, 6, 'black', 'pawn','./images/pawn.png');
boardindex[6][7] =  new piece(6, 7, 'black', 'pawn', './images/pawn.png');




boardindex[0][4] =  new piece(0, 4, 'white', 'king', './images/whiteking.png')
boardindex[0][3] =  new piece(0, 3, 'white', 'queen', './images/whitequeen.png');
boardindex[0][0] =  new piece(0, 0, 'white', 'rook', './images/whiterook.png' );
boardindex[0][1] =  new piece(0, 1, 'white', 'knight', './images/whiteknight.png');
boardindex[0][2] =  new piece(0, 2, 'white', 'bishop', './images/whitebishop.png');
boardindex[0][5] =  new piece(0, 5, 'white', 'bishop', './images/whitebishop.png');
boardindex[0][6] =  new piece(0, 6, 'white', 'knight', './images/whiteknight.png');
boardindex[0][7] =  new piece(0, 7, 'white', 'rook', './images/whiterook.png');

boardindex[1][0] =  new piece(1, 0, 'white', 'pawn', './images/whitepawn.png');
boardindex[1][1] =  new piece(1, 1, 'white', 'pawn', './images/whitepawn.png');
boardindex[1][2] =  new piece(1, 2, 'white', 'pawn', './images/whitepawn.png');
boardindex[1][3] =  new piece(1, 3, 'white', 'pawn', './images/whitepawn.png');
boardindex[1][4] =  new piece(1, 4, 'white', 'pawn', './images/whitepawn.png');
boardindex[1][5] =  new piece(1, 5, 'white', 'pawn', './images/whitepawn.png');
boardindex[1][6] =  new piece(1, 6, 'white', 'pawn', './images/whitepawn.png');
boardindex[1][7] =  new piece(1, 7, 'white', 'pawn', './images/whitepawn.png');



imageindex[7][4] = document.createElement('img'); imageindex[7][4].src = './images/king.png';
imageindex[7][3] = document.createElement('img'); imageindex[7][3].src = './images/queen.png';
imageindex[7][0] = document.createElement('img'); imageindex[7][0].src = './images/rook.png';
imageindex[7][1] = document.createElement('img'); imageindex[7][1].src = './images/knight.png';
imageindex[7][2] = document.createElement('img'); imageindex[7][2].src = './images/bishop.png';
imageindex[7][5] = document.createElement('img'); imageindex[7][5].src = './images/bishop.png';
imageindex[7][6] = document.createElement('img'); imageindex[7][6].src = './images/knight.png';
imageindex[7][7] = document.createElement('img'); imageindex[7][7].src = './images/rook.png';

imageindex[6][0] = document.createElement('img'); imageindex[6][0].src = './images/pawn.png';
imageindex[6][1] = document.createElement('img'); imageindex[6][1].src = './images/pawn.png';
imageindex[6][2] = document.createElement('img'); imageindex[6][2].src = './images/pawn.png';
imageindex[6][3] = document.createElement('img'); imageindex[6][3].src = './images/pawn.png';
imageindex[6][4] = document.createElement('img'); imageindex[6][4].src = './images/pawn.png';
imageindex[6][5] = document.createElement('img'); imageindex[6][5].src = './images/pawn.png';
imageindex[6][6] = document.createElement('img'); imageindex[6][6].src = './images/pawn.png';
imageindex[6][7] = document.createElement('img'); imageindex[6][7].src = './images/pawn.png';



imageindex[0][4] = document.createElement('img'); imageindex[0][4].src = './images/whiteking.png';
imageindex[0][3] = document.createElement('img'); imageindex[0][3].src = './images/whitequeen.png';
imageindex[0][0] = document.createElement('img'); imageindex[0][0].src = './images/whiterook.png';
imageindex[0][1] = document.createElement('img'); imageindex[0][1].src = './images/whiteknight.png';
imageindex[0][2] = document.createElement('img'); imageindex[0][2].src = './images/whitebishop.png';
imageindex[0][5] = document.createElement('img'); imageindex[0][5].src = './images/whitebishop.png';
imageindex[0][6] = document.createElement('img'); imageindex[0][6].src = './images/whiteknight.png';
imageindex[0][7] = document.createElement('img'); imageindex[0][7].src = './images/whiterook.png';

imageindex[1][0] = document.createElement('img'); imageindex[1][0].src = './images/whitepawn.png';
imageindex[1][1] = document.createElement('img'); imageindex[1][1].src = './images/whitepawn.png';
imageindex[1][2] = document.createElement('img'); imageindex[1][2].src = './images/whitepawn.png';
imageindex[1][3] = document.createElement('img'); imageindex[1][3].src = './images/whitepawn.png';
imageindex[1][4] = document.createElement('img'); imageindex[1][4].src = './images/whitepawn.png';
imageindex[1][5] = document.createElement('img'); imageindex[1][5].src = './images/whitepawn.png';
imageindex[1][6] = document.createElement('img'); imageindex[1][6].src = './images/whitepawn.png';
imageindex[1][7] = document.createElement('img'); imageindex[1][7].src = './images/whitepawn.png';





