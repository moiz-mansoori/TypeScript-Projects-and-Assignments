// Seeing the World 

let places: string[] = ["Germany", "Italy", "Australia", "Canada", "USA"];

console.log(places);
console.log([...places].sort());
console.log(places);
console.log([...places].sort().reverse());
console.log(places);

places.reverse();
console.log(places);
places.reverse();
console.log(places);

places.sort();
console.log(places);
places.sort((a, b) => b.localeCompare(a));
console.log(places);
