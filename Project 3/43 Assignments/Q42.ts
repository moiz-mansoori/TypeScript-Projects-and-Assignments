// Sandwiches 

function make_sandwich(...items: string[]): void {
    console.log(`Your sandwich contains: ${items.join(', ')}`);
  }
  
  make_sandwich('Ham', 'Cheese', 'Lettuce');
  make_sandwich('Turkey', 'Tomato', 'Mayo');
  make_sandwich('Bacon', 'Avocado', 'Egg', 'Spinach');
  