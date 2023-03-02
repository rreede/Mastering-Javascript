"use strict";

// Function Default Parameters

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
