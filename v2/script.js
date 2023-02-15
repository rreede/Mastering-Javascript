"use strict";

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
