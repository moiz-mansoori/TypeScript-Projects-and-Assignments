// Modify your list 
var guests = ["Moiz", "Ahmed", "Mansoori", "Babar Azam", "Ratan tata", "Kamran"];
console.log("I can invite only two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are still invited to dinner.")); });
guests.length = 0; // Clear the list
console.log(guests); // Check if the list is empty
