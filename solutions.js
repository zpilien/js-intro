// Comments are text that will not be executed in your code. Rather comments are for other programmers to read. 

// Single line comments start with //

/* Multiple line comments start with*/ /* and end with */ 

/* All of the exercises below are commented out. Write your Javascript code after each exercise. */


/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

let fruit = 'banana';
console.log(fruit);  // <= this should print out 'banana'

/*
* #1
* Variables with a STRING value
Declare the following variables and assign your own string values for each variable. Console.log each variable to check your work.
  firstName
  lastName
  birthPlace
  favColor
  favFood
*/
let firstName = 'Ronald';
console.log(firstName);
let lastName = 'McDonald';
console.log(lastName);
let birthPlace = 'California';
console.log(birthPlace);
let favColor = 'red';
console.log(favColor);
let favFood = 'Big Macs';
console.log(favFood);

/*
* #2
* Variables with a Number value
Declare the following variables and assign your own number values for each variable. Console.log each variable to check your work.
  age
  shoeSize
  mcdonaldsInHi
  abcStoresInHi
  princeSong
*/
let age = 57
console.log(age);
let shoeSize = 22;
console.log(shoeSize);
let mcdonaldsInHi = 75;
console.log(mcdonaldsInHi);
let abcStoresInHi = 56;
console.log(abcStoresInHi);
let princeSong = 7;
console.log(princeSong);

/*
* #3
* Variables with a BOOLEAN value
Declare the following variables and assign your own boolean values for each variable. Console.log each variable to check your work.
  lovesMcdonalds
  isVegan
  olderThan21
  hasNetFlix
  beenToParis
*/
let lovesMcdonalds = false;
console.log(lovesMcdonalds);
let isVegan = false;
console.log(isVegan);
let olderThan21 = true;
console.log(olderThan21);
let hasNetFlix = true;
console.log(hasNetFlix);
let beenToParis = true;
console.log(beenToParis);

/*
* #4
* Variables with an ARRAY value
Declare a variable named plateLunch and assign it an array containing five of your favorite lunch items.
Declare a variable named `candyBox` and assign it an array containing five candies of your choosing.
Declare a variable named `westSiiiiide` and assign it an array containing states found on the west coast of the US.
Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
Declare a variable named `hamajang` and assign it an array containing 6 different data types.
Declare a variable named `tagTeam` and assign it an array containing 3 arrays, with each array containing items that complement with one another.

Console.log each variable to check your work
*/
let plateLunch = ['mac salad', 'chicken katsu', 'garlic chicken', 'orange chicken', 'beef curry'];
console.log(plateLunch);
let candyBox = ['kit kat', "reese's peanut butter cup", 'twix', 'm&ms', 'cola gummies'];
console.log(candyBox);
let westSiiiiide = ['California', 'Oregon', 'Washington'];
console.log(westSiiiiide);
let lotteryResult = [11, 8, 2, 88, 3];
console.log(lotteryResult);
let hamajang = ['string', 0, ['this', 'is', 'an', 'arrray'], null, 5>3, 6<2, undefined];
console.log(hamajang);
let tagTeam = [['peanut butter', 'chocolate'], ['lemon', 'bar'], ['orange', 'chicken']];
console.log(tagTeam);

//*7
//Accessing values in Arrays

var partyList = ["carrot cake", "gin & tonic", "kalua pork nachos", "double stuff oreos", "cool ranch doritos", "orange chicken"];

// Console.log the entire array.
// Console.log the length of this array.
// Console.log only "carrot cake" from this array.
// Console.log only "cool ranch doritos" from this array

console.log(partyList);
console.log(partyList.length);
console.log(partyList[0]);
console.log(partyList[4]);

/*#8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` from exercise 1 and store them into a new variable called `fullName` (don't forget to include a space between the firstName and lastName).
*
* Using the fullName and birthPlace variables, console.log the following:
*
* "Hi my name is fullName and I was born in birthPlace." 
*
* i.e "Hi my name is Bruce Wayne and I was born in Gotham."
*/

var fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log('Hi name is is ' + fullName + ' and I was born in ' + birthPlace + '.');

/*
* #9 
* Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named sum.
* Subtract the two variables and store it to a new variable named difference.
* Mulitply the two variables and store it to a new variable named product.
* Divide the two variables and store it to a new variable named quotient.
* Find the remainder (modulus) of the two variables and store in to a new variable names leftOver.
*
* Console.log each new variable.
*/

var num1 = 9;
var num2 = 11;

var sum = num1 + num2;
console.log('sum:' , sum);

var difference = num1 - num2;
console.log('difference:' , difference);

var product = num1 * num2;
console.log('product:' , product);

var quotient = num1 / num2;
console.log('quotient:' , quotient);

var leftOver = num1 % num2;
console.log('modulus:' , leftOver);
/*
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality (===).
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality (==).

* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Console.log the variables. Do you see the difference between strict equality vs. equality?
*/

var isStrictlyEqual = 'Tacocat' === 'tacocat';
console.log(isStrictlyEqual);

var isLooselyEqual = 'Tacocat' == 'tacocat';
console.log(isLooselyEqual);

var sameNum = '5' === 5;
console.log(sameNum);

var sameNumba = '5' == 5;
console.log(sameNumba);
/* 
* #11
* Logical AND Logical OR
* Use comparison and logic operators (>, <, >=, <=, ===, !==) with the logical && and logical || to make the following variables True of False:
*/

//Use && to make me True
var booya7 = 10>5 && 3<8;
console.log('booya7:' , booya7);

//Use && to make me False
var booya8 = 5>4 && 5<4;
console.log('booya8:', booya8)

//Use || to make me True
var booya9 = 9<11 || 9>11;
console.log('booya9:' , booya9);

//Use || to make me False
var booya10 = 7>8 || 8>9;
console.log('booya10:' , booya10);

//Console.log each variable

/*
* #12
* Assignments
* Variables with the outcome of an assignment operation (+=, -=, *=, /=, %=):
*
* Declare a variable named `myNum` and assign it with a number of your choosing.
* 
* Change the value of the muNum variable by using the assignment operators and console.log myNum after each assignment.
*/
var myNum = 19;
console.log(myNum);

//increment and assign 3 (+=):
myNum += 3;
console.log(myNum);

//decrement and assign 1 (-=):
myNum -= 1;
console.log(myNum);

//multiple and assign 2 (*=);
myNum *= 2;
console.log(myNum);

//divide and assign 5 (/=);
myNum /= 5;
console.log(myNum);

//modulo and assign 4 (%=);
myNum %= 4;
console.log(myNum);


/*===================================================================*/

/*
* Final Boss 

* The following exercises are designed to further challenge you and give you a jump start on the next topic that'll be covered. Let the boss battle begin!
*
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named bakePie which has a single parameter ingredient.
* 
* When the function is invoked, it should return a string, "Today's special is ingredient pie." Where ingredient will be the value that you pass into the function.
* 
* For example, if the value is `blueberry`, it should return "Today's special is blueberry pie."
* 
* Declare a variable pieResult and assign it to the function call.
* Console.log the variable to see the result.*/


/*
* Declare a Function named jump which has a single parameter, height.
* 
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* 
* For example, if the value is 9, it should return "You jumped 9 feet high!"

* Declare a variable jumpResult and assign it to the function call.
* Console.log the variable to see the result.
*/


/*
* Declare a Function named makeFood which takes three parameters, ingredient1, ingredient2, recipeName.
* 
* This function should return a string ingredient1 and ingredient2 make a recipeName. Where ingredient1, ingredient2 and recipeName will be the values that you pass into the function.
* 
* For example, if the values are "Cheese", "Bacon", "pancake" it should return "Cheese and bacon make a pancake."
*
* Declare a variable foodResult and assign it to the function call. Console.log the variable to see the result.
*/
