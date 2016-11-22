/**
 * Created by ashotkazaryan on 17.11.16.




    var  mainDive = document.getElementById('mainDive');
    var mainDiveInput = mainDive.getElementsByTagName('input');
    for (var i = 0; i<=mainDiveInput.length-1; i ++) {
        mainDiveInput[i].setAttribute('disabled', 'disabled')
    }
function EnableBox() {
    var  mainDiveComputer= document.getElementById('mainDive');
    var mainDiveComputerInput = mainDiveComputer.getElementsByTagName('input');
    for (var i = 0; i<=mainDiveComputerInput.length-1; i ++) {
        mainDiveComputerInput[i].removeAttribute('disabled');
    }

}
 function removeButton() {
     var mainDiveremove = document.getElementById('buttonID');
    document.body.removeChild(mainDiveremove);
 }






 */