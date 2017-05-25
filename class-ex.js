class Animal {
  constructor( name, color) {
    this.name = name;
    this.color = color;
    this.numTails = 1;
  }
  poop(){
    return 'Everybody poops!';
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name, color);
  }

  meow(){
    return (this.name + 'says Meow!');
  }
}

class Dog extends Animal {
  // constructor default function for every class
  // job is to construct assign objects properties their values
  constructor(name, color) {
    super(name, color);
  }
  // methods come after the constructor
  bark(){
    // console.log('Woof!');
    return (this.name + ' says: Woof!');
  }
}

// New keyword allows us to create an instance of our class
const newDog = new Dog('barkly', 'brown');
const newCat = new Cat('Biddy', 'gray and white');

console.log('our dog', newDog);
console.log(newDog.bark());
console.log(newDog.poop());
console.log(newCat.meow());
console.log(newCat.name, 'has', newCat.numTails, 'tail.');
