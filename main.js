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


/** TEMPURATURE*/

function to_fahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}


function to_celsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius;
}





/** CIRCLE*/

function area_circle(radius) {
let area = Math.PI*radius**2
return area;
}


function cylinder_volume(radius, height) {
    let volume = area_circle(radius) * height;
    return volume;
}





/** TEST SCORE*/


function percent(score, total) {
    let mark = score/total;
    console.log(Math.round(mark * 100) + "%");
    return mark;
}



/** ROUNDING*/

function round(value, decimals) {
    let number = (Math.round(value*10**decimals))/10**decimals
    return number;
}

