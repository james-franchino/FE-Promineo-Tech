/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE JS1 Lab
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 *
 */

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
var seatsOnPlane = 10;
console.log(seatsOnPlane);

console.log("Step 2:  Cost of Groceries");
var costOfGroceries = 67.43;
console.log(costOfGroceries);

console.log("Step 3:  Middle Initial");
var middleInitial = "M";
console.log(middleInitial);

console.log("Step 4:  Is it Hot Outside?");
var isHotOutside = false;
console.log(isHotOutside);

console.log("Step 5:  First Name");
var firstName = "James";
console.log(firstName);

console.log("Step 6:  Street Address");
var streetAddress = "123 Fake Street";
console.log(streetAddress);

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 *
 *
 * */

console.log("Remove Plane Seats:");
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
console.log(seatsOnPlane - 2);

console.log("Buy a Candy Bar:");
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
console.log(costOfGroceries + 2.15);

console.log("Fix a Birth Certificate:");
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
middleInitial = "N";
console.log(middleInitial);

console.log("Changing Seasons:");
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
isHotOutside = true;
console.log(isHotOutside);

console.log("Full Name:");
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
var lastName = "Johnson";
var fullName = firstName + " " + lastName;
console.log(fullName);

console.log("Introduce a Customer:");
//	Print a line to the console that introduces the customer
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
console.log("This is", fullName, ", he lives at", streetAddress);

console.log("-----------Finished------------");
