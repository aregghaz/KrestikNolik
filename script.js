
function CreatMassiv() {
    var mainDive2 = document.getElementById('matrix');
    var mainDiveInput = mainDive2.getElementsByClassName('column');
    var rray = [];
    for (var i = 0; i < mainDiveInput.length; i++) {
        rray[i] = mainDiveInput[i];
    }
    return rray;
}

/* user move and check */
$('.column').live('click', function () {
    if ($(this).val() === "o") {
        alert('ci kareli')

    }
    else if ($(this).val() === "x") {
        alert('ci kareli');
    }
    else {
        $(this).val('x')
    }

    ChekingX();
});

var used = CreatMassiv().slice();
<!----- Computer----->
function makeStep() {
    var used = CreatMassiv().slice();
    var step = Math.floor(Math.random()*used.length);
    if (used[step].value === '') {
        used[step].value = 'o';
        used.splice(step, 1)
    }
}
function changehandler(event) {
    var used = CreatMassiv().slice();
    makeStep();
    used.splice(used.indexOf(event.target), 1);
    ChekingO();
}

