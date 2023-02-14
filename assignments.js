/*

const country = "Estonia";
const continent = "Europe";
let population = 1.2;

console.log(country, continent, population);

const isIsland = "false";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof population);

const language = "Estonian";

const populationHalf = population / 2;

population += 1;
console.log(population);

const finlandPopulation = 6;
const averagePopulation = 33;

console.log(finlandPopulation > population);
console.log(population > averagePopulation);

const description =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speak " +
  language;

console.log(description);

const descriptionLiteral = `${country} is in ${continent} and its ${population} million people speak ${language} `;

console.log(descriptionLiteral);

let belowAverage;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  belowAverage = 33 - population;
  console.log(
    `${country}'s population is ${belowAverage} million below average`
  );
}

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

/*



// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // and
console.log(hasDriversLicense || hasGoodVision); // or
console.log(!hasDriversLicense); // or

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sara is able to drive!");
} else {
  console.log("Someone else should drive!");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sara is able to drive!");
} else {
  console.log("Someone else should drive!");
}



const sarahNewCountry = true;

if (country === "english" && population < 50 && !isIsland === false) {
  console.log("You should live in Estonia!");
} else {
  console.log("You should not live in Estonia!");
}
*/
