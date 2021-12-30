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

/*
* #5
* Accessing values in ARRAYS
let partyMenu = ['steak nachos', 'fried rice', 'bbq ribs', 'sweet potato fries', 'chicken wings', 'carrot cake', 'chi chi dango'];
Console.log the entire array.
Console.log the length of this array.
Console.log 'sweet potato fries' from this array.
Console.log 'steak nachos' from this array.
*/
console.log(partyMenu);
console.log(partyMenu.length);
console.log(partyMenu[3]);
console.log(partyMenu[0]);

/*
#6
* Concatenation 
Concatenate the variables `firstName` and `lastName` from exercise 1 and store them into a new variable called `fullName` (don't forget to include a space between the firstName and lastName).
Using the fullName and birthPlace variables, console.log the following:

"Hi my name is fullName and I was born in birthPlace." 
*/

let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log('Hi name is is ' + fullName + ' and I was born in ' + birthPlace + '.');




