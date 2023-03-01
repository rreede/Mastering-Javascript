'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const part of flights.split('+')) {
  const [type, from, to, time] = part.split(';');
  const output = `${type.startsWith('_Delayed') ? '❌' : ''} ${type
    .replaceAll('_', ' ')
    .trim()} From ${from.slice(0, 3).toUpperCase()} ${to
    .slice(0, 3)
    .toUpperCase()} To (${time.replace(':', 'h')})`;

  console.log(output);
}

/*
// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fry', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanched object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },

  orderDelivery: function (starterIndex, mainIndex, address, time) {
    console.log(
      `Order recieved ${
        (this.starterMenu[starterIndex], this.mainMenu[mainIndex])
      }`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is you delicious pasta with ingredient 1: ${ing1}, ingredient 2: ${ing2}, ingredient: 3 ${ing3}`
    );
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  },
};

// Working with strings

// Split and Join

console.log('a+very+nice+string'.split('+'));
console.log('Rene Reede'.split(' '));

const [firstName, lastName] = 'Rene Reede'.split(' ');

console.log(firstName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
/*
const capitalizer = function (passenger) {
  const names = passenger.split(' ');
  const namesUpper = [];
  for (const n of passenger) {
    namesUpper.push.n[0].toUpperCase() + n.slice[1];
  }

  console.log(namesUpper.join(' '));
};

const passenger = 'jess ann smith davis';

capitalizer(passenger);
*/
/*
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));

console.log('lololfladflsdf'.padStart(25, '---').padEnd(35, 'x'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');

  console.log(last);
};

console.log(maskCreditCard(3434435343543453));

// Repeat

const message2 = 'Bad Weather... All Departures Delayed...';

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
};

console.log(planesInLine(5));

/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passenger = 'joDiE';

const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// comparing emails

const email = 'hello@rene.io';
const loginEmail = '  Hello@rene.io ';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing strings

const priceGB = '288,97$';

const priceUS = priceGB.replace('$', '€').replace(',', '.');

console.log(priceUS);

const announcement =
  'All passengers come to boaring door 23, boarding door 23!';

console.log(announcement.replace('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

const plane2 = 'Airbus A32neo';

console.log(plane2.includes('A32'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// Practise Exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board!');
  } else {
    console.log('You are allowed!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');

checkBaggage('Socks and camera');


// Using SLICE

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Picking one letter by position

console.log(plane[0]);
console.log(plane[1]);

// Picking one letter by position straight from string

console.log('B737'[0]);

// How many characters in string

console.log(airline.length);
console.log('B737'[0].length);

// Find placement of string item

console.log(airline.indexOf('r'));

// Find last placement of string item

console.log(airline.lastIndexOf('r'));

// Find
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(0, airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  // B and E are middle Seats
  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') console.log('You got the Middle seat');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('23C');

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = new Set(gameEvents.values());
console.log(...events);

gameEvents.delete(64);

console.log(
  `An event happened, on average every ${90 / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(` ${half} [HALF] ${key}: ${value} `);
}

/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🥳'],
  [false, 'Try Again!'],
]);

console.log(question);

// Convert objest to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to Array

console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
// Maps

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', [('Italian', 'Pizzeria', 'Vegetarian', 'Organic')])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get('open'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);
rest.set([1, 2], 'Test');

console.log(rest);

console.log(rest.size);

rest.get([1, 2]);

rest.set(document.querySelector('h1'));



// Sets

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);

console.log(ordersSet);

console.log(new Set('Rene'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');

ordersSet.delete('Risotto');

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef']).size);











// Property NAMES

const properties = Object.keys(openingHours);

console.log(properties);

let openStr = `We are open on ${properties.length} days`;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

// Property VALUES

const values = Object.values(openingHours);

console.log(values);

// Entire OBJECT

const valuesAndProperties = Object.entries(openingHours);

console.log(valuesAndProperties);

for (const [key, { open, close }] of valuesAndProperties) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
if (restaurant.openingHours.mon && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// With optional chaining

console.log(restaurant.openingHours.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fry', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we are open at ${open} `);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? 'method does not exist');

// Arrays

const users = [{ name: 'Jonas', email: 'rene@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty');

/*
7const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'Capri',
  owner: 'Giovanni Rose',
};

rest2.numGuests = rest2 || 10;

console.log(rest1);
console.log(rest2);

rest1.numGuests []= 10;

// Nullish assignment operator
rest1.numGuests ??= 10;

rest2.owner = rest2.owner && "Anonymous";

rest2.owner &&= "Anonymous";



/*
// Destructuring in objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring

const [x, y, z] = arr;
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];

// Array Destructuring
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;

const products = {
  phone: ['IPhone', 'Samsung', 'Xiaomi', 'Huawei'],
  version: [12, 'Note 10', 'Note 10 pro', 'Mate 10 pro'],
};

const [iphone, samsung, xiaomi, huawei] = products.version;

console.log(huawei);

// Object descontruction

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

const {
  menu: [],
  starterMenu: starters = [],
} = restaurant;
*/
/*
const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// Addding default values incase of values missing

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

// Nested objects

const {
  fri: { open: openFriday, close: closeFriday },
} = openingHours;
console.log(openFriday, closeFriday);

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];

console.log(...newArr);
console.log();

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: arrays, strings, maps, sets but NOT OBJECTS

const str = 'Rene';
const letters = [...str, 'S.'];
console.log(letters);

restaurant.orderPasta(2, 3, 5);

const ingredients = [
  /*
  prompt("Let's make some pasta! Ingredient 1: "),
  prompt("Let's make some pasta! Ingredient 2: "),
  prompt("Let's make some pasta! Ingredient 3: "),
  */

/*
];

restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guieseppe' };

console.log(newRestaurant);
restaurantCopy.name = 'Ristorante Roma';
console.log(newRestaurant);
console.log(restaurant.name);

// Spread, because on Right side of =

// Destructuring

// const arr1 = [1,2 ...cat]];

// Rest, because on RIGHT side of =

//const [a, b, ...others] = [1,2,3,4,5];

console.log(a, b, others);

// Rest element must be last element

const [pizza, , risotto, ...otherFood] = [
  ...restaurant,
  mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Function

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(4, 2, 3, 5, 2, 4);

const x = [4, 5, 2];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');

// Short circuiting

console.log(3 || 'Rene');
console.log('' || 'Rene');
console.log(true || 0);

restaurant.numGuests = 23;

const guests = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests);

const guests2 = restaurant.numGuests || 10;

console.log('--- AND ---');
console.log('hello' && 23);


// For of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
/*
for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Object literals
*/
