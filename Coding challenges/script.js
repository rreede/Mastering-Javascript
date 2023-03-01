"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;

  const splited = text.split("\n");

  console.log(splited);

  for (const row of splited) {
    const [first, second] = row.toLowerCase().trim().split("_");

    console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
  }
});

// Coding challenge
