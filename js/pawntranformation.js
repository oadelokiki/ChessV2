import piece from "./piece.js";
import { boardindex, buttonindex, imageindex } from "./board.js";

var transform = 'hello'

export default function pawntranformation(h, l){
    transform = prompt("What type of piece would you like? Enter 'knight', 'queen', 'bishop', or 'rook'.","piece type");
    if(transform == "knight"){
        var holder = new piece(boardindex[h][l].x, boardindex[h][l].y, boardindex[h][l].color, 'knight')
        if(boardindex[h][l].color == 'white'){
            imageindex[h][l] = 0;
            imageindex[h][l] = document.createElement('img'); imageindex[h][l].src = './images/whiteknight.png';

        }
        else{
            imageindex[h][l] = 0;
            imageindex[h][l] = document.createElement('img'); imageindex[h][l].src = './images/knight.jpeg';

        }
        boardindex[h][l] = 0; 
        boardindex[h][l] = holder;
    }
    if(transform == "rook"){
        var holder = new piece(boardindex[h][l].x, boardindex[h][l].y, boardindex[h][l].color, 'rook')
        if(boardindex[h][l].color == 'white'){
            imageindex[h][l] = 0;
            imageindex[h][l] = document.createElement('img'); imageindex[h][l].src = './images/whiterook.png';

        }
        else{
            imageindex[h][l] = 0;
            imageindex[h][l] = document.createElement('img'); imageindex[h][l].src = './images/rook.png';

        }
        boardindex[h][l] = 0; 

        boardindex[h][l] = holder;

    }
    if(transform == "bishop"){
        var holder = new piece(boardindex[h][l].x, boardindex[h][l].y, boardindex[h][l].color, 'bishop')
        if(boardindex[h][l].color == 'white'){
            imageindex[h][l] = 0;
            imageindex[h][l] = document.createElement('img'); imageindex[h][l].src = './images/whitebishop.png';

        }
        else{
            imageindex[h][l] = 0;
            imageindex[h][l] = document.createElement('img'); imageindex[h][l].src = './images/bishop.png';

        }
        boardindex[h][l] = 0; 

        boardindex[h][l] = holder;

    }
    if(transform == "queen"){
        var holder = new piece(boardindex[h][l].x, boardindex[h][l].y, boardindex[h][l].color, 'queen')
        if(boardindex[h][l].color == 'white'){
            imageindex[h][l] = 0;
            imageindex[h][l] = document.createElement('img'); imageindex[h][l].src = './images/whitequeen.png';

        }
        else{
            transform = prompt("What type of piece would you like? Enter 'knight', 'queen', 'bishop', or 'rook'.","piece type");

        }
        boardindex[h][l] = 0; 

        boardindex[h][l] = holder;


    }
    
}