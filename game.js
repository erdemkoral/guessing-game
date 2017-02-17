
/*console.log("Asking user for his/her name...");
var userName = prompt("Please enter your name.");

console.log("variable created to keep the score ");
var count=0;

/*console.log("Asking user for his/her name until variable is not blank")
while (userName === ""){
userName =  prompt("Please enter your name.");
}

console.log("Asking user for his/her name until variable is not blank")
var namePrompt = "Invalid Entry. Please enter your name.";
var nameCounter = 1;
while (userName === ""){
  nameCounter++;
  if (nameCounter > 3) {
    namePrompt = "Seriously! We need your name.";
  }
  userName =  prompt(namePrompt);
}



console.log("Asking user Question1");
function questionOne() {
  var question1 = prompt("True or False? Coffee in the United States is only grown in Hawaii and Puerto Rico.");
  var result1;

  if ((question1.toLowerCase() === "true")||(question1.toLowerCase() === "t")){
    //alert("Great!! " + userName + " ,you got it.");
    result1= ("Correct!!");
    count++;
  } else{
    //alert("Sorry:( " + userName +" ,you missed this one.");
    //result1 = ("Incorrect");
    result1= ("Incorrect!!");
  }

  var el = document.getElementById("answer1");
  el.textContent = result1;
};

questionOne();



console.log("Asking user Question2");
function questionTwo() {
  var question2 = prompt("True or False? Robusta coffee beans have three times as much caffeine than Arabica beans, but our of less quality.");
  var result2;

  if ((question2.toLowerCase() === "false")||(question2.toLowerCase() === "f")){
    //alert("Great!! " + userName + ". Your answer is correct.");
    result2 = ("Correct!!");
    count++;
  } else{
    //alert("Sorry:( " + userName +". It is only twice as much.");
    result2 = ("Incorrect!!");
  }

  var el = document.getElementById('answer2');
  el.textContent = result2;
};

questionTwo();


console.log("Asking user Question3");
function questionThree() {
  var question3 = prompt("True or False? Black coffee with no additives contains no calories.");
  var result3;

  if ((question3.toLowerCase() === "true")||(question3.toLowerCase() === "t")){
    count++;
    result3 = ("Correct!!");
  } else{
    result3 = ("Incorrect!!");
  }

  var el = document.getElementById('answer3');
  el.textContent = result3;
};
questionThree();


console.log("Asking user Question4.");
function questionFour() {
  var question4 = prompt("How many cups of coffee does an avereaga person drink a day?");
  var result4 = question4

  if (question4 ==2){
    count++;
    result4 = ("Correct!!");
  } else if (question4 > 2) {
    result4 = ("Incorrect.Your answer is too high!!");
  } else {
    result4 = ("Incorrect.Your answer is too low!!");
  }

  var el = document.getElementById('answer4');
  el.textContent = result4;
};
questionFour();


console.log("Asking user Question5.");
function questionFive() {
  while(question5 !== 2 ){
    var question5 = prompt("How old am I?");
    question5 = parseInt(question5);
    if (question5 > 2){
      alert("Your guess is too high. Try again.");
    } else if (question5 < 2){
      alert("Your guess is too low. Try again.");
    }

    var msg;
    if(question5 === 2){
      msg = ("Correct!!");
      count++;
    }
    var el = document.getElementById('answer5');
    el.textContent =question5 + " is " +msg;
  }
};
questionFive();

console.log(question6);
var question6 = prompt("What is my favorite coffe drink?");
var result6 = question6
var coffee = ["espresso","cappucino","mocha"];
for(i=0; i<3; i++){
  if (coffee[i]===question6.toLowerCase()){
  result6=("Correct!!");
  count++;
}else{
  result6=("Incorrect!!");
}
var el = document.getElementById('answer6');
el.textContent = result6;
};


console.log("Showing the total score.")
var score;
if (count === 6) {
  score = (" Perfect Score!!! Your total score is " + count + "!!");
} else if (3< count <6) {
  score = ("Not Bad!! Your total score is " + count + "!!");
} else {
  score = ("You know nothing Jon Snow!! Your total score is " + count + "!!");
}


var doc = document.getElementById('scoreBoard');
doc.textContent = score;*/
