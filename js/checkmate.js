import { boardindex } from "./board.js";
import { bishoplogic, kinglogic, knightlogic, pawnlogic, queenlogic, rooklogic, turn } from "./piecelogic.js";
import simulate_move from "./simulate_move.js";
import { typedict } from "./move.js";
import { movecheck } from "./move.js";


export var possiblemoves = []

export function simcheck(){
    for(var i =0; i <8; i++){
        for(var j = 0 ; j <8; j++){
            if((boardindex[i][j] != 0) && (boardindex[i][j].color == turn)){
                for(var r =0; r <8; r++){
                    for(var y = 0; y <8; y++){
                        var typecase = typedict[boardindex[movecheck[0]][movecheck[1]].type];
                                
                                switch(typecase){
                                    
                                    case 1:
                                        if(kinglogic(i,j,r,y) == true){
                                            if(simulate_move(i,j,r,y) == true){
                                                possiblemoves.push(1);
                                                console.log("Not Checkmate")
                                                break
                                            }
                                        }
                                        break;

                                    case 2:
                                        if(queenlogic(i,j,r,y) == true){
                                            if(simulate_move(i,j,r,y) == true){
                                                possiblemoves.push(1);
                                                console.log("Not Checkmate")
                                                break
                                            }
                                        }
                                        
                                    case 3:
                                        if(knightlogic(i,j,r,y) == true){
                                            if(simulate_move(i,j,r,y) == true){
                                                possiblemoves.push(1);
                                                console.log("Not Checkmate")
                                                break
                                            }
                                        }                                    
                                    case 4:
                                        if(rooklogic(i,j,r,y) == true){
                                            if(simulate_move(i,j,r,y) == true){
                                                possiblemoves.push(1);
                                                console.log("Not Checkmate")
                                                break
                                            }
                                        }                                        
                                    case 5: 
                                    if(bishoplogic(i,j,r,y) == true){
                                        if(simulate_move(i,j,r,y) == true){
                                            possiblemoves.push(1);
                                            console.log("Not Checkmate")
                                            break
                                        }
                                    }                                        
                                    case 6:
                                        if(pawnlogic(i,j,r,y) == true){
                                            if(simulate_move(i,j,r,y) == true){
                                                possiblemoves.push(1);
                                                console.log("Not Checkmate")
                                                break
                                            }
                                        }                                        
                                }
                    }
                }
            }
        }
    }
}

export default function checkmate(){   
    simcheck();

    if(possiblemoves.length == 0){
        
        alert("Checkmate!!");

        return false
    }

    else{
        while(possiblemoves.length > 0){
            possiblemoves.pop();
        }
        
        return true
    }
}