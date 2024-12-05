let btn=document.querySelector("#mode-button");

let mode="dark";
btn.addEventListener("click",()=>{
    if (mode==="dark") {
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }

    else {
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";

    }
})

let userScore=0;
let CompScore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#result");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

    const genCompChoice=() => {
        const options=["rock","paper","scissors"];
        const randIdx= Math.floor(Math.random()*3);
        return options[randIdx];
    }

    showWinner= (userWin,userChoice,compChoice) => {
        if(userWin) {
            userScore++;
            userScorePara.innerText=userScore;
            msg.innerText=`You win! Your ${userChoice} beats computer's ${compChoice}.`;
            msg.style.backgroundColor="green";
        }
        else {
            CompScore++;
            compScorePara.innerText=CompScore;
            msg.innerText=`You lose :( Computer's ${compChoice} beats your ${userChoice}.`;
            msg.style.backgroundColor="red";
        }

    }

    const playGame= (userChoice) => {
        const compChoice=genCompChoice();


        if(userChoice===compChoice) {
            console.log("GSame was draw.");
            msg.innerText="Game was draw. Play again.";
            msg.style.backgroundColor="gray";
        }

        else {
            let userWin=true;
            if (userChoice==="rock") {
            userWin=compChoice==="paper" ? false:true;
        }

        else if(userChoice==="paper") {
            userWin= compChoice==="scissors" ? false:true;
        }

        else {
            userWin= compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    }

    const choices=document.querySelectorAll(".choice");
    choices.forEach((choice) =>{
        choice.addEventListener("click",()=> {
            const userChoice=choice.getAttribute("Id");
            playGame(userChoice);
        })
    })