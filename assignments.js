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
