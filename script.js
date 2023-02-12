/*

let js = "amazing";
console.log(40 + 4 - 42);

console.log("Jonas");

let firstName = "Bob";
Variable name conventions 

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let lastName = "cat";

console.log(firstName + " " + lastName);

console.log(typeof 0);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// Math operators

const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Rene";
const lastName = "Reede";

console.log(firstName + " " + lastName);

// Assignment operators

let x = 10 + 5;
x += 10; // x = x + 10;

x *= 4; // x = x * 4
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x);

// Comparison operator

console.log(ageJonas > ageSarah); // <, >, >=, <=

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;

log(x, y);

constAverageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, constAverageAge);


const MarkHeight = 1.69;
const MarkWeight = 78;

const JohnHeight = 1.95;
const JohnWeight = 92;

const MarkBMI = MarkWeight / MarkHeight ** 2;
const JohnBMI = JohnWeight / JohnHeight ** 2;

const markHigherBMI = MarkBMI > JohnBMI;
console.log(markHigherBMI);

if (MarkBMI > JohnBMI) {
  console.log(`Mark's BMI ${MarkBMI} is higher than John's ${JohnBMI}`);
} else {
  console.log("John's BMI ${JohnBMI} is higher than Mark's ${MarkBMI}");
}

/*

const firstName = "Rene";

const job = "teacher";

const birthYear = 1996;
const year = 2037;

const rene =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(rene);

// Template literal (ES6)

const reneNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(reneNew);

console.log(`ordinary backticks no + needed`);

console.log(`String with \n\ multiple \n\ lines`);



const age = 5;

if (age >= 18) {
  console.log("Sarah can start driving license 💖");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years `);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`You are born in ${century} century`);

// Type conversion and Coersion (Number/String/Boolean)

const inputYear = "1991";
console.log(Number(inputYear));

console.log(Number("Jonas"));

console.log(String(23), 23);
console.log("23" - "10" - "3"); // Strings are converted to numbers with -
console.log("23" + "10" + "3"); // Will concatinate

let n = "1" + 1;
n = n - 1;

console.log(n);



// Falsy and Truthy values

// 5 Falsy values 0 , "", undefined, null, NaN

// Truthy Value

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 192;

if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is undefined");
}

// == vs ===

const age = "18";

// Strict equality is best for boolean
if (age === 18) console.log("You just became an adult, strict"); // Strict equality (No Type coercion)

if (age == 18) console.log("You just became an adult, loose"); // Strict equality (No Type coercion)

const favouriteNumber = Number(prompt("What is you favourite number?"));

console.log(favouriteNumber);

if (favouriteNumber === 23) {
  console.log("23 is an amazing number");
} else if (favouriteNumber === 7) {
  console.log("7 Too");
} else {
  console.log("None of the numbers are neither 23 nor 7");
}

if (favouriteNumber !== 23) {
  console.log("Why not 23?");
}

*/
