const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const names = ["Alice", "Bob", "Charlie"];

const lengths = names.map(name => name.length);
console.log(lengths); // Output: [5, 3, 7]

const person = {
    name: "John",
    sayHello: function () {
      setTimeout(() => {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    }
  };
  
  person.sayHello(); // Output: Hello, John!
  