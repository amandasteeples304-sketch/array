console.log("Halloumi");

// Creating arrays
// ⛳️ Create an array called blogPosts with a list of blog post titles. Log the array to the console.
const blogPosts = ["blog post 1", "blog post 2", "blog post 3"];

console.log(blogPosts);

// Accessing items
// You can access items in an array using the index of the item in the array. The index starts at 0, so the first item in the array is at index 0, the second item is at index 1, and so on.
constblogPosts = ["blog post 1", "blog post 2", "blog post 3"];

console.log(blogPosts);

console.log(blogPosts[0]);
console.log(blogPosts[1]);
console.log(blogPosts[2]);

// Adding items
// You can add items to an array by assigning a value to a new index, although this isn’t done a lot.
blogPosts[3] = "My fourth blog post";

console.log(blogPosts[3]);

// Side note
// It’s worth noting that arrays in JavaScript can contain different data types (including other arrays) - in practicality, this isn’t done that often.
const randomList = ["important reminder", 42, ["another array"], true];

const favouriteFoods = [
  "Leek and Puy Gratin with a Cruncy Feta Topping",
  "All-in-one Sticky Rice with Broccoli, Squash, Chilli and Ginger",
  "All-in-one Sweet Potato Thai Curry",
];

console.log(favouriteFoods);
console.log(favouriteFoods[0]);
console.log(favouriteFoods[1]);
console.log(favouriteFoods[2]);
