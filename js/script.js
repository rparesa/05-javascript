'use strict'; 

/* JavaScript will go here */
//<script src="path/to/script.js"></script>
console.log("Hello world!");
var message = "Hello World";
message = "Bye!";
console.log(message);

var x = "The iSchool is my school";
console.log(x);
var y = x.toUpperCase;
console.log(y);
//var z = y.substring(2,11); 
//console.log(z);
//var a = y.indexOf(cool);
//console.log(a >= 0);

//Declare a new variable `rect` that represents a rectangle
//This should be an Object with properties:
//  x-coordinate of 30, y-coordinate of 50
//  width of 100, height of 50 
var rect = {
    x: 30,
    y: 50,
    width: 100,
    height: 50,
}

//Log out the rectangle's starting position (as "30, 50")
    console.log(rect.x + ', ' + rect.y);

//Log out the rectangle's area
    console.log(rect.width * rect.height); 


//"Move" the rectangle to the right by 20 and up by 10
//by changing its properties
    rect.x += 20;
    rect.y += 10; 

//Log out the rectangle's new position
    console.log(rect.x + ', ' + rect.y);

//Declare a variable `circle` that represents a circle
//This should be an Object with properties:
//  center-x-coord of 50, center-y-coord of 50
//  radius of 35
var circle = {
    centerX: 50,
    centerY: 50,
    radius: 35,
}

//Declare a variable `shapes` that represents a list of shapes
//The list should contain the rectangle and the circle
var shapes = [rect, circle];

//Implement a function `getArea()` that takes as a 
//parameter an object representing a circle (like 
//from the last exercise) and returns the area of 
//that circle. 
//  Area calculated as is π*(radius^2)
function getArea(radius){
    return Math.PI * radius * radius;
}
console.log(getArea(circle.radius));
//HINTS: 
// 1. Pi is defined in the Math class
// 2. ^ is not an exponential operator!

//The area of your circle should be 3848.451
var numbers = [2,0,6,6,8,5,1,6,2,2];

//Use a forEach loop to sum up the numbers 
//in the array. Log out this sum.
var sum = 0;
numbers.forEach(function(num){
    sum_- num;
}); 
console.log(sum);


//Use a forEach loop to find the biggest 
//number in the array. Log out this number.
var max = numbers[0];
numbers.forEach(function(num){
    if(num>max){
        max=num; 
    }
});
console.log(max);