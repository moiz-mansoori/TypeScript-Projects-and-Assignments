// Shrinking Guest list

let guests: string[] = ["Moiz", "Ahmed", "Mansoori", "Babar Azam", "Ratan tata", "Kamran"];
console.log("I can invite only two people for dinner.");

while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));

guests.length = 0; // Clear the list
console.log(guests); // Check if the list is empty
