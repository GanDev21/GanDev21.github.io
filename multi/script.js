var playing = false;
var score;
var timeRemaining;
var action;
var correctAnswer;

document.getElementById("start").onclick = function () {
    if (playing == true) {
        // Reset the game state
        playing = false;
        stopCountdown();
        hide("time");
        hide("right");
        hide("wrong");
        document.getElementById("start").innerHTML = "Start Game";
        document.getElementById("instruction").innerHTML = "Click on the right answer";
        document.getElementById("gameover").innerHTML = "";
    } else {
        // Start a new game
        playing = true;
        score = 0;
        document.getElementById("scoreNumber").innerHTML = score;
        document.getElementById("instruction").innerHTML = "Click on the right answer";
        show("time");
        timeRemaining = 30;
        document.getElementById("remainingTime").innerHTML = timeRemaining;
        hide("gameover");
        document.getElementById("start").innerHTML = "Reset Game";
        startCountdown();
        generateQA();
    }
}

for (var i = 1; i < 5; i++) {
    document.getElementById("answer" + i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correctAnswer) {
                score++;
                document.getElementById("scoreNumber").innerHTML = score;
                show("right");
                setTimeout(function () {
                    hide("right");
                }, 1000);
                hide("wrong");
                generateQA();
            } else {
                show("wrong");
                setTimeout(function () {
                    hide("wrong");
                }, 1000)
                hide("right");
            }
        }
    }
}

// Other functions remain unchanged

// Reset button handler
document.getElementById("start").onclick = function () {
    if (playing == true) {
        // Reset the game state
        playing = false;
        stopCountdown();
        hide("time");
        hide("right");
        hide("wrong");
        document.getElementById("start").innerHTML = "Start Game";
        document.getElementById("instruction").innerHTML = "Click on the right answer";
        document.getElementById("gameover").innerHTML = "";
    } else {
        // Start a new game
        playing = true;
        score = 0;
        document.getElementById("scoreNumber").innerHTML = score;
        document.getElementById("instruction").innerHTML = "Click on the right answer";
        show("time");
        timeRemaining = 30;
        document.getElementById("remainingTime").innerHTML = timeRemaining;
        hide("gameover");
        document.getElementById("start").innerHTML = "Reset Game";
        startCountdown();
        generateQA();
    }
}
