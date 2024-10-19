// Changing Guest List 

let guests: string[] = ["Babar Azam", "Virat Kohli", "Mansoori"];
console.log(`${guests[1]} can't make it to the dinner.`);

guests[1] = "Nikola Tesla";
guests.forEach(guest => console.log(`Dear ${guest}, I would like to invite you to dinner.`));
