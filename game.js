
console.log("Asking user for his/her name...");
var userName = prompt("Please enter your name.");

console.log("variable created to keep the score ");
var count=0;

/*console.log("Asking user for his/her name until variable is not blank")
while (userName === ""){
userName =  prompt("Please enter your name.");
}*/

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


//questions 1 to 4
function runQuestions(){
var count =0;
var key = ["false","true","false","true"];
for (i=0; i<key.length; i++){
  var radioButtonName = "answer" +(i+1);
  var answer = document.forms[0].elements[radioButtonName].value;
  var finalScoreBoard = document.getElementById("scoreboard" +(i+1));
  console.log(finalScoreBoard);
  if(answer === key[i]){
    count++;
    finalScoreBoard.innerHTML += "<div class= 'crt'>Correct!!</div>" +            "<img class= 'icon' src='plus.png'>";

  }else{
    finalScoreBoard.innerHTML += "<div class= 'wrg'>Incorrect!!</div>" +          "<img class= 'icon' src='delete.png'>" ;
}
}
}
