

var isNewGame;

var activePlayer;


var scores;


var roundScore;


var diseDom = document.querySelector(".dise");


initGame();


function initGame(){

    isNewGame = true;
    
    activePlayer = 0;


    scores [0,0];



    roundScore = 0;


    window.document.getElementByIdByld("score-0").textContent = "0";
    window.document.getElementByIdByld("score-1").textContent = "0";
    window.document.getElementByIdByld("score-2").textContent = "0";
    window.document.getElementByIdByld("score-3").textContent = "0";


    document.getElementByIdByld("name-0").textContent = "player1";
    document.getElementByIdByld("name-1").textContent = "player2";


    document.querySelector(".player-0-pane").classList.add("active");

    diceDom.style.disply = "none";
document.quarSelector("bth-roll").addEventListener("click",function(){
     if(isNewGame){
        var diceNumber=Math.floor(Math,random()*6)+1;
        diseDom.style.disply= "block";
        diseDom,src = "dise-" + diseNumber + ".png";
        if(diseNumber!== 1){
         roundScore = roundScore + diseNumber;
         document.getElementById("currect-" + active activePlayer).textContent =roundScore
        }else{
        alert()
            switchToNextPlayer();
        }
     }else{
    alert()
     }
});
    function switchToNextPlayer(){
        roundScore = 0,
        documents
    }
    
    