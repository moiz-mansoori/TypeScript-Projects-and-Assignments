// Cars 

function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car = { manufacturer, model };
    options.forEach(option => Object.assign(car, option));
    return car;
  }
  
  console.log(car_info('Toyota', 'Camry', { color: 'blue', year: 2021 }));
  console.log(car_info('Honda', 'Accord', { color: 'black', year: 2020 }, { sunroof: true }));
  