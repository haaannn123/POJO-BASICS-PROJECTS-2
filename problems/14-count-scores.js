/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/
// return an object with total scores
// iterate through the array to get objects
// grab the key(person) + grab the value (score)
// check if object exists if it doesn't add it plus the score
function countScores(people) {
  let obj = {}
for (let i in people){
  let person = Object.values(people[i])[0]// this gives me the value of at index 0; // Anthony, Fred, Anthony, Winnie
  let score = Object.values(people[i])[1] // THIS IS NOT WORKING
  if (obj[person] === undefined){
    obj[person] = score
  } else {
    obj[person] += score
  }
}
// console.log(obj)
return obj
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
