/**
 * Created by ashotkazaryan on 17.11.16.
 */

var all = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8')
];

<!---------------->
var used = all.slice();

<!----- Computer----->
function makeStep() {
    var step = Math.floor(Math.random()*used.length);
    used[step].value = 'o';
    used.splice(step, 1)

}

/* user move and check */

$('.bd').live('click', function() {
    $(this).val('x');
    checkwinnerX();
});


/* computer move and check */

function changehandler(event) {
    used.splice(used.indexOf(event.target), 1);
    makeStep();
    checkwinnerO();

}