/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/
// understand the problem
// check if keyString exists inside the object or if it is a key.

function keyInObjectArray(objArray, keyString) {
// iterate through the array to get each object
for (let i = 0; i < objArray.length; i++){
  let objects = objArray[i]
  // grab the keys of the objects
  let arrOfKeys = (Object.keys(objects))
  if (arrOfKeys.includes(keyString)){
    return true
  }

}
return false
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
