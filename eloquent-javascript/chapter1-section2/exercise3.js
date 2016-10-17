// Eloquent Javascript 
// Chapter 1 Section 2 
// Exercise 3
// Chess Board
var chessBoard = "";
var hash = "#";
var space = " ";
var size = 8;

// Row 
for (r = 0; r <= size; r++) {
    for (c = 0; c < size; c++) {
        var evenRow = (r + c) % 2 === 0;
        if (evenRow) {
            chessBoard += space
        }
        else {
           chessBoard += hash
        }
        /*if (!even) {
            chessBoard += hash;
            chessBoard += space;
        }
        else {
            chessBoard += space;
            chessBoard += hash;
        }*/
    }
    chessBoard += "\n";
};

console.log(chessBoard);