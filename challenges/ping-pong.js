/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

// YOUR CODE HERE

function pingPong(table) {
  // This use of findIndex returns the first index of a "truthy" data structure (i.e. not null)
  // That is, it finds the index of the pingpong within the table object.
  var objectIndex = table.findIndex(function(el) {
    return !!el;
  });
  var object = table[objectIndex];
  // Move right when the step count/(table length - 1) rounded down is an even number
  // Example, when the table is size 4 and step count is equal to 8, floor(8/3) is 2. 
  // 2 % 2 = 0, so we'll move right.
  if (Math.floor(object.steps/(table.length-1)) % 2 === 0) {
    // moving right
    table[objectIndex + 1] = object;
  } else {
    // moving left
    table[objectIndex - 1] = object;
  }
  object.steps += 1;
  table[objectIndex] = null;
  return table;
}

// --------------- STRETCH #2 (set the 'speed') ---------------

function pingPong(table, speed) {
  var objectIndex = table.findIndex(function(el) {
    return !!el;
  });
  var object = table[objectIndex];
  // This loop runs as many times as the 'speed'
  for (var i=0; i<speed; i++) {
    if (Math.floor(object.steps/(table.length-1)) % 2 === 0) {
      table[objectIndex + 1] = object;
    } else {
      table[objectIndex - 1] = object;
    }
    object.steps += 1;
    table[objectIndex] = null;
  }
  return table;
}
