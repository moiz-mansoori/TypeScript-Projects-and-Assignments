// Large Shirts 

function make_shirt(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}"`);
  }
  
  make_shirt();
  make_shirt('M');
  make_shirt('S', 'Custom Message');
  