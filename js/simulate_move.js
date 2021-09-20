import { boardindex } from "./board.js";
import { bishoplogic, kinglogic, knightlogic, pawnlogic, queenlogic, rooklogic } from "./piecelogic.js";
import {typedict} from "./move.js"

var x = 0;
var y = 0;
var w = 0;
var z = 0;
var possiblemoves = []




export default function simulate_move(a,b,c,d, exampleboard){
    var validpos = true;

    
    

    ///for some reason, the block above is not reading values for the index of the color's king

    var bufferpiece = exampleboard[c][d];

    exampleboard[c][d] = exampleboard[a][b];
    exampleboard[a][b] = 0;
    
    console.log(exampleboard[c][d]);

    for(let i = 0; i < 8; i++){
        for(let j =0; j < 8; j++){
            if(exampleboard[i][j] != 0){
                
                var color = exampleboard[c][d].color;

                if((exampleboard[i][j].color == exampleboard[c][d].color) && (exampleboard[i][j].type == 'king')){
                    x = i;
                    y = j;
                }
                
            }
            
        }
    }
    
    for(var i =0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            if((exampleboard[i][j] != 0) && (exampleboard[i][j].color != color)){
                console.log(y);
                
                switch(typedict[exampleboard[i][j].type]){
                    case 1:
                        if((kinglogic(i, j, x, y, exampleboard) == true) ){
                            console.log("case1");
                            console.log(i);
                            console.log(j);
                            console.log(x);
                            console.log(y);
                            validpos = false;
                            return validpos
                        }
                    case 2:
                        if((queenlogic(i, j, x, y, exampleboard) == true) ){
                            console.log("case2");
                            console.log(i);
                            console.log(j);
                            console.log(x);
                            console.log(y);
                            validpos = false;
                            return validpos
                        }
                    case 3:
                        if((knightlogic(i, j, x, y, exampleboard) == true)){
                            console.log("case3");
                            console.log(i);
                            console.log(j);
                            console.log(x);
                            console.log(y);
                            validpos = false;
                            return validpos
                        }
                    case 4:
                        if((rooklogic(i, j, x, y , exampleboard) == true) ){
                            console.log("case4");
                            console.log(i);
                            console.log(j);
                            console.log(x);
                            console.log(y);
                            validpos = false;
                            return validpos
                        }
                    case 5:
                        if((bishoplogic(i, j, x, y , exampleboard) == true)){
                            console.log("case5");
                            console.log(i);
                            console.log(j);
                            console.log(x);
                            console.log(y);
                            validpos = false;
                            return validpos
                        }
                    case 6:
                        if((pawnlogic(i, j, x, y , exampleboard) == true)){
                            console.log("case6");
                            console.log(i);
                            console.log(j);
                            console.log(x);
                            console.log(y);
                            validpos = false;
                            return validpos
                        }
                }
            
            }
            
        }
    }


    ///if the piece moved in the simulation was the king 

    exampleboard[a][b] = exampleboard[c][d];
    exampleboard[c][d] = bufferpiece;

    console.log(validpos);
    console.log(exampleboard[a][b]);

    x,y = 0, 0 
    return validpos;
}