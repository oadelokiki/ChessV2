

export var turn = new Array(1);

turn[0] = 'white';

export function pawnlogic(a,b,c,d, exampleboard){
    
    if(exampleboard[a][b].color == 'white'){
        if(a == 1){
            if(((a + 1 == c || a + 2 == c) && (exampleboard[c][d] == 0)) && (b == d)){
                if(turn[0] == 'white'){
                    turn[0] = 'black';;
                }
                else if(turn[0] == 'black'){
                    turn[0] = 'white';
                }
                exampleboard[a][b].hasmoved = true;
                return true
            }
            if((a + 1 == c) && (b+1 == d || b-1 == d) && (exampleboard[c][d].color == 'black')){
                if(turn[0] == 'white'){
                    turn[0] = 'black';;
                }
                else if(turn[0] == 'black'){
                    turn[0] = 'white';
                }
                exampleboard[a][b].hasmoved = true;

                return true
            }
            else{
                return false
            }
        }
        ///change code below for pawn transformation...dont forget the <=7...as well as tranformation logic in the move() function
        if(((1 <= a) || (a <= 7))){
            if((a + 1 == c) && (b == d) && (exampleboard[c][d] == 0)){
                if(turn[0] == 'white'){
                    turn[0] = 'black';;
                }
                else if(turn[0] == 'black'){
                    turn[0] = 'white';
                }
                exampleboard[a][b].hasmoved = true;

                return true
            }
            if((a + 1 == c) && (b+1 == d || b-1 == d) && (exampleboard[c][d].color == 'black')){
                if(turn[0] == 'white'){
                    turn[0] = 'black';
                }
                else if(turn[0] == 'black'){
                    turn[0] = 'white';
                }
                exampleboard[a][b].hasmoved = true;

                return true
            }
            else{
                return false
            }
        }
        
    }


    if(exampleboard[a][b].color == 'black'){
        if(exampleboard[a][b].color != turn[0]){
        
            if(turn[0] == 'white'){
                turn[0] = 'white';
            }
            else if(turn[0] == 'black'){
                turn[0] = 'black';
            }
            return false
        
        }
        if(a == 6){
            ///one or two moves forward
            if(((a - 1 == c || a - 2 == c) && (exampleboard[c][d] == 0)) && (b == d)){
                if(turn[0] == 'white'){
                    turn[0] = 'black';;
                }
                else if(turn[0] == 'black'){
                    turn[0] = 'white';
                }
                exampleboard[a][b].hasmoved = true;

                return true
            }
            ///a diagonal take
            if((a - 1 == c) && (b-1 == d || b+1 == d) && (exampleboard[c][d].color == 'white')){
                if(turn[0] == 'white'){
                    turn[0] = 'black';;
                }
                else if(turn[0] == 'black'){
                    turn[0] = 'white';
                }
                exampleboard[a][b].hasmoved = true;

                return true
            }
            else{
                return false
            }
        }
        ///change code below for pawn transformation...dont forget the <=7...as well as tranformation logic in the move() function
        if((0 <= a) && (a <= 7)){
            ///one move forward
            if((a - 1 == c) && (b == d) && (exampleboard[c][d] == 0)){
                if(turn[0] == 'white'){
                    turn[0] = 'black';;
                }
                else if(turn[0] == 'black'){
                    turn[0] = 'white';
                }
                exampleboard[a][b].hasmoved = true;

                return true
                
            }
            ///a diagonal take
            if((a - 1 == c) && (b+1 == d || b-1 == d) && (exampleboard[c][d].color == 'white')){
                if(turn[0] == 'white'){
                    turn[0] = 'black';;
                }
                else if(turn[0] == 'black'){
                    turn[0] = 'white';
                }
                exampleboard[a][b].hasmoved = true;

                return true
            }
            else{
                return false
            }
        }
       
    }
}

export function knightlogic(a,b,c,d, exampleboard){
    
    if(exampleboard[a][b].color == 'white'){
        ///all possible knight moves

        if( (((a - 1 == c) && (b +2  == d)) || ((a + 1 == c) && (b +2  == d)) || ((a + 1 == c) && (b -2  == d)) || ((a - 1 == c) && (b - 2  == d)) || ((a - 2 == c) && (b +1  == d)) || ((a - 2 == c) && (b -1  == d)) || ((a + 2 == c) && (b +1  == d)) || ((a +2 == c) && (b -1  == d))) && ((exampleboard[c][d] == 0) || exampleboard[c][d].color == 'black') ){
            if(turn[0] == 'white'){
                turn[0] = 'black';;
            }
            else if(turn[0] == 'black'){
                turn[0] = 'white';
            }
            exampleboard[a][b].hasmoved = true;

            return true
        }
        else{
            return false
        }

    }
    if(exampleboard[a][b].color == 'black'){
        ///all possible knight moves
        if( (((a - 1 == c) && (b +2  == d)) || ((a + 1 == c) && (b +2  == d)) || ((a + 1 == c) && (b -2  == d)) || ((a - 1 == c) && (b - 2  == d)) || ((a - 2 == c) && (b +1  == d)) || ((a - 2 == c) && (b -1  == d)) || ((a + 2 == c) && (b +1  == d)) || ((a +2 == c) && (b -1  == d))) && ((exampleboard[c][d] == 0) || exampleboard[c][d].color == 'white') ){
            if(turn[0] == 'white'){
                turn[0] = 'black';;
            }
            else if(turn[0] == 'black'){
                turn[0] = 'white';
            }
            exampleboard[a][b].hasmoved = true;

            return true
        }
        else{
            return false
        }

    }
}

export function kinglogic(a, b,c, d, exampleboard){
    
    if(exampleboard[a][b].color == 'white'){
        if( (((a + 1 == c) && (b == d)) || ((a-1 == c) && (b == d)) || ((a+1 == c) && (b + 1 == d)) || ((a + 1 == c) && (b - 1 == d)) || ((a -1 == c) && (b -1 == d)) || ((a- 1 == c) && (b+1 == d)) || ((a == c) && (b + 1 == d)) || ((a == c) && (b -1 == d))) && ( (exampleboard[c][d].color == 'black') || (exampleboard[c][d] == 0) ) ){
            if(turn[0] == 'white'){
                turn[0] = 'black';;
            }
            else if(turn[0] == 'black'){
                turn[0] = 'white';
            }
            exampleboard[a][b].hasmoved = true;

            return true
        }
        
        else{
            
            return false
        }


    }
    if(exampleboard[a][b].color == 'black'){
        if( (((a + 1 == c) && (b == d)) || ((a-1 == c) && (b == d)) || ((a+1 == c) && (b + 1 == d)) || ((a + 1 == c) && (b - 1 == d)) || ((a -1 == c) && (b -1 == d)) || ((a- 1 == c) && (b+1 == d)) || ((a == c) && (b + 1 == d)) || ((a == c) && (b -1 == d))) && ( (exampleboard[c][d].color == 'white') || (exampleboard[c][d] == 0) ) ){
            if(turn[0] == 'white'){
                turn[0] = 'black';;
            }
            else if(turn[0] == 'black'){
                turn[0] = 'white';
            }
            exampleboard[a][b].hasmoved = true;

            return true
        }
        else{
            return false
        }

    }
}

export function queenlogic(a,b,c,d, exampleboard){
    
    
    let valid = true;
    
                ///edit queen code to account for a blocking piece up, as well as a block piece to the left
                ///vertical and horizontal movement
                ///stops knight movements         
                if( (((a - 1 == c) && (b +2  == d)) || ((a + 1 == c) && (b +2  == d)) || ((a + 1 == c) && (b -2  == d)) || ((a - 1 == c) && (b - 2  == d)) || ((a - 2 == c) && (b +1  == d)) || ((a - 2 == c) && (b -1  == d)) || ((a + 2 == c) && (b +1  == d)) || ((a +2 == c) && (b -1  == d))) && ((exampleboard[c][d] == 0) || exampleboard[c][d].color == 'black') ){
                    return false
                    
                }
    
                if( ((a != c) && (b != d))){
                    
                    /// all diagonal movement
                    ///up left
                    if( (a > c) && (b > d) ){
                        for( let i = 1; i < (-1 *(c - a)); i++){
                            if( (exampleboard[(a-i)][b - i ]) != 0){
                                return false;
                            }
                            
                        }
                    }
                    //down right
                    if( (d > b) && (c > a)){
                        for( let i = 1; i < ((c - a)); i++){
                            if( (exampleboard[(a+i)][b +i ]) != 0){
                                return false;
                            }
                            
                        }
                    }
                    ///up right
                    if((d > b ) && (a > c)){
                        for( let i = 1; i < (-1 * (c - a)); i++){
                            if( (exampleboard[(a-i)][(b +i) ]) != 0){
                                return false;
                            }
                            
                        }
                    }
                    ///down left
                    if((c > a) && (b > d)){
                        for( let i = 1; i < ((c - a)); i++){
                            if( (exampleboard[(a+i)][(b -i )]) != 0){
                                return false;
                            }
                        }
                    }
                
                    if(exampleboard[c][d] == 0 || exampleboard[c][d].color != exampleboard[a][b].color){
                        
                        if(turn[0] == 'white'){
                            turn[0] = 'black';
                        }
                        else if(turn[0] == 'black'){
                            turn[0] = 'white';
                        }
                        exampleboard[a][b].hasmoved = true;

                        return valid;
                    }
                    else{
                        return false
                    }
                }
                
                if (((a - c) != (b - d) ) && ((c-a) != (d -b)) && ((a + b) != (c+d))){
                    if( (a != c) && (b != d)){
                        return false
                    }
                    ///horizontal
                    if(a == c){
                        ///right    
                        if(d > b){
                            for( let i = 1;b + i < d; i ++){
                                if(exampleboard[a][(b+i)] != 0){
                                    return false;
                                }
                                
                            }
                        }
                        ///left
                        if(b > d){
                            for( let i = 1; b -i > d ; i ++){
                                if(exampleboard[a][ (b -i)] != 0){
                                    return false;
                                }
                                
                            }
                        }
                    }
                    ///vertical
                    
                    if(b == d){ 
                        ///down 
                        if(c > a){
                            for( let i =  1; a + i < c; i ++){
                                if(exampleboard[(a+i)][b] != 0){
                                    return false;
                                }
                            }
                        }
                        ///up
                        if(a > c){
                            console.log(a, b, c, d);
                            for( let i = 1; a - i > c ; i++){
                                if(exampleboard[(a-i)][b] != 0){
                                    return false;
                                }
                            }
                        }
                
                    }
    
                    if(exampleboard[c][d] == 0 || exampleboard[c][d].color != exampleboard[a][b].color){
                        if(turn[0] == 'white'){
                            turn[0] = 'black';
                        }
                        else if(turn[0] == 'black'){
                            turn[0] = 'white';
                        }
                        exampleboard[a][b].hasmoved = true;

                        return valid;
                    }
                    else{
                        return false
                    }
    
                }
}

export function bishoplogic(a,b,c,d, exampleboard){
    
    let valid = true;
                    if ( ((a - c) != (b - d) ) && ((c-a) != (d -b)) && ((a + b) != (c+d)) ){
                        return false
                    }
                    if( (((a - 1 == c) && (b +2  == d)) || ((a + 1 == c) && (b +2  == d)) || ((a + 1 == c) && (b -2  == d)) || ((a - 1 == c) && (b - 2  == d)) || ((a - 2 == c) && (b +1  == d)) || ((a - 2 == c) && (b -1  == d)) || ((a + 2 == c) && (b +1  == d)) || ((a +2 == c) && (b -1  == d))) && ((exampleboard[c][d] == 0) || exampleboard[c][d].color == 'black') ){
                        return false
                        
                    }
                
                    ///up left
                    if( (a > c) && (b > d) ){
                        for( let i = 1; i < (-1 *(c - a)); i++){
                            if( (exampleboard[(a-i)][b - i ]) != 0){
                                return false;
                            }
                            
                        }
                    }
                    //down right
                    if( (d > b) && (c > a)){
                        for( let i = 1; i < ((c - a)); i++){
                            if( (exampleboard[(a+i)][b +i ]) != 0){
                                return false;
                            }
                            
                        }
                    }
                    ///up right
                    if((d > b ) && (a > c)){
                        for( let i = 1; i < (-1 * (c - a)); i++){
                            if( (exampleboard[(a-i)][(b +i) ]) != 0){
                                return false;
                            }
                            
                        }
                    }
                    ///down left
                    if((c > a) && (b > d)){
                        for( let i = 1; i < ((c - a)); i++){
                            if( (exampleboard[(a+i)][(b -i )]) != 0){
                                return false;
                            }
                        }
                    }
                
                if(exampleboard[c][d] == 0 || exampleboard[c][d].color != exampleboard[a][b].color){
                    if(turn[0] == 'white'){
                        turn[0] = 'black';
                    }
                    else if(turn[0] == 'black'){
                        turn[0] = 'white';
                    }
                    exampleboard[a][b].hasmoved = true;

                    return valid;
                }
                else{
                    return false
                }
}

export function rooklogic(a,b,c,d, exampleboard){
    
    let valid = true;
            
                if( (a != c) && (b != d)){
                    return false
                }
                ///horizontal
                if(a == c){
                    ///right    
                    if(d > b){
                        for( let i = 1;b + i < d; i ++){
                            if(exampleboard[a][(b+i)] != 0){
                                return false;
                            }
                            
                        }
                    }
                    ///left
                    if(b > d){
                        for( let i = 1; b -i > d ; i ++){
                            if(exampleboard[a][ (b -i)] != 0){
                                return false;
                            }
                            
                        }
                    }
                }
                ///vertical
                
                if(b == d){ 
                    ///down 
                    if(c > a){
                        for( let i =  1; a + i < c; i ++){
                            if(exampleboard[(a+i)][b] != 0){
                                return false;
                            }
                        }
                    }
                    ///up
                    if(a > c){
                        console.log(a, b, c, d);
                        for( let i = 1; a - i > c ; i++){
                            if(exampleboard[(a-i)][b] != 0){
                                return false;
                            }
                        }
                    }
            
                }
    
                if(exampleboard[c][d] == 0 || exampleboard[c][d].color != exampleboard[a][b].color){
                    if(turn[0] == 'white'){
                        turn[0] = 'black';
                    }
                    else if(turn[0] == 'black'){
                        turn[0] = 'white';
                    }
                    exampleboard[a][b].hasmoved = true;

                    return valid;
                }
                else{
                    return false
                }
}


