"use strict";
/*
// Function Default Parameters
/*
const bookings = [];

const createBooking = function (flightNum = 1, numPassengers = 1, price = 1) {
  //  numPassengers = numPassengers || 1;
  //  price = price || 1;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);

  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);

*/
/*
const flight = "Lh124";
const rene = {
  name: "Rene",
  passport: 245264376347,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr " + passenger.name;

  if (passenger.passport === 245264376347) {
    alert("check in");
  } else {
    alert("wrong passport");
  }
};
/*
checkIn(flight, rene);

console.log(flight);
console.log(rene);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(rene);
checkIn(flight, rene);

// Javascript only does pass by value not by reference


const oneWord = function (str) {
  return str.replace(/ /g, "".toLowerCase());
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others.join(" ")];
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by> ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);

transformer("Javascript is the best!", oneWord);



const high5 = function () {
  console.log("👋");
};

// JS uses callback functions all the time

document.body.addEventListener("click", high5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey!");

greeterHey("Rene");

greet("Hello")("Rene");

// Challenge

const greetArr = greeting => name => console.log(${greeting}{name});

greetArr("Hi")("Rene")


const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  // Enhanced object literal
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

luftHansa.book(239, "Rene Reede");
luftHansa.book(635, "Mary Marita");
console.log(luftHansa);

const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

 

//Doesnt work
//book(23, "Sarah Williams");

// Call Method

book.call(eurowings,23,,"Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Markus Jeep")
console.log(lufthansa);

const swiss = {
  airLine: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
}

book.call(swiss, 254, "Mary Swisten");
console.log(swiss);

// Apply method

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData)

// Bind method

const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(23, "Steven Williams")

const bookEW23 = book.bind(eurowings, 23);

bookEW23("Rene");

// with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function(){

console.log(this);

  this.planes++;
  console.log(this.planes);
}

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,100));

const addVAT = addTax.bind(null, 0.23);
// addVat = value => + value + value * 0,23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
  return function(value) {
  return value + value * rate;
}
}

const addVAT2 = addTaxRate(0.23);
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: Javascript", "1:Python", "2:Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer(promptEnter) {

    for(const arrayItem of this.options) {
      
      console.log(arrayItem);
    }



    promptEnter = prompt(`${this.question} ${...this.options}`, " ");
    console.log(promptEnter);
  },
};

poll.registerNewAnswer();
