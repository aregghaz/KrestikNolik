<!---------------->

check0X =document.getElementById('0');
check1X =document.getElementById('1');
check2X =document.getElementById('2');
check3X =document.getElementById('3');
check4X =document.getElementById('4');
check5X =document.getElementById('5');
check6X =document.getElementById('6');
check7X =document.getElementById('7');
check8X =document.getElementById('8');
<!---------------->
check0O =document.getElementById('0');
check1O =document.getElementById('1');
check2O =document.getElementById('2');
check3O =document.getElementById('3');
check4O =document.getElementById('4');
check5O =document.getElementById('5');
check6O =document.getElementById('6');
check7O =document.getElementById('7');
check8O =document.getElementById('8');
function checkwinnerX() {
    if (check0X.value === check1X.value && check1X.value === check2X.value && check2X.value === "x" ) {
        alert('winner X')
    }
    else if (check3X.value === check4X.value && check4X.value === check5X.value && check5X.value === "x") {
        alert('winner X')
    }
    else if (check6X.value === check7X.value && check7X.value === check8X.value && check8X.value === "x") {
        alert('winner X')
    }
    else if (check0X.value === check3X.value && check3X.value === check6X.value && check6X.value === "x") {
        alert('winner X')
    }
    else if (check1X.value === check4X.value && check4X.value === check7X.value && check7X.value === "x") {
        alert('winner X')
    }
    else if (check2X.value === check5X.value && check5X.value === check8X.value && check8X.value === "x") {
        alert('winner X')
    }
    else if (check0X.value === check4X.value && check4X.value === check8X.value && check8X.value === "x") {
        alert('winner X')
    }
    else if (check2X.value === check4X.value && check4X.value === check6X.value && check6X.value === "x") {
        alert('winner X')
    }
}
function checkwinnerO() {
    if (check0O.value === check1O.value && check1O.value === check2O.value && check2O.value === "o" ) {
        alert('winner O')
    }
    else if (check3O.value === check4O.value && check4O.value === check5O.value && check5O.value === "o") {
        alert('winner O')
    }
    else if (check6O.value === check7O.value && check7O.value === check8O.value && check8O.value === "o") {
        alert('winner O')
    }
    else if (check0O.value === check3O.value && check3O.value === check6O.value && check6O.value === "o") {
        alert('winner O')
    }
    else if (check1O.value === check4O.value && check4O.value === check7O.value && check7O.value === "o") {
        alert('winner O')
    }
    else if (check2O.value === check5O.value && check5O.value === check8O.value && check8O.value === "o") {
        alert('winner O')
    }
    else if (check0O.value === check4O.value && check4O.value === check8O.value && check8O.value === "o") {
        alert('winner O')
    }
    else if (check2O.value === check4O.value && check4O.value === check6O.value && check6O.value === "o") {
        alert('winner O')
    }
}

