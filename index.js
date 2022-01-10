const emptyArray = [];
let hobbies = [
  "Horse Riding",
  "Coding",
  "Camping",
  "Listening to Music",
  "Traveling",
  "Streaming",
];
const numbers = [7, 5, 8, 6, 2];
console.log(`My favorite number is ${numbers[1]}`);
console.log(`The last hobby in my list is: ${hobbies[hobbies.length - 1]}`);
hobbies.push("Fake Hobby");
console.log(`The last hobby log is a ${hobbies[hobbies.length - 1]}`);
console.log(`The number of hobbies I have now is: ${hobbies.length} hobbies`);

hobbies.splice(hobbies.length - 2, 2);
console.log(
  `After further consideration, I have decided to delete the last two hobbies, and stick to ${hobbies.length} hobbies, which are the following:`
);
console.log(hobbies);
hobbies = [];
console.log(hobbies);
