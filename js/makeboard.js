import { boardindex } from "./board.js";
import { buttonindex } from "./board.js";
import { imageindex } from "./board.js";
import piece from "./piece.js";

var center;

var ChessTable;


center = document.createElement('center');

ChessTable = document.createElement('table');
ChessTable.setAttribute("class", "col-12");
center.appendChild(ChessTable);


export default function makeboard(){
    console.log("Welcome to Chess V2, by Olu Adelokiki")
    if(center != null){
        center.removeChild(ChessTable);
    }

        center = document.createElement('center');
        center.setAttribute("class", "col-12")
        ChessTable = document.createElement('table');
        center.appendChild(ChessTable)
  
        ChessTable.setAttribute('style','cellspacing: 0')
        ///testing

        ///board instantiated and set to zero^


        ///testing
        for (var i = 0; i < 8; i++){
            var tr = document.createElement('tr');
  
            for (var j = 0; j <8; j++){
                var td = document.createElement('td');
                td.setAttribute("style", "height: 30px");
                td.setAttribute("style", "width: 30px");
                

                if(boardindex[i][j] != 0){
                    
                    ///indexes the board by the reported piece index, which should match the piece's index recorded by the board, and returns its type

                    
                    buttonindex[i][j].appendChild(imageindex[i][j]);
                    
                    
                    buttonindex[i][j].setAttribute("img", imageindex[i][j].src)
                    buttonindex[i][j].setAttribute("class", "text-center")
                    imageindex[i][j].setAttribute('style', "height: 20px; width: 20px;");
                    
                    

                    
                }
               
                buttonindex[i][j].setAttribute("style", "background-color: black; height: 100%; opacity: .8; width: 100%;");
                ///black and white styling and table construction
                
                td.setAttribute("style", "background-color: white; border: 1px solid black; height: 30px; width: 30px;")
                tr.appendChild(td);
             ///each button needs to be designed and given move() inputs manually, including specifically mapped board js coordinates
            ///potential solution: craete a matrix proportionate to boardindex, define each button with its function, then during the board's creation, specifically when td normally appendschild, allow it to append the correct element of the button array
        
            td.appendChild(buttonindex[i][j]);
            }

        ChessTable.appendChild(tr);
        }

   


        

        
        ChessTable.setAttribute("class", "row-12")
        ChessTable.setAttribute("style", "border: 1px solid black")
        document.body.appendChild(center);


}