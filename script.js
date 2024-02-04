let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const Idx = Math.floor(Math.random() * 3);
    return options[Idx];
};

const drawGame = () => {
    console.log("game draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!"; 
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
};

const game = (userChoice) => {
    console.log ("userchoice: ", userChoice);
    const compChoice = genCompChoice();
    console.log ("compchoice: ", compChoice);

    if (userChoice === compChoice) {
      
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        game(userChoice);
    });
});