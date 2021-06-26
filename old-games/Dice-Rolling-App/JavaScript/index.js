var sumOutput = document.querySelector("#output-sum");
var arrayOutput = document.querySelector("#output-rolls");
var rollRequest = document.querySelector("#roll-request");

function rollDice(numDice, sidesOnDie, addition){
  var rolls = [];
  rollSum = 0;
  for(var i = 0; i < numDice; i-=-1){
    var roll = Math.floor(Math.random()*sidesOnDie+1);
    rolls.push(roll);
    rollSum+=roll;
  }
  rollSum+=parseInt(addition);
  rollRequest.removeAttribute("hidden");
  rollRequest.innerHTML = numDice + "d" + sidesOnDie + "+" + addition;
  sumOutput.removeAttribute("hidden");
  sumOutput.innerHTML = rollSum;
  arrayOutput.removeAttribute("hidden");
  arrayOutput.innerHTML = rolls;
}
