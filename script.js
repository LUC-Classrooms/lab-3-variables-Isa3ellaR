/* Lab 3b - Declare Your Own Variables
 * Declare and use a variable in a P5 sketch
 * 
 */

//declare a global variable and assign it a number value on the next line:
var x = 200;
var y = 125
var k = 50
var a = 70
function setup() {
  createCanvas(400, 300); // creates a drawing canvas
}

function draw() {
  // background is drawn first
  background(255, 246, 199, 100); // light gray

  // call a simple P5 drawing function, such as ellipse() using your new variable(s) in place of arguments
  fill(255, 199, 254)
  ellipse(x, y, a, a)
  ellipse (y, x, k, k)
  ellipse (k, y, a, x)
}
