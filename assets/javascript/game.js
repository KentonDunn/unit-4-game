console.log("Linked");

//global variables

var randomNumber = 50;
var winCounter = 0;
var lossCounter = 0;
var crystalsTotal = 0;


var runGame = function()
{
    //generate a random number between 19-120;
    var randomNumber = Math.floor((Math.random() * (120-19+1)) + 19);
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);  

    //generate random numbers for each button;
    var btn1 = Math.floor((Math.random() * (12-1+1)) +1);
    console.log("green: " +btn1);
    var btn2 = Math.floor((Math.random() * (12-1+1)) +1);
    console.log("red: " +btn2);
    var btn3 = Math.floor((Math.random() * (12-1+1)) +1);
    console.log("black: " +btn3)
    var btn4 = Math.floor((Math.random() * (12-1+1)) +1);
    console.log("blue: " +btn4);



    //assigning button clicks
    $(".btn-1").click (function(){
        console.log("Green adds: " + btn1);
        crystalsTotal += btn1;
        console.log("Score is: " + crystalsTotal);
    })
    $(".btn-2").click (function(){
        console.log("Red adds: " + btn2);
        crystalsTotal += btn2;
        console.log("Score is: " + crystalsTotal);
    })
    $(".btn-3").click(function(){
        console.log("Black adds: " + btn3);
        crystalsTotal += btn3;
        console.log("Score is: " + crystalsTotal);
    })
    $(".btn-4").click(function(){
        console.log("Blue adds: " + btn4);
        crystalsTotal += btn4;
        console.log("Score is: " + crystalsTotal);
    })

    //showing crystals total in html
    $("#crystalTotals").text(crystalsTotal);
    console.log(crystalsTotal);

    //adding to the crystals total with each click
    $(".btn").click(function(){
        $("#crystalTotals").text(crystalsTotal);
        console.log("You clicked a button!");

    var resetGame = function(){  
            //generate a random number between 19-120;
            var randomNumber = Math.floor((Math.random() * (120-19+1)) + 19);
            console.log(randomNumber);
            $("#randomNumber").text(randomNumber);  
            //Crystal buttons get new values between 1-12;
            
                //assign the new values to button clicks      
             //return crystal total back to 0
           
                 
        }
      
    
        //game win/lose logic.  I'm shaky on this stuff!
        if (crystalsTotal === randomNumber){
            winCounter++;
            alert("You've won!");
            //confirm("Play again?");
            $("#winCounter").text(winCounter);
            console.log("WIN!");
            resetGame();
            //runGame();
        }
            else if (crystalsTotal >= randomNumber){
            $("#lossCounter").text(lossCounter);
            lossCounter++;
            alert("You've lost.");
            //confirm("Play Again?");
            console.log("LOSE!");
            resetGame();
            //runGame();
        }
    })
}
    

runGame();
   