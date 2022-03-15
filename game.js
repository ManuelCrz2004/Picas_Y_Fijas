var RandomNumber;
function GetRandomNumber() {
    RandomNumber = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    if (RandomNumber.length == 3){
        GetRandomNumber()
    } else {
        RandomNumber = parseInt(RandomNumber)
    }    
}


function StartGame() {
    GetRandomNumber();
    alert("El numero aleatorio es: " + RandomNumber)
}