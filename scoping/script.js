'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are born in ${birthYear}`;
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Rene';
calcAge();
