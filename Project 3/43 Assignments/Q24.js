// Alien Colors #2 
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
else {
    console.log("The player just earned 10 points.");
}
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("This will not be printed.");
}
else {
    console.log("The player just earned 10 points.");
}
