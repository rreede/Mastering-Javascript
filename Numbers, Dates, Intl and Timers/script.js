"use strict";
/*
// Numbers

console.log(23 === 23.0);

// Base 10 - 0 - 9
// Binary Base 2 - 0 1

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing

console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10));

// Value out of a string

console.log(Number.parseFloat("2.5 rem"));

// Is it a number

console.log(Number.isNaN(20));

// Checking if value is a number

console.log(Number.isFinite(20));

//

console.log(Number.isInteger(23 / 0));

//

console.log(Math.sqrt(25));
console.log(25 ** 1 / 2);

console.log(Math.max(5, 1, 63, 43));
console.log(Math.min(24, 423, 534, 434));

console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.random() * 6) + 1);

const randomInt = (min,max) => Math.trunc(Math.random() * (max - min));

console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.ceil(23.3));
console.log(Math.floor(23.3));

// Round decimals

console.log((2.7).toFixed(0))

// The Remainder operator

console.log(5%2);
console.log(5/2); 5 = 2+2 + 1

console.log(8%3); // 8 = 3 + 3  + 2

// Check if even number

console.log(6 % 2);

const isEven = n => n % 2 === 0;

// Numberic separators (Only between numbers)

const diameter = 287_934_2304_324324;

const priceCents = 345_99;

const transferFee = 15_00;

// Big int (cant mix regular numbers with big int)

console.log(2 **53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

const huge = 252349032403248324n;

// Exceptions

console.log(20n > 15);
console.log(20n === 20);

console.log(huge + "is REALLY big!!");

// Dates and Times

// Create a date

const now = new Date();
console.log(now);

// Working with dates (get and set)

const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);

console.log(future.getFullYears());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(Date.now());

future.setFullYear(2040);

const nownow = new Date();

const day = nownow.getDate();
const month = nownow.getMonth() + 1;
const year = nownow.getFullYear();
const hours = `${nownow.getHours()}`.padStart(2, 0);

*/

const future = new Date(2037, 10, 19, 15, 23);

console.log(+future);

const calcDaysPassed = (date1, date2) => date2 - date1;

calcDaysPassed(new Date(2037, 10, 19, 15, 23), new Date(2037, 11, 20));

// Internationalization (DATES)
labelDate.textContent = new Intl.DateTimeFormat("en-US", options).format(
  nownow
);

const locale = navigator.language;
console.log(locale);

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
};

// Iso language table is where to find the codes

// Timers

const ingredients = ["olives", "spinach"];

const pizzaTimer = setTimeout(
  () => console.log("Here is your pizza 🍕"),
  3000,
  ...ingredients
);
console.log("Waiting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);
