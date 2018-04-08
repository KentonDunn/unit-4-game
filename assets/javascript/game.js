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
    $(".btn-1").on("click", function(){
        console.log("Green adds: " + btn1);
        crystalsTotal += btn1;
        console.log("Score is: " + crystalsTotal);
    })
    $(".btn-2").on("click", function(){
        console.log("Red adds: " + btn2);
        crystalsTotal += btn2;
        console.log("Score is: " + crystalsTotal);
    })
    $(".btn-3").on("click", function(){
        console.log("Black adds: " + btn3);
        crystalsTotal += btn3;
        console.log("Score is: " + crystalsTotal);
    })
    $(".btn-4").on("click", function(){
        console.log("Blue adds: " + btn4);
        crystalsTotal += btn4;
        console.log("Score is: " + crystalsTotal);
    })

    //showing crystals total in html
    $("#crystalTotals").text(crystalsTotal);
    console.log(crystalsTotal);

    //adding to the crystals total with each click
    $(".btn").on("click", function(){
        $("#crystalTotals").text(crystalsTotal);
        console.log("You clicked a button!");

    var resetGame = function(){  
            //generate a random number between 19-120;
            var randomNumber = Math.floor((Math.random() * (120-19+1)) + 19);
            console.log(randomNumber);
            $("#randomNumber").text(randomNumber);  
            //Crystal buttons get new values between 1-12;
            var btn1 = Math.floor((Math.random() * (12-1+1)) +1);
            console.log("reset green: " +btn1);
            var btn2 = Math.floor((Math.random() * (12-1+1)) +1);
            console.log("reset red: " +btn2);
            var btn3 = Math.floor((Math.random() * (12-1+1)) +1);
            console.log("reset black: " +btn3);
            var btn4 = Math.floor((Math.random() * (12-1+1)) +1);
            console.log("reset blue: " +btn4);

             //return crystal total back to 0
             var crystalsTotal = 0;
             $("#crystalTotals").text(crystalsTotal);
             console.log(crystalsTotal);
        }
            
        
        //game win/lose logic.  I'm shaky on this stuff!
        if (crystalsTotal === randomNumber){
            winCounter++;
            alert("Great Job!");
            confirm("Play again?");
            $("#winCounter").text(winCounter);
            console.log("WIN!");
            //resetGame();
            runGame();
        }
            else if (crystalsTotal >= randomNumber){
            $("#lossCounter").text(lossCounter);
            lossCounter++;
            alert("You've lost.");
            confirm("Play Again?");
            console.log("LOSE!");
            //resetGame();
            runGame();
        }
    })
}
    

    //Wins and losses div   
    //possibly use HTML solution


    //crystal buttons div (B1, B2, B3, B4)
        //each button will have a random function assigned
        //each random crystal button will generate a number between 1-12 
    // Here we created an on-click event that responds to button clicks of the crystal image.
  $("#crystals").on("click", ".crystal-image", function() 
    {

    // Clicking the button triggers an alert message.
    alert("You clicked a crystal!");

    //your total score is 


    //results div 
    // this will add the random number generated for B1, B2, B3, B4

    //when the number in the results div equals the randomNumber
     //the wins will go up. 

     //if the number in the results div becomes larger than the randomNumber

     var youlikeMeat = true;
    //this will evaluate the value of this variable.  if it's true, it will do the function
     if (youlikeMeat){
        document.write("here is the meaty menu...");

     }


    //Functions Reusable Blocks of Code

    var resetGame = function(){
    var crystalsTotal = 0;

    //generate a random number between 19-120;
    var randomNumber = Math.floor((Math.random() * (120-19+1)) + 19);
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);  
    //Crystal buttons get new values between 1-12;
    var btn1 = Math.floor((Math.random() * (12-1+1)) +1);
    console.log(btn1);
    var btn2 = Math.floor((Math.random() * (12-1+1)) +1);
    var btn3 = Math.floor((Math.random() * (12-1+1)) +1);
    var btn4 = Math.floor((Math.random() * (12-1+1)) +1);
}
    })
    //total counter goes back to 0;
    //update html $('.randomNumber') div and totalNumber div is reset;
       



  runGame();

//Main Process (Call Functions to execute