// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!\n");
   let user_input = input.question("Enter a word: "); 
   return user_input;
   //console.log(oldScrabbleScorer(user_input));
};

function simpleScore(word)
{
  return word.length;
} 

function vowelBonusScore(word)
{
  let score = 0;

   for (let i=0; i< word.length; i++)
   {
     if (word[i].toUpperCase() == "A" || word[i].toUpperCase() == "E" || word[i].toUpperCase() == "I" || word[i].toUpperCase() == "O"  || word[i].toUpperCase() == "U") {
       score += 3; 
     } else {
       score += 1;
     }
  }
  
  return score;
}

//let simpleScore;

//let vowelBonusScore;

//let scrabbleScore;
function scrabbleScore(word) {	
  word = word.toLowerCase();
  let point = 0;

	for (let i = 0; i < word.length; i++) {
    for (const pointValue in newPointStructure) {
		  if (word[i] == pointValue)
      {
        point += newPointStructure[word[i]];
      }
	  }
	}

	return point;
}

const scoringAlgorithms = [
 {name : "Simple Score",
description : "Each letter is worth 1 point.",
scoreFunction : "simpleScore"},

{name : "Bonus Vowels",
description : "Vowels are 3 pts, consonants are 1 pt.",
scoreFunction : "vowelBonusScore"},

{name : "Scrabble",
description : "The traditional scoring algorithm.",
scoreFunction : "scrabbleScore"}
];

function scorerPrompt(word) {
  console.log("Which scoring algorithm would you like to use?");
  console.log("");
  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system");
  let user_input = input.question("Enter 0, 1, or 2: ");

  if ( user_input == 0 ) {
    console.log( "Score for '" + word + "' : " + simpleScore(word));
  }
  else if ( user_input == 1 ) {
    console.log( "Score for '" + word + "' : " + vowelBonusScore(word));
  }
  else if ( user_input == 2 ) {
    console.log("Score for '" + word + "' : " +  scrabbleScore(word));
  }

}

function transform(oldPointStructure) {
  let newPointStructure = {};

  for (let i = 1; i <= 10; i++)
  {
    if (i in oldPointStructure)
    {
      for (let x = 0; x < oldPointStructure[i].length; x++)
      {
        newPointStructure[oldPointStructure[i][x].toLowerCase()] = i;
      }
    }
  }
  
  return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   scorerPrompt(initialPrompt());

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

