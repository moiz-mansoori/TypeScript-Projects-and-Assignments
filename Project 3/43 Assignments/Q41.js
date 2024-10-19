// Unchanged Magicians 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['David Blaine', 'Penn & Teller', 'Dynamo'];
function make_great(names) {
    return names.map(function (name) { return "the Great ".concat(name); });
}
function show_magicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
var great_magicians = make_great(__spreadArray([], magicians, true));
show_magicians(magicians);
show_magicians(great_magicians);
