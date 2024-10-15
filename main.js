/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
**/ 

'use strict';

function exponent(base, exp) {
    let answer = base**exp;
    console.log(answer);    
}

exponent(5, 2);   
exponent(10, 3);  


rollDice(4, 6);    
randInt(-12, 12);

add3(num1, num2, num3)

let s = Math.sqrt(16);
console.log(s)

function square(value) {
    let answer = value**2;
}

let x = square(5);  
console.log(x);

function square(value) {
    let answer = value**2;
    return answer;         
}

function useless(value) {
    let answer = value**2;
    return;                
    console.log(answer);  
}

function randInt(min, max) {
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    return rnd;
}






Celsius = (Fahrenheit - 32) * 5/9
Fahrenheit = (Celsius * 9/5) + 32

function to_fahrenheit(celsius)




let f = to_fahrenheit(37);  // Should not print anything
console.log(f);             // Should print 99

f = to_fahrenheit(20);
console.log(f);             // Should print 68 



function to_celsius(fahrenheit)


let f = to_celsius(37);  
console.log(f);             

f = to_celsius(20);
console.log(f);  



function roll_dice(qty, sides)

let sum = roll_dice(3, 6);
console.log(sum);           // Prints maybe 7 or 14, etc




function area_circle(radius)



function cylinder_volume(radius, height)

