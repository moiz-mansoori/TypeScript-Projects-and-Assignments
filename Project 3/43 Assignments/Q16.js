// Seeing the World 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Germany", "Italy", "Australia", "Canada", "USA"];
console.log(places);
console.log(__spreadArray([], places, true).sort());
console.log(places);
console.log(__spreadArray([], places, true).sort().reverse());
console.log(places);
places.reverse();
console.log(places);
places.reverse();
console.log(places);
places.sort();
console.log(places);
places.sort(function (a, b) { return b.localeCompare(a); });
console.log(places);
