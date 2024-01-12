// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.

const isOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//   Check if all numbers are divisible by 5. Cache the result in a variable.
let isDivisible = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(isDivisible);

// Check if the first number is larger than the last. Cache the result in a variable.
let firstNumLarge = n1 > n4;
console.log(firstNumLarge);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
let arithChain = ((n2 - n1)*n3) % n4;
console.log(arithChain);

//---------------------------------------PART 2---------------------------------------

// The distance of the trip, in total, is 1,500 miles.
let distance = 1500;

// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.

let mpg55 = 30;
let mpg60 = 28;
let mpg75 = 23;

// You have a fuel budget of $175.
let fuelBudget = 175;
// The average cost of fuel is $3 per gallon.
let fuelCost = 3;

// How many gallons of fuel will you need for the entire trip?
let gallons55 = distance / mpg55;
let gallons60 = distance / mpg60;
let gallons75 = distance / mpg75;
let gallons = `The amount of fuel needed differs depending upon the speed you are travelling. At 55 Miles Per hour it takes ${gallons55}. At 60 Miles Per hour it takes ${gallons60}. At 75 Miles Per hour it takes ${gallons75}.`
console.log(gallons);

// Will your budget be enough to cover the fuel expense?
let budget55 = (distance / mpg55) * fuelCost <= fuelBudget;
let budget60 = (distance / mpg60) * fuelCost <= fuelBudget;
let budget75 = (distance / mpg75) * fuelCost <= fuelBudget;
let budgetEnough = `Speed determines whether the budget will be enough. Travelling at 55 MPH then the answer would be ${budget55}. Travelling at 60 MPH then the answer would be ${budget60}. Travelling at 75 MPH then the answer would be ${budget75}.`
console.log(budgetEnough);
// How long will the trip take, in hours?
let tripLength55 = distance / 55;
let tripLength60 = distance / 60;
let tripLength75 = distance / 75;
let tripLength = ` Travelling at 55 MPH ${tripLength55} hours. Travelling at 60 MPH, it would take ${tripLength60} hours. Travelling at 75 MPH, it would take ${tripLength75} hours.`
console.log(tripLength);
console.log('Travelling at 60 MPH would make the most sense for the trip.');