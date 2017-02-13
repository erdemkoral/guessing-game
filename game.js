
console.log("Asking user for his/her name...");
var userName = prompt("Please enter your name.");

console.log("variable created to keep the score ");
var count=0;

console.log("Asking user for his/her name until variable is not blank")
while (userName === ""){
userName =  prompt("Please enter your name.");
}


console.log("Asking user Question1");
var question1 = prompt("True or False? Coffee in the United States is only grown in Hawaii and Puerto Rico.");
if ((question1.toLowerCase() === "true")||(question1.toLowerCase() === "t")){
  alert("Great!! " + userName + " ,you got it.");
  count++;
} else{
  alert("Sorry:( " + userName +" ,you missed this one.");
}

console.log("Asking user Question2");
var question2 = prompt("True or False? Robusta coffee beans have three times as much caffeine than Arabica beans, but our of less quality.");
if ((question2.toLowerCase() === "false")||(question2.toLowerCase() === "f")){
  alert("Great!! " + userName + ". Your answer is correct.");
  count++;
} else{
  alert("Sorry:( " + userName +". It is only twice as much.");
}

console.log("Asking user Question3");
var question3 = prompt("True or False? Black coffee with no additives contains no calories.");
if ((question3.toLowerCase() === "true")||(question3.toLowerCase() === "t")){
  alert("Great!! " + userName + ". Your answer is correct.");
  count++;
} else{
  alert("Sorry:( " + userName +" ,you missed this one.");
}


console.log("Asking user Question4.");
var question4 = prompt("How many cups of coffee does an avereaga person drink a day?");
console.log(typeof question4 )
if (question4 ==2){
  count++;
  alert("Great!! " + userName + ". Your answer is correct.");
} else if (question3 > 2) {
  alert("Sorry:( " + userName +". Your answer is too high.");
} else {
  alert("Sorry:( " + userName +". Your answer is too low.");
}

console.log("Showing the total score.")
alert("Congrats.You have answered " +count+" of 4questions right." )
