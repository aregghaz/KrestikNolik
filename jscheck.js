
function LetsDrawMatrix() {
    var DrawMatrix = document.getElementById('DrawMatrix').value;
    for (var i = 0; i < parseInt(DrawMatrix); i++) {
        DrawMatrix += '<div class="ui grid">';
        for (var j = 0; j < parseInt(DrawMatrix); j++) {
            DrawMatrix += '<input type="button" title="0" MAXLENGTH="0" class="column asd" onclick="changehandler(event)"  >';
        }
        DrawMatrix += '</div>';
    }

    document.getElementById('matrix').innerHTML = DrawMatrix;
}



function Check() {
    var DrawMatrix = document.getElementById('DrawMatrix').value;
    var mainDive2 = document.getElementById('matrix');
    var mainDiveInput = mainDive2.getElementsByClassName('column');
    var array = [];
    for (var q = 0; q < mainDiveInput.length; q++) {
        array[q] = mainDiveInput[q].value;
    }

    return array;


}
function ChekingO() {
    var DrawMatrix = document.getElementById('DrawMatrix').value;
    var DrawMatrixParseInt = parseInt(DrawMatrix);
    var CheckArray = Check();
    var isWin = true;
    /*  stugum toxeri*/
    for (var j = 0; j < CheckArray.length; j += DrawMatrixParseInt) {
        isWin = true;
        for (var i = j; i < j + DrawMatrixParseInt; i++) {

            if (CheckArray[i] !== 'o') {
                isWin = false;
                break;
            }
        }
        if (isWin) {
            alert('winner O');
            break;
        }
    }
    /*  stugum syuneri  */
    for (i = 0; i < DrawMatrixParseInt; i++) {
        isWin = true;
        for (j = 0; j < DrawMatrixParseInt; j++) {
            if (CheckArray[i + j * DrawMatrixParseInt] !== 'o') {
                isWin = false;
                break;
            }
        }
        if (isWin) {
            alert('winner O');
            break;
        }
    }
    isWin = true;
    /*  stugum syuneri  */
    for (i = 0; i < DrawMatrixParseInt; i++) {
        if (CheckArray[i * DrawMatrixParseInt + i] !== 'o') {
            isWin = false;
            break;
        }
    }
    if (isWin) {
        alert('winner O');
    }
    isWin = true;
    /*  stugum syuneri  */
    for (i = DrawMatrixParseInt; i >= 1; i--) {
        if (CheckArray[i * DrawMatrixParseInt - i] !== 'o') {
            isWin = false;
            break;
        }
    }
    if (isWin) {
        alert('winner O');
    }
}
function ChekingX() {
    var DrawMatrix = document.getElementById('DrawMatrix').value;
    var DrawMatrixParseInt = parseInt(DrawMatrix);
    var CheckArray = Check();
    var isWin = true;
    /*  stugum toxeri*/
    for (var j = 0; j < CheckArray.length; j += DrawMatrixParseInt) {
        isWin = true;
        for (var i = j; i < j + DrawMatrixParseInt; i++) {

            if (CheckArray[i] !== 'x') {
                isWin = false;
                break;
            }
        }
        if (isWin) {
            alert('winner X');
            break;
        }
    }
    /*  stugum syuneri  */
    for (i = 0; i < DrawMatrixParseInt; i++) {
        isWin = true;
        for (j = 0; j < DrawMatrixParseInt; j++) {
            if (CheckArray[i + j * DrawMatrixParseInt] !== 'x') {
                isWin = false;
                break;
            }
        }
        if (isWin) {
            alert('winner X');
            break;
        }
    }
    isWin = true;
    /*  stugum syuneri  */
    for (i = 0; i < DrawMatrixParseInt; i++) {
        if (CheckArray[i * DrawMatrixParseInt + i] !== 'x') {
            isWin = false;
            break;
        }
    }
    if (isWin) {
        alert('winner X');
    }
    isWin = true;
    /*  stugum syuneri  */
    for (i = DrawMatrixParseInt; i >= 1; i--) {
        if (CheckArray[i * DrawMatrixParseInt - i] !== 'x') {
            isWin = false;
            break;
        }
    }
    if (isWin) {
        alert('winner X');
    }
}
