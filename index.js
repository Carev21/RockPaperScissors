var userName = prompt("Enter your name: ");

document.querySelectorAll(".playerName")[0].textContent = userName;
document.querySelectorAll(".playerName")[1].textContent = userName;

var player1 = 0;
var computer = 0;

var signals = ["rock", "paper", "scissors"];



var numberOfSignals = document.querySelectorAll(".signals").length;
for(var i = 0; i < numberOfSignals; i++){

    document.querySelectorAll(".signals")[i].addEventListener("click", function(){

        playSound(this.id);
        compare(this.id);
        
    })

}

function compare(choice) {

    playerChoice = choice;
    var randomNumber = Math.floor(Math.random() * 3);
    var computerChoice = signals[randomNumber];
    var imageOfPlayerSignal = "./images/"+playerChoice+".png";
    var imageOfComputerSignal = "./images/"+computerChoice+".png";
    document.getElementsByClassName("signals2")[0].setAttribute("src", imageOfPlayerSignal);
    document.getElementsByClassName("signals2")[1].setAttribute("src", imageOfComputerSignal);

    if(playerChoice === computerChoice) {
        alert("Draw!");
    }
    else if(playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
        
        player1+=1;
        alert(userName+" 1 Won!");

    }
    else if(playerChoice === "rock" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock") {
        computer+=1;
        alert("Computer has won!");
    }
    document.getElementsByClassName("result")[0].textContent = player1;
    document.getElementsByClassName("result")[1].textContent = computer;
}

function playSound(choice) {

    switch(choice) {

        case "rock":
            var rockSound = new Audio("./sounds/blue.mp3");
            rockSound.play();
        break;
        case "paper":
            var paperSound = new Audio("./sounds/yellow.mp3");
            paperSound.play();
            break;
        case "scissors":
            var scissorsSound = new Audio("./sounds/green.mp3");
            scissorsSound.play();
            break;

        default:

    }

}