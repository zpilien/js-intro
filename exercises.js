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
let firstName = 'Zack';
let lastName = 'Pilien';
let birthPlace ='Oahu';
let favColor = 'Purple';
let favFood = 'kalo';

console.log(firstName);
console.log(lastName);
console.log(birthPlace);
console.log(favColor);
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

let age = '28';
let shoeSize = '11';
let mcdonaldsInHi = '44';
let abcStoresInHi = '86';
let princeSong = '1999';

console.log(age);
console.log(shoeSize);
console.log(mcdonaldsInHi);
console.log(abcStoresInHi);
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

let lovesMcdonalds = true;
let isVegan = false;
let olderThan21 = true;
let hasNetFlix = true;
let beenToParis = true;

console.log(lovesMcdonalds);
console.log(isVegan);
console.log(olderThan21);
console.log(hasNetFlix);
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

let plateLunch = ['katsu', 'meatJun', 'locoMoco', 'mochiko', 'kalbi'];
let candyBox = ['whiteRabbit', 'lemonPeel', 'wasabiPea', 'arare', 'liHingSeed'];
let westSiiiiide = ['washington', 'oregon', 'california'];
let lotteryResult = ['44', '95', '76', '34', '808'];
const rubbish = {
  dirty: true,
  quantity: 'choke'
}
let hamajang = [true, 'mayjah', 12, ['frog',13], rubbish, westSiiiiide[3]];
let tagTeam = [
  [ 'tea', 'coffee'],
   [1, 2, 3],
   ['lifted', 'toyota', 'tacoma']
  ];

console.log(plateLunch);
console.log(candyBox);
console.log(westSiiiiide);
console.log(lotteryResult);
console.log(hamajang);
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

let partyMenu = ['steak nachos', 'fried rice', 'bbq ribs', 'sweet potato fries', 'chicken wings', 'carrot cake', 'chi chi dango'];

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

let fullName = firstName + lastName;
let concatSentence = 'Hi my name is ' + fullName + 'and I was born in ' + birthPlace;
console.log(concatSentence);


/*
* #7
* Variables with an OBJECT value
Declare the following variables and add your own values to each name to complete the properties for each object. Console.log each variable to check your work.
  kicks
    - brand
    - size
    - color
    
  car
    - brand
    - model
    - color
    
  bank
    - name
    - branch
    - location
    - rating
    - helpful
*/

let kicks = {
  brand: 'converse',
  size: 11,
  color: 'purple'
};
console.log(kicks);

let car = {
  brand: 'volvo',
  model: 240,
  color: 'red'
};
console.log(car);

let bank = {
  name: 'HawaiiStateFCU',
  branch: 'kaneohe',
  location: 'byWindwardMall',
  rating: 44,
  helpful: true
};
console.log(bank);

