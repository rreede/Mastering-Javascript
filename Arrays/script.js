'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
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

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const rest1 = {
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
