const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const team = players;

// Creating a copy of the 'players' array
const team1 = [...players];

// Creating a copy of the 'person' object
const cap1 = { ...person };

// Modifying the 'team' array
team.push("Player 4");

console.log(team);   // Output: ["Player 1", "Player 2", "Player 3", "Player 4"]
console.log(team1);  // Output: ["Player 1", "Player 2", "Player 3"]
console.log(cap1);   // Output: { name: "John Doe", age: 25, position: "Captain" }







window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
