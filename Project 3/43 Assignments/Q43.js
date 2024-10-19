// Cars 
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (option) { return Object.assign(car, option); });
    return car;
}
console.log(car_info('Toyota', 'Camry', { color: 'blue', year: 2021 }));
console.log(car_info('Honda', 'Accord', { color: 'black', year: 2020 }, { sunroof: true }));
