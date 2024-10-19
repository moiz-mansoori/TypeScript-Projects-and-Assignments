// Great Magicians 

let magicians: string[] =  ['David Blaine', 'Moiz & Mansoori', 'Dynamo'];

function make_great(names: string[]): string[] {
  return names.map(name => `the Great ${name}`);
}

function show_magicians(names: string[]): void {
  names.forEach(name => console.log(name));
}

magicians = make_great(magicians);
show_magicians(magicians);
