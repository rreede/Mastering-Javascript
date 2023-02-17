"use strict";

/*
// Functions

function logger() {
  console.log("My name is Rene");
}

// calling / running / invoking function
logger(23);
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(3, 5);
console.log(appleJuice);
console.log(fruitProcessor(3, 5));

const appleOrangeJuice = fruitProcessor(2, 4);

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and it's capital is ${capitalCity}`;
  return description;
}

const finLand = describeCountry("Finland", 2, "Helsinki");

console.log(finLand);

// Function declaration

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAge1(1996);
console.log(age1);

// Function expression

const calcAge2 = function () {
  const age2 = 2037 - birthYear;
  return age2;
};

console.log(age1);

// Assignment

let worldPopulation = 7900;

function percentageOfWorld1(population) {
  const comparison = (population / worldPopulation) * 100;
  return comparison;
}

const population1 = percentageOfWorld1();
console.log(percentageOfWorld1(4000));

const percentageOfWorld2 = function (population) {
  const comparison = (population / worldPopulation) * 100;
  return comparison;
};

console.log(percentageOfWorld2(2000));



const calcAge2 = function () {
  return 2037 - birthYear;
};

// Arrow Function

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Rene"));

console.log(yearsUntilRetirement(1999, "Madis"));

const percentageOfWorld2 = function (population) {
  const comparison = (population / worldPopulation) * 100;
  return comparison;
};

const worldPopulation = 7900;

const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

const portugalPercentage = percentageOfWorld3(4000);
console.log(percentage3);



// Function inside a function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} pieces of  orange.`;
  return juice;
}



// Population percentage calculator

const worldPopulation = 7990;
const country = "China";

function percentageOfWorld1(population) {
  const comparison = (population / worldPopulation) * 100;
  return comparison;
}

const describePopulation = function (country, population) {
  const percentageCalc = percentageOfWorld1(population);

  const percentage = `${country} has ${population} million people, which is about ${percentageCalc}% of the world`;
  console.log(percentage);
};

const describe = describePopulation("Portugal", 5000);

console.log(describe);



const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  // return `
};

console.log(yearsUntilRetirement(1991, "Rene"));

console.log(yearsUntilRetirement(1956, "Mike"));



// Team vs Team (Atleast double the amount of points wins)

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);

const checkWinner = function (dolphinsAverage, koalasAverage) {
  if (dolphinsAverage >= 2 * koalasAverage) {
    console.log(`Dolphins Win! ${dolphinsAverage} vs ${koalasAverage}`);
  } else if (koalasAverage >= 2 * dolphinsAverage) {
    console.log(`Koalas Win! ${koalasAverage} vs ${dolphinsAverage}`);
  } else {
    console.log("No one wins!");
  }
};

checkWinner(dolphinsAverage, koalasAverage);



// Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const year = new Array(1191, 1924, 2009, 2023);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";

console.log(friends);

const firstName = "Rene";
const rene = [firstName, "Reede", 2037 - 1991, friends];

console.log(rene);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1952, 2010];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[years.length - 1])];

console.log(ages);

// Exercise

const population = ["10", "5223", "534", "124"];

console.log(population.length === 4);

const worldPopulation = 7990;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];

console.log(percentages);

// Array Methods

const friends = ["Michael", "Steven", "Peter"];

// Push adds to the end of array

friends.push("Jay");

const newLength = friends.push("Jay");

// Unshift adds to the front of array

friends.unshift("John");

// Rempove last element

friends.pop();

const popped = friends.pop();

console.log(popped);

console.log(friends);

//

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));

friends.shift();
console.log(friends);

console.log(friends.includes("Steven"));
console.log(friends.includes("23"));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}


const neighbours = ["Finland", "Latvia", "Russia"];

neighbours.push("Utopia");

neighbours.pop();

console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Country includes Germany");
}

neighbours[neighbours.indexOf("Latvia")] = "Africa";

console.log(neighbours);



// Coding challenge
*/
let tip;

const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [
  tips[0] + bills[0] + (tips[1] + bills[1]) + (tips[2] + bills[2]),
];

console.log(bills, tips);

// Objects (Key/value pairs) / Properties

const myCountry = {
  country: "Estonia",
  capital: "Tallinn",
  language: "Estonian",
  population: 1.2,
  neighbours: "Latvia",
};

const rene = {
  firstName: "Rene",
  lastName: "Reede",
  age: 2023 - 1996,
  job: "Programmer",
};

console.log(rene);

console.log(rene.lastName);
console.log(rene["lastName"]);

const nameKey = "Name";
console.log(rene["first" + nameKey]);
console.log(rene["last" + nameKey]);
