// Changing Guest List 
var guests = ["Babar Azam", "Virat Kohli", "Mansoori"];
console.log("".concat(guests[1], " can't make it to the dinner."));
guests[1] = "Nikola Tesla";
guests.forEach(function (guest) { return console.log("Dear ".concat(guest, ", I would like to invite you to dinner.")); });
