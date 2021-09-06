var input1
var input2
var value1
var value2
var Button
var answer
var Button1
var Button2
function addition(){
answer = value1 + value2
}
function subtraction(){
  answer = value1 - value2
}
function multiplication(){
  answer = value1 * value2
}
function setup() {
  createCanvas(400,400);
answer = 0
input1 = createInput()
input2 = createInput()
input1.position(50,100)
input2.position(200,100)
Button = createButton("add")
Button.position(50,200)
Button.mouseClicked(addition)
Button = createButton("subtract")
Button.position(100,200)
Button.mouseClicked(subtraction)
Button = createButton("multiply")
Button.position(100,300)
Button.mouseClicked(multiplication)
}

function draw() 
{
  console.log(answer)
  background(30);
value1 = parseInt(input1.value())
value2 = parseInt(input2.value())
}




