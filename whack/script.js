/*----------Starting Display----------*/

var startDisplay = document.querySelector('.start-state');
var instructions = document.querySelector('#instructions');
instructions.addEventListener('click', showInstructions);
var instructionDisplay = document.querySelector('.instruction-display');
var backButton = document.querySelector('#back');
backButton.addEventListener('click', backToMenu);
var selection = document.getElementsByName('difficultyLevel')
var startButton = document.querySelector('#start');
startButton.addEventListener('click', drawBoard);

/*----------Ending Display----------*/

var endDisplay = document.querySelector('.end-state');
var newHighScore = document.querySelector('.new-record-notif')
var endMessage = document.querySelector('.outcome-message');
var restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', restartGame);

/*----------Game Display----------*/

var gameDisplay = document.querySelector('.game-display');
var grid = document.querySelector('#grid');
var cellClass;
var cells;
var moles = document.querySelectorAll('.mole')
var gemDisplay = document.querySelector('#gemNum');
var scoreDisplay = document.querySelector('#scoreNum');
var secondsLeft = document.querySelector('#secondsLeft');
var numLives = document.querySelector('#numLives');

/*----------Music & Sound Effects----------*/

var themeSong = new Audio("music/Slime Farm Theme.mp3")
var boinkedSound = new Audio("music/Boinked.mp3");
var bulliedSound = new Audio("music/Bullied.mp3");
var gemSound = new Audio("music/Gem.mp3");
var mauledSound = new Audio("music/Mauled.mp3");
var angryBoinkedSound = new Audio("music/AngryBoinked.mp3")

/*----------Game Variables----------*/

var difficulty;
var lastSelectedCell;
var timesUp = true;
var score = 0;
var lives = 10;
var currentGems = 0;
var totalGemsCollected = 0;
var angrySlimesHit = 0;
var timeLeft = 60;
var numberOfCells = [16, 25, 36]
var setCells;
//High scores for different levels
var easyStorageName = "ehighScore";
localStorage.getItem("ehighScore") || 0;
var normStorageName = "nhighScore";
localStorage.getItem("nhighScore") || 0;
var exStorageName = "exhighScore";
localStorage.getItem("exhighScore") || 0;
//Score benchmarks for different ending messages; varies with difficulty level 
var easyScoreRange = [225, 325, 5]
var normalScoreRange = [150, 250, 5]
var expertScoreRange = [115, 215, 10]


function drawBoard (){
    //Verify that radio button is checked
    if(document.querySelector('input[name="difficultyLevel"]:checked') == null) {
        alertUser();
    }
    else {
        //Remove start display; show game display
        startDisplay.classList.remove('show');
        gameDisplay.classList.add('show');
        themeSong.currentTime = 0;
        themeSong.loop = true; 
        themeSong.volume = 0.5;
        themeSong.play();
        //Draw grid according to difficulty level chosen
        if (selection[0].checked){
                grid.classList.add('easy');
                difficulty = 'easy';
                setCells = numberOfCells[0];
                cellClass = 'cell sm';
                lives = 10;
            }
        else if (selection[1].checked){
            grid.classList.add('normal');
            difficulty = 'normal'
            setCells = numberOfCells[1];
            cellClass = 'cell md';
            lives = 8;
        }
        else if (selection[2].checked){
            grid.classList.add('expert');
            difficulty = 'expert'
            setCells = numberOfCells[2];
            cellClass = 'cell';
            lives = 6;
        }
        for (var i = 0; i < setCells; i++){
            var newCell = document.createElement('div');
            newCell.setAttribute('class', cellClass);
            grid.appendChild(newCell);
            cells = document.querySelectorAll('.cell');
        }
        numLives.textContent = lives;
        newGame();
    }
}

function newGame () {
    //start countdown
    countDown();
    //reset display
    scoreDisplay.textContent = score;
    gemDisplay.textContent = currentGems;
    //run game
    timesUp = false;
    //run slime spawn functions with different intervals depending on difficulty
    if (difficulty == 'easy'){
        spawnSlimes('slime', 2000, 2200);
        spawnSlimes('sad', 2000, 2200);
        spawnAngrySlimes(10000);
        spawnGems(3000);
    } else if (difficulty == 'normal'){
        spawnSlimes('slime', 1800, 2000);
        spawnSlimes('sad', 1800, 2000);
        spawnAngrySlimes(10000);
        spawnGems(4000);
    } else if (difficulty =='expert'){
        spawnSlimes('slime', 1500, 1800);
        spawnSlimes('sad', 1500, 1800);
        spawnAngrySlimes(5000);
        spawnGems(5000);
    }
}



/*----------Helper Functions----------*/

function showInstructions (){
    startDisplay.classList.remove('show');
    instructionDisplay.classList.add('show');
}

function backToMenu (){
    instructionDisplay.classList.remove('show');
    startDisplay.classList.add('show');
}

function alertUser (){
    startButton.textContent = 'Please select difficulty!'
    setTimeout (function(){
        startButton.textContent = 'Start'
    }, 800) 
}

function countDown (){
    var timerInterval = setInterval (function () {
         if (timeLeft <= 0 || lives < 1){
            clearInterval(timerInterval);
            timesUp = true;
            endGame();
         }
         secondsLeft.textContent = timeLeft;
         timeLeft--;
     }, 1000)
 }
 

function randomCell (cells) {
    //Choose randomCell for sprite to pop up in
    var index = Math.floor(Math.random() * cells.length)
    var cell = cells[index];
    //Check that cell doesn't already contain a sprite
    if (cell.classList.contains('sprite')){
        randomCell(cells);
    }
    return cell;
}

function randomInterval (min, max) {
    //set random duration for how long sprite stays popped up
    return Math.floor(Math.random() * (max-min+1) + min);
}

//Make slimes appear
function spawnSlimes (type, minInt, maxInt){
    var time = randomInterval(minInt, maxInt);
    var position = randomCell(cells);
    position.classList.add(type, 'sprite');
    position.addEventListener('mousedown', hitSlimes);
    //remove slime & eventlistener after interval; continue making slimes if time remains
    setTimeout (function(){
        position.classList.remove(type, 'sprite');
        position.removeEventListener('mousedown', hitSlimes)
        if (!timesUp){
            spawnSlimes(type,minInt, maxInt);
        }
    }, time) 
}

//Make gems appear
function spawnGems(spawnRate){
    var gemInterval = setInterval (function(){
    var position = randomCell(cells);    
    position.classList.add('gem', 'sprite');
    position.addEventListener('mousedown', collectGems);
    if (timeLeft <= 0 || lives <= 0){
        clearInterval(gemInterval);
        endGame(); 
    }
    setTimeout(function(){
        position.classList.remove('gem', 'sprite');
        position.removeEventListener('mousedown', collectGems)
        }, 1000)
    }, spawnRate) 
 }

//Add gems to total when clicked
function collectGems (){
    if (this.classList.contains('gem')){
        gemSound.play();
        gemSound.currentTime = 0;
        currentGems += 1;
        totalGemsCollected += 1;
        gemDisplay.textContent = currentGems;
        this.classList.remove('gem', 'sprite');
        this.removeEventListener('mousedown', collectGems);
    }
}

//Check if player has enough gems to hit angry slimes
function checkGemTotal (cell){
    if (currentGems >= 3){
        cell.addEventListener('mousedown', hitAngrySlime)
        console.log('Angry slimes can now be hit!')
    } 
}

//Deduct 3 gems for every hit; add 25 to score
function hitAngrySlime (){
    if (this.classList.contains('angry') && currentGems >= 3){
        currentGems -= 3;
        gemDisplay.textContent = currentGems;
        console.log('gems traded for chance to hit angry slime!')
        angryBoinkedSound.play();
        angryBoinkedSound.currentTime = 0;
        score += 25;
        scoreDisplay.textContent = score;
        angrySlimesHit += 1
        console.log('you hit an angry slime!')
        this.classList.remove('angry', 'sprite');
        this.removeEventListener('mousedown', hitAngrySlime)
    } 
}

//Make angry slime appear
function spawnAngrySlimes(spawnRate){
    var angryInterval = setInterval (function(){
    var position = randomCell(cells);
    position.classList.add('angry', 'sprite');
    checkGemTotal(position);
    if (timeLeft <= 0 || lives <= 0){
        clearInterval(angryInterval);
        endGame(); 
    }
    else if (timeLeft >= 40 && lives > 0){
        angrySlimeAttack(100, 0.4);
    } 
    else if (timeLeft >= 20 && lives > 0){
        angrySlimeAttack(200, 0.5);
    }
    else if (timeLeft > 0 && lives > 0){
        angrySlimeAttack(300, 0.6);
    }
         setTimeout(function(){
             position.classList.remove('angry', 'sprite');
         }, 1000)
     }, spawnRate) 
 }


//Calculate chances of angry slime successfully attacking 
function angrySlimeAttack (minScore, chance){
    if (score < minScore ? Math.random() < 0.8 : Math.random() < chance){
            //Sound effect only plays if attack was successful
            mauledSound.play();
            mauledSound.currentTime = 0;
            lives -= 1;
            numLives.textContent = lives;
            console.log('hit!');
    } 
    else {
        console.log('attack missed!');
        
    }
}

//Clicking a slime adds to score or deducts a life
function hitSlimes (){
    if (this.classList.contains('slime')){
        boinkedSound.play();
        boinkedSound.currentTime = 0;
        score += 10;
        scoreDisplay.textContent = score;
        this.classList.remove('slime', 'sprite');
    } else {
        console.log('penalty!');
        bulliedSound.play();
        bulliedSound.currentTime = 0;
        lives -= 1;
        if (lives < 1){
            timesUp = true;
            numLives.textContent = 0;
            endGame();
        }
        numLives.textContent = lives;
        this.classList.remove('sad', 'sprite');
    }
    this.removeEventListener('mousedown', hitSlimes);
}


//Generate end text
function endingText (scoreRange){
    var endText;
    if (score < scoreRange[0]){
        endText = 'Most of your slimes escaped...maybe find a new line of work?';
    } else if (score >= scoreRange[0] && score < scoreRange[1]){
        endText = "You herded most of your slimes back--all in a day's work!";
    } else if (score >= scoreRange[1]){
        endText = "No slime is escaping on your watch!";
    } else if (score >= scoreRange[1] && angrySlimesHit > scoreRange[2]){
        endText = "You're one tough cookie--those wild slimes ain't seen nothin' yet!";
    }
    return endText;
}

//Check for high score
function recordScores (name){
    if (score > localStorage.getItem(name)) {
        localStorage.setItem(name, score);
        newHighScore.textContent = `You've set a new record score of ${localStorage.getItem(name)}!`;
    }
    else if (score < localStorage.getItem(name)) {
        newHighScore.textContent = `The record score to beat is: ${localStorage.getItem(name)}`;
    }  
}


//Clear game display; show ending display
function endGame (){
    var endingMsg;
    if (difficulty == 'easy'){
        endingMsg = endingText(easyScoreRange);
        recordScores(easyStorageName);
    } else if (difficulty == 'normal'){
        endingMsg = endingText(normalScoreRange);
        recordScores(normStorageName);
    } else {
        endingMsg = endingText(expertScoreRange);
        recordScores(exStorageName);
    }
    gameDisplay.classList.remove('show');
    endDisplay.style.display = 'flex';
    endMessage.innerHTML = `${endingMsg} <br><br><br> Score: ${score} <br><br> Gems collected: ${totalGemsCollected} <br><br> Wild slimes boinked: ${angrySlimesHit}`;
}

//Reset game state and go back to menu
function restartGame (){
    themeSong.pause();
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
      }
    grid.removeAttribute('class');
    score = 0;
    totalGemsCollected = 0;
    currentGems = 0;
    gemDisplay.textContent = currentGems;
    angrySlimesHit = 0;
    timeLeft = 60;
    endDisplay.style.display = 'none';
    startDisplay.classList.add('show');
}

