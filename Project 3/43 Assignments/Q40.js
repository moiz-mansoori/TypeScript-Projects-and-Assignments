// Great Magicians 
var magicians = ['David Blaine', 'Penn & Teller', 'Dynamo'];
function make_great(names) {
    return names.map(function (name) { return "the Great ".concat(name); });
}
function show_magicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
magicians = make_great(magicians);
show_magicians(magicians);
