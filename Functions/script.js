"use strict";

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
*/
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(rene);
checkIn(flight, rene);

// Javascript only does pass by value not by reference
