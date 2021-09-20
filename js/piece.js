
import  makeboard  from "./makeboard.js";
import { movecheck } from "./move.js";
import { bishoplogic, kinglogic, knightlogic, pawnlogic, queenlogic, rooklogic } from "./piecelogic.js";
import { turn } from "./piecelogic.js";
import pawntranformation from "./pawntranformation.js";
import { boardindex } from "./board.js";

export default class piece{
    constructor(x, y, color, type, img){
        this.x = x;
        this.y = y;
        this.color = color;
        this.type = type;
        this.hasmoved = false;
        
    }

    
    movecommit(a, b, c, d, eboard, image, buttindex){
        if(eboard[c][d] != 0){
            buttindex[c][d].removeChild(image[c][d]);

        }    


        console.log(c); console.log(d);
        movecheck.push(c, d);
    
        eboard[c][d] = eboard[a][b];
        eboard[c][d].x, eboard[c][d].y = c,d;
        
        console.log("piecelogic:"+eboard[a][b].x+" "+eboard[a][b].y);

        
        image[c][d] = image[a][b];

        buttindex[c][d].appendChild(image[c][d]);
    
        eboard[a][b] = 0;
    

       movecheck[0], movecheck[1] = 0,0;

        makeboard();
        console.log(image[c][d]);
    
        return
    }



    pawnmove(a, b, c, d, eboard, img, bti){
        if(pawnlogic(a,b,c,d, eboard) == true){
            if((eboard[a][b].type == 'pawn') && ((c == 0)||(c == 7))){

                bti[c][d].removeChild(img[c][d]);
                bti[a][b].removeChild(img[a][b]);
                pawntranformation(a, b);
                eboard[a][b].hasmoved = true;
                console.log(c); console.log(d);
                movecheck.push(d, d);
                
                eboard[c][d] = eboard[a][b];
                
                
                eboard[c][d].x, eboard[c][d].y = c,d;
                
                console.log("piecelogic:" + eboard[a][b].x+" "+eboard[a][b].y);

            
                img[c][d] = img[a][b];
                
                img[a][b] = 0;
                
                eboard[a][b] = 0;
                
                
                while(movecheck.length > 0){
                    movecheck.pop();
                }

                
                
                
                return
            }
            else{
                eboard[a][b].movecommit(a,b,c,d, eboard, img, bti);
                return
            }
        }

        else{
            if(turn[0] == 'white'){
                turn[0] = 'white';
            }
            else if(turn[0] == 'black'){
                turn[0] = 'black';
            }
            return false
        }
    }


    

    kingmove(a,b,c,d, eboard, img, bti){
        if(((eboard[a][b].type == 'king' && eboard[c][d].type == 'rook') || (eboard[a][b].type == 'rook' && eboard[c][d].type == 'king')) && (eboard[a][b].color == eboard[c][d].color) && ((eboard[a][b].hasmoved == false) && (eboard[c][d].hasmoved == false))){
            console.log(eboard[a][b]);
            eboard[a][b].castle(a, b , c , d , eboard, img, bti);
            makeboard();
            return
            
        }

        if(kinglogic(a,b,c,d, eboard) == true){ 
            eboard[a][b].movecommit(a,b,c,d, eboard, img, bti);
            return
            
        }
        else{
            if(turn[0] == 'white'){
                turn[0] = 'white';
            }
            else if(turn[0] == 'black'){
                turn[0] = 'black';
            }
            return false
        }
    }




        ////be sure to elimnate the variable inconsistencies below


    castle(a,b,c,d, eboard, img, bti){
        eboard[a][b].x = 0;
        eboard[a][b].y = 4;
        console.log(eboard[a][b].x);
        console.log(eboard[a][b].y);

        if(eboard[c][d].color == 'white'){
            console.log("whitecastlerequest");
            if(eboard[a][b].type == 'king'){
            
                var kpiece = eboard[a][b];
                var rpiece = eboard[c][d];

            }


            if(kpiece.y > rpiece.y){
                for(var i = 1; i < 4; i++){
                    console.log(eboard[rpiece.x][rpiece.y + i]);
                    if(eboard[rpiece.x][rpiece.y + i] != 0){
                        return false
                    }

                } 
                    kpiece.hasmoved = true;
                    rpiece.hasmoved = true;
                    
                    img[kpiece.x][1] = img[a][b];
                    
                    bti[kpiece.x][1].appendChild(img[kpiece.x][kpiece.y]);

                    eboard[kpiece.x][1] = eboard[kpiece.x][kpiece.y];
                    eboard[kpiece.x][kpiece.y] = 0;
                    eboard[kpiece.x][1].x, eboard[kpiece.x][1].y = kpiece.x,1;



                    img[rpiece.x][2] = img[c][d];
                    
                    bti[rpiece.x][2].appendChild(img[rpiece.x][rpiece.y]);

                    eboard[rpiece.x][2] = eboard[rpiece.x][rpiece.y];
                    eboard[rpiece.x][rpiece.y] = 0;
                    eboard[rpiece.x][2].x, eboard[rpiece.x][2].y = rpiece.x,2;

                    
                    if(turn[0] == 'black'){
                        turn[0] = 'white';
                    }
                    else{
                        turn[0] = 'black';
                    }

                    return
                    
                
                
                ///king and rook castle then makeboard
            }
            else if(kpiece.y < rpiece.y){
                for(var i = 1; i < 3; i++){
                    console.log(eboard[rpiece.x][rpiece.y - i]);
                    if(eboard[rpiece.x][rpiece.y - i] != 0){
                        return false
                    }

                } 
                    kpiece.hasmoved = true;
                    rpiece.hasmoved = true;
                    
                    img[kpiece.x][6] = img[a][b];
                    
                    bti[kpiece.x][6].appendChild(img[kpiece.x][kpiece.y]);

                    eboard[kpiece.x][6] = eboard[kpiece.x][kpiece.y];
                    eboard[kpiece.x][kpiece.y] = 0;
                    eboard[kpiece.x][6].x, eboard[kpiece.x][6].y = kpiece.x,6;



                    img[rpiece.x][5] = img[c][d];
                    
                    bti[rpiece.x][5].appendChild(img[rpiece.x][rpiece.y]);

                    eboard[rpiece.x][5] = eboard[rpiece.x][rpiece.y];
                    eboard[rpiece.x][rpiece.y] = 0;
                    eboard[rpiece.x][5].x, eboard[rpiece.x][5].y = rpiece.x,5;

                    
                    if(turn[0] == 'black'){
                        turn[0] = 'white';
                    }
                    else{
                        turn[0] = 'black';
                    }

                    return
            }
        }
        
        if(eboard[c][d].color == 'black'){
            console.log("blackcastlerequest")
            eboard[a][b].x = 7;
            eboard[a][b].y = 4;
            console.log(eboard[a][b].x);
            console.log(eboard[a][b].y);
            
            if(eboard[a][b].type == 'king'){
            
                var kpiece = eboard[a][b];
                var rpiece = eboard[a][d];

            
            }

            console.log(kpiece);
            console.log(rpiece);

            if(kpiece.y < rpiece.y){
                console.log("vlaid")

                for(var i = 1; i < 3; i++){
                    console.log(eboard[rpiece.x][rpiece.y - i]);
                    if(eboard[rpiece.x][rpiece.y - i] != 0){
                        console.log("notempty")
                        return false
                    }

                } 
                kpiece.hasmoved = true;
                rpiece.hasmoved = true;
                
                img[kpiece.x][6] = img[a][b];
                
                bti[kpiece.x][6].appendChild(img[kpiece.x][kpiece.y]);

                eboard[kpiece.x][6] = eboard[kpiece.x][kpiece.y];
                eboard[kpiece.x][kpiece.y] = 0;
                eboard[kpiece.x][6].x, eboard[kpiece.x][6].y = kpiece.x,6;



                img[rpiece.x][5] = img[c][d];
                
                bti[rpiece.x][5].appendChild(img[rpiece.x][rpiece.y]);

                eboard[rpiece.x][5] = eboard[rpiece.x][rpiece.y];
                eboard[rpiece.x][rpiece.y] = 0;
                eboard[rpiece.x][5].x, eboard[rpiece.x][5].y = rpiece.x,5;

                
                if(turn[0] == 'black'){
                    turn[0] = 'white';
                }
                else{
                    turn[0] = 'black';
                }

                return
            }

            else if(kpiece.y > rpiece.y){
                console.log("vlaid")

                for(var i = 1; i < 4; i++){
                    console.log(eboard[rpiece.x][rpiece.y + i]);
                    if(eboard[rpiece.x][rpiece.y + i] != 0){
                        return false
                    }

                } 
                    kpiece.hasmoved = true;
                    rpiece.hasmoved = true;
                    
                    img[kpiece.x][1] = img[a][b];
                    
                    bti[kpiece.x][1].appendChild(img[kpiece.x][kpiece.y]);

                    eboard[kpiece.x][1] = eboard[kpiece.x][kpiece.y];
                    eboard[kpiece.x][kpiece.y] = 0;
                    eboard[kpiece.x][1].x, eboard[kpiece.x][1].y = kpiece.x,1;



                    img[rpiece.x][2] = img[c][d];
                    
                    bti[rpiece.x][2].appendChild(img[rpiece.x][rpiece.y]);

                    eboard[rpiece.x][2] = eboard[rpiece.x][rpiece.y];
                    eboard[rpiece.x][rpiece.y] = 0;
                    eboard[rpiece.x][2].x, eboard[rpiece.x][2].y = rpiece.x,2;

                    
                    if(turn[0] == 'black'){
                        turn[0] = 'white';
                    }
                    else{
                        turn[0] = 'black';
                    }

                    return
                    
                
                
            }



        }
        

    }



    queenmove(a,b,c,d, eboard, img, bti){
        if(queenlogic(a,b,c,d, eboard) == true){
            eboard[a][b].movecommit(a,b,c,d, eboard, img, bti);
            return;
        }
        else{
            if(turn[0] == 'white'){
                turn[0] = 'white';
            }
            else if(turn[0] == 'black'){
                turn[0] = 'black';
            }
            return false
        }
    }

    bishopmove(a,b,c,d, eboard, img, bti){
        if(bishoplogic(a,b,c,d,eboard) == true){
            eboard[a][b].movecommit(a,b,c,d, eboard, img, bti);
            return;
        }
        else{
            if(turn[0] == 'white'){
                turn[0] = 'white';
            }
            else if(turn[0] == 'black'){
                turn[0] = 'black';
            }
            return false
        }
    }

    knightmove(a,b,c,d, eboard, img, bti){
        if(knightlogic(a,b,c,d, eboard) == true){
            eboard[a][b].movecommit(a,b,c,d, eboard, img, bti);
            return;
        }
        else{
            if(turn[0] == 'white'){
                turn[0] = 'white';
            }
            else if(turn[0] == 'black'){
                turn[0] = 'black';
            }
            return false
        }
    }

    rookmove(a,b,c,d, eboard, img, bti){
        if(rooklogic(a,b,c,d, eboard) == true){
            eboard[a][b].movecommit(a,b,c,d, eboard, img, bti);
            return;
        }
        else{
            if(turn[0] == 'white'){
                turn[0] = 'white';
            }
            else if(turn[0] == 'black'){
                turn[0] = 'black';
            }
            return false
        }
    }
    
}

///fix variable inconsistencies above -> c,y,movecheck -> c,d, a||b

