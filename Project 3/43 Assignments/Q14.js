// # More guests 
var guests = ["Babar Azam", "Jason Roy", "Mansoori"];
console.log("I found a bigger dinner table.");
guests.unshift("Shaheen Shah");
guests.splice(Math.floor(guests.length / 2), 0, "Ada Lovelace");
guests.push("Moiz");
guests.forEach(function (guest) { return console.log("Dear ".concat(guest, ", I would like to invite you to dinner.")); });
