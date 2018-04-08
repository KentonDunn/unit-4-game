console.log("Linked");

//global variables

var randomNumber = 50;
var winsCounter = 0;
var lossesCounter = 0;
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
        console.log("You clicked green!");
    })
    $(".btn-2").on("click", function(){
        console.log("You clicked red!");
    })
    $(".btn-3").on("click", function(){
        console.log("You clicked black!");
    })
    $(".btn-4").on("click", function(){
        console.log("You clicked blue!");
    })

    //adding to the crystals total with each click
    $(".btn").on("click", function(){
        crystalsTotal += btn1;
        crystalsTotal += btn2;
        crystalsTotal += btn3;
        crystalsTotal += btn4;
        console.log(crystalsTotal);
        console.log("You clicked a button!");
    })
}




//Wins and losses div   
    //possibly use HTML solution


//crystal buttons div (B1, B2, B3, B4)
        //each button will have a random function assigned
        //each random crystal button will generate a number between 1-12 
    // Here we created an on-click event that responds to button clicks of the crystal image.
  $("#crystals").on("click", ".crystal-image", function() {

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
    //randomNumber generates a new number
    //Crystal buttons get new points values
    //generate a random crytal value between 1-12;
    var btn1 = Math.floor((Math.random() * (12-1+1)) +1);
    console.log(btn1);
    var btn2 = Math.floor((Math.random() * (12-1+1)) +1);
    var btn3 = Math.floor((Math.random() * (12-1+1)) +1);
    var btn4 = Math.floor((Math.random() * (12-1+1)) +1);

    //total counter goes back to 0;
    //update html $('.randomNumber') div and totalNumber div is reset;
       

}
  })

  runGame();

//Main Process (Call Functions to execute