var playing = false;
var score;
var timeRemaining;
var action;
var correctAnswer;



document.getElementById("start").onclick = function(){

    
    if (playing == true){
       
        location.reload(); 
    }
    
    else
    {
       
        playing=true;
        score=0;        
        document.getElementById("scoreNumber").innerHTML=score;

           
        document.getElementById("instruction").innerHTML="Click on the right answer";

        
        show("time");

        
        timeRemaining = 30;
        document.getElementById("remainingTime").innerHTML=timeRemaining;

       
        hide("gameover");

       
        document.getElementById("start").innerHTML="Reset Game";

       
        startCountdown();

        
        generateQA();             
    }   
}


for(var i=1; i<5; i++){
    document.getElementById("answer"+i).onclick=function(){    
        if(playing==true){

            
            if (this.innerHTML==correctAnswer)
            { 
                
                score++;
                document.getElementById("scoreNumber").innerHTML=score;
               
               
                show("right");

               
                setTimeout(function(){
                    hide("right");
                },1000);    
                hide("wrong");
               
                generateQA();
            }
            else
            {  
             

               
                show("wrong");

               
                setTimeout(function(){
                    hide("wrong");
                }, 1000)
                hide("right");
            }             
        }
    }
}

//functions 

//start countdown 20sec
function startCountdown(){
    action = setInterval(function(){
        timeRemaining-=1;
        document.getElementById("remainingTime").innerHTML = timeRemaining;
        if(timeRemaining == 0)
        {//game over
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML= "<p>GAME OVER!</p><p>YOUR SCORE: " + score+ "</p>"; 
           
            hide("time");
            hide("right");
            hide("wrong");
            playing=false;
            document.getElementById("start").innerHTML = "Start Game";
        }
    },1000);
}


function generateQA(){
    
    var randomNumber1 = Math.round(Math.random()*10);   
    var randomNumber2 = Math.round(Math.random()*10);     

    document.getElementById("problem").innerHTML=randomNumber1+ " x " +randomNumber2;
    correctAnswer=randomNumber1*randomNumber2;  
    var answerBox= (Math.round(Math.random()*3))+1;

    
    document.getElementById("answer"+answerBox).innerHTML=correctAnswer; 

     
    var answers=[correctAnswer];

   
    for (var i=1; i<5; i++)
    {if (i!==answerBox)
    { 
        var wrongAnswer;
       
        do{
            wrongAnswer = (Math.round(Math.random()*10))*(Math.round(Math.random()*10));
        }            
        while(answers.indexOf(wrongAnswer)>-1)  

            document.getElementById("answer"+i).innerHTML=wrongAnswer;
       
        answers.push(wrongAnswer);
    }
    }
}


function stopCountdown(){
    clearInterval(action);
}
     
function hide(id){      
    document.getElementById(id).style.display="none";      
}   

function show(id){      
    document.getElementById(id).style.display="block";      
}    



