// # More guests 

let guests: string[] = ["Babar Azam", "Jason Roy", "Mansoori"];
console.log(`I found a bigger dinner table.`);

guests.unshift("Shaheen Shah");
guests.splice(Math.floor(guests.length / 2), 0, "Ada Lovelace");
guests.push("Moiz");

guests.forEach(guest => console.log(`Dear ${guest}, I would like to invite you to dinner.`));
