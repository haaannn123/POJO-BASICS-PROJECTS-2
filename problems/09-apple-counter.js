/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3

***********************************************************************/
// checking if any of the keys have the word 'apple' in them and return the count
// we need a count variable to keep track of the amount times apples is counted, return count
// iterate through the object keys.
function appleCounter(appleObj) {
  let count = 0
 for (let key in appleObj){ // gives us an array of keys
  let loweredKey = (key.toLowerCase()); // modifying keys
  if (loweredKey.includes('apple')){ 
    count += 1
  }
 }
 return count
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
