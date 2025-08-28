// Part 1: Variables & Conditionals
let name = "Bob";
let age = 17;

if (age >= 18) {
  document.getElementById("status").textContent = name + " is an adult.";
} else {
  document.getElementById("status").textContent = name + " is a minor.";
}

// Part 2: Custom Functions
// Function 1: Show a greeting alert
function greetUser() {
  alert("Hello, " + name + "!");
}

// Function 2: Add two numbers
function addNumbers(a, b) {
  return a + b;
}
console.log("2 + 3 =", addNumbers(2, 3));

// Part 3: Loop Examples
// Loop 1: Count from 1 to 3
for (let i = 1; i <= 3; i++) {
  console.log("Counting:", i);
}

// Loop 2: Show even numbers from 1 to 6
function showEvenNumbers() {
  let list = document.getElementById("listContainer");
  list.innerHTML = ""; // Clear the list

  for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
      let item = document.createElement("li");
      item.textContent = "Even number: " + i;
      list.appendChild(item);
    }
  }
}
// Part 4: DOM Interactions
// Change page title
document.getElementById("title").textContent = "Simple JS Demo";
document.body.style.backgroundColor = "#f0f8ff";

// footer
let footer = document.createElement("p");
footer.textContent = "End of demo.";
document.body.appendChild(footer);
