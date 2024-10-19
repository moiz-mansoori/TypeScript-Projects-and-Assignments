// Sandwiches 
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Your sandwich contains: ".concat(items.join(', ')));
}
make_sandwich('Ham', 'Cheese', 'Lettuce');
make_sandwich('Turkey', 'Tomato', 'Mayo');
make_sandwich('Bacon', 'Avocado', 'Egg', 'Spinach');
