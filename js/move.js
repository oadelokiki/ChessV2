import  makeboard  from "./makeboard.js";
import { boardindex } from "./board.js";
import { buttonindex } from "./board.js";
import { imageindex } from "./board.js";
import {turn} from "./piecelogic.js";

import simulate_move from "./simulate_move.js";
import pawntranformation from "./pawntranformation.js";
import checkmate, {possiblemoves} from "./checkmate.js";

export var movecheck = [];

export var typedict = {"king": 1, "queen": 2, "knight": 3, "rook": 4, "bishop": 5, "pawn": 6};

export default function move(x, y) {     
                
    
                console.log(x); console.log(y);
                ///currently can't pass values to the move function from makeboard()
                if((movecheck.length == 2)){
                    
                    ///insert move rules for each piece here
                    ///change
                    
                
                    if( ((boardindex[x][y] == 0 )|| (boardindex[x][y].color != boardindex[movecheck[0]][movecheck[1]].color)) && (boardindex[movecheck[0]][movecheck[1]].color == turn[0]) || ((boardindex[movecheck[0]][movecheck[1]].color == boardindex[x][y].color) && ((boardindex[x][y].type == "king") || (boardindex[x][y].type == "rook")))){
                        
                            if(simulate_move(movecheck[0], movecheck[1], x, y, boardindex) == true){
                                var typecase = 0;
		
                                typecase = typedict[boardindex[movecheck[0]][movecheck[1]].type];
                                
                                switch(typecase){
                                    case 1:
                                        boardindex[movecheck[0]][movecheck[1]].kingmove(movecheck[0], movecheck[1], x, y, boardindex, imageindex, buttonindex);
                                        break;
                                    case 2:
                                        boardindex[movecheck[0]][movecheck[1]].queenmove(movecheck[0], movecheck[1], x, y, boardindex, imageindex ,buttonindex);
                                        break;
                                    case 3:
                                        boardindex[movecheck[0]][movecheck[1]].knightmove(movecheck[0], movecheck[1], x, y, boardindex, imageindex, buttonindex);
                                        break;
                                    case 4:
                                        boardindex[movecheck[0]][movecheck[1]].rookmove(movecheck[0], movecheck[1], x, y, boardindex, imageindex, buttonindex);
                                        break;
                                    case 5: 
                                        boardindex[movecheck[0]][movecheck[1]].bishopmove(movecheck[0], movecheck[1], x, y, boardindex, imageindex, buttonindex);
                                        break;
                                    case 6:
                                        boardindex[movecheck[0]][movecheck[1]].pawnmove(movecheck[0], movecheck[1], x, y, boardindex, imageindex, buttonindex);
                                        break;
                                }
                                
                                makeboard();
                                movecheck = [];
                            }

                            else{
                                
                                alert("Check!");
                                checkmate();
                            }
                         
                            
                          
                    
                            
                            ///should successfully move a piece in the boardindex and clear the var movecheck for the next 'swap'
                    }
            
                    else if(boardindex[x][y] == boardindex[movecheck[0]][movecheck[1]] || boardindex[x][y].color == boardindex[movecheck[0]][movecheck[1]].color){
                        console.log("same team");
                        while(movecheck.length > 0){
                            
                            movecheck.pop();
                            }
                        return
                    }
                    else{
                        console.log('wrong turn')
                        while(movecheck.length > 0){
                            movecheck.pop();
                        }
                    }
                }
        

                                                    ///the condition below allows you to select a piece to move
                else if(movecheck.length == 0){    
            
                    if(boardindex[x][y] != 0){
                        movecheck.push(x, y);
                        console.log("movecheck: "+movecheck);
                    }
                    
                    else{
                        console.log("ur buggin");
                    }
                    ///insert function that highlights avalaible moves based on movecheck.length == 0, and passes those values to highlight the cell color at makeboard()
                    return
                }
                
    

    


                        ///if you select a piece of the same color it'll reset the move, but if you reselect a piece, it'll treat the 2nd selection as a primary selection









}