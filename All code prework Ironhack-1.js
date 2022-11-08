

// 1.JS variables


let Name =' Irontuly';
// you can assigne here directly in the variable
let age;
age=35;
// or you assign later
console.log(Name); // ==> should be ironmacker
console.log(age); // ==> should be the age 35

const name = 'do not be deleted

let favoriteFood;
favoriteFood = 'Steak';
console.log('Value :', favoriteFood, typeof favoriteFood,);
favoriteFood = '20';
console.log ('Value :', favoriteFood,typeof favoriteFood)

// console should take the value string or number

var = firstNumber, secondNumber, Average, Message;
firstNumber=1;
secondNumber = 2;
average = (firstNumber+secondNumber)/2;
message = 'The average is :' + average;
console.log (message);

// The console should take the average message 

let myAge;
myAge = 0;
myAge = 35;
const myName = 'Tuly'
console.log(myAge, myName)
// Name is constant my age is variable


// 2,Basic Operators numbers

console.log (2 + 2); // ==> additions
console.log (4 - 2); // ==> soustraction
console.log (4 / 2); // ==> division
console.log (4 * 2); // ==> multiplication


// Advance Operator

console.log(2 ** 3); // => (2 * 2 * 2) result: 8 expodentioells

// Assignment Operators
//Using previous variable values to assign new values

let myAge = 32;

let myNewAge = myAge + 1;
console.log(myNewAge); // <-- 33


// Guided Exercise! 20 min.

let cheeseCalories = 200;
let eggsRequired = 4;
let caloriesPerEgg = 75;

let eggsCalories;
eggsCalories = eggsCalories* caloriesPerEgg
// variable for the eggCalories

console.log( eggsCalories)
// should be 300

let omelletteDuFromage;
omelletteDuFromage = eggsCalories + cheeseCalories

console.log (omelletteDuFromage)

console.log(omeletteDuFromageCalories / 2);

//Creating a string

let name12 = "Ironhacker";
console.log("The name:", name12);

let username = 'ironhack123';
console.log("The username:", username);

let superSecretPassword = "pa$$w0rd_";
console.log("Shhhh:", superSecretPassword);

let language = 'JavaScript';
console.log(`I am learning ${language}!`);

// console response  "I am learning JavaScript!"

//Concatenation
let age= 25
console.log ('Hey how old are you')
console.log ('I am ${age}')
console.log ('I am ${age+12} older')

// possibility to + ou += 

const fact = 'I love web dev!';
console.log(`"${fact}" is a string and it is length is ${fact.length}.`);

// "I love web dev!" is a string, and its length is 15.


// Guide excercice

let turtle1 = 'Leonardo';
let turtle2 = 'Raphael';
let turtle3 = 'Donatello';
let turtle4 = 'Michelangelo';

let allTurtles = '';
allTurtles += turtle1;
console.log(allTurtles);

allTurtles += ' ' + turtle2;
allTurtles += ' ' + turtle3;
allTurtles += ' ' + turtle4;
console.log(allTurtles);
// // here, we are concatinating the result of the empty space plus the variable to allTurtles
// could also be done in a single line like this:
// allTurtles += ' ' + turtle2 + ' ' + turtle3 + ' ' + turtle4

console.log(allTurtles.indexOf('Donatello'));
console.log(allTurtles.length)

// index of 17 and the string length

let firstHalfTurtles = allTurtles.slice(0,16);
let secondHalfTurtles = allTurtles.slice(17,39);

//could be negative value

console.log('My favorites are : ',firstHalfTurtles);
console.log('I hate this : ', secondHalfTurtles);

// Boleans

//Boolean is a type of data that can have two different values: true or false.

let powerOn = true; // => boolean
let isRaining = false; // => boolean

//AND (&&) and  OR ( | |)	

console.log(true && false); // ==> and
console.log(11 % 3 === 2); // ==> equal
console.log(false || true); // ==> or
console.log(!true || false); // ==> not and or
console.log(17 == '17'); // ==> equal
console.log(123 === '123'); // ==> equal

// Conditional Statement

//The if statement (or conditional block) executes a block of instructions if a specified condition is true. The condition is an expression that evaluates to true or false.

let isStudent = true
let HardWork = 9

if (isStudent){
    console.log ('Welcome to the jungle')
}

if (HardWork>9){
    console.log ('keep the goodwork')
}
 
// conditions hardwork and isstudent is true

let age= 25
let underEightTeen = age<18

if (underEightTeen) {
    console.log ('Do not pass')
}
else {
    console.log ('Cannot enter')
}

// console output:
// 'Welcome to the night club!'

let isStudent = true;
let hardWork = 9;

if (isStudent) {
  console.log('Welcome to Ironhack :)');

  if (hardWork > 8) {
    console.log('You will be a great developer!');
  } else {
    console.log('You need to work harder... ');
  }
}

// console output:
// 'Welcome to Ironhack :)'
// 'You will be a great developer!'

let fruit = 'apple';
let type = '';
 
switch (fruit) {
  case 'apple':
  case 'pear':
    type = 'pome';
    break;
  case 'peach':
  case 'coconut':
    type = 'drupe';
    break;
  case 'strawberry':
  case 'blueberry':
  case 'blackberry':
    type = 'berry';
    break;
  case 'beans':
  case 'peas':
    type = 'legumes';
    break;
  default:
    type = 'other';
    break;
}
console.log(`${fruit} is type of: ${type}.`);

//Guided exercise. 20 min.

let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice; // ==> enter the value here
let secondPlayerChoice; // ==> enter the value here

let firstPossibility;
let secondPossibility;
let thirdPossibility;
let fourthPossibility;
let fifthPossibility;
let sixthPossibility;
let seventhPossibility;

firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
fifthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;
sixthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;
seventhPossibility = firstPlayerChoice === secondPlayerChoice;

if (firstPossibility || secondPossibility || thirdPossibility){
    console.log('First player won')}
else if (fourthPossibility || fifthPossibility || sixthPossibility){
    console.log('Second player won')
}
else{
    console.log('something went wrong')
}

// else covered the seventhpossibility

// Loops and iterations
while (condition) {
    // code to be executed while the condition is true
  }

  let counter = 1;

while (counter <= 10){
  console.log(counter);
  counter += 1;
} 
  
let counter = 30; // <= 1. counter will now start at 30
 
// 2. loop will now run while counter is higher or equal than 0
while (counter >= 0) {
  console.log(counter);
  counter -= 1; // <= 3. instead of increasing, decrease counter by 1
}


// 1. initialize variable named "i" and  set its value to an empty string
// 2. remember, strings have property .lenght which tells us how long is the string (it's zero indexed)
// 3. as long as the length of the string is less or equal to 10, execute the code
// 4. in every iteration, add (+=) a star to the string

let i = 5
for (let i = ""; i.length <= 10; i += "*"){
    console.log(i);
}

let numberOfLoops = 42;
for (let i = 0; i < numberOfLoops; i++) {
  // the code to be executed
}

for (let t= 10; t>=0; t++){
    console.log(t);
//counter from 10 > 0
if (t===0){
    console.log ("Boum")
}
}

const statement = "We are in Ironhack";

for(let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    let x = 0;
    
    while (x < statement.length) {
      let letter = statement[x];
      if (letter === "a") {
        console.log(i + " Cheers!")
      }
      x++;
    }
  }
}

//If you want to end a loop execution early, you can use the break keyword.

for (let i = 1; i <= 30; i++){
    if (i === 21){
      console.log("TWENTY ONE! Black Jack, dale!");
      break;
    } else {
      console.log(i);
    }
  }

  //Let’s skip all the numbers that are multiples of 3.

  for (let i = 1; i <= 30; i++){
    if (i % 3 === 0) { 
      continue; 
    }
    console.log(i);
  }

  // Guided Exercise. 15 min.

  for ( let i = 1; i<=50; i++){
    console.log (i) // ==>  counter in the loop from 1 > 50

    if (i % 10 === 0 || i % 15 === 0){
        console.log ('Donkey') ==>   // 4. when at least one condition is true, run the code
    }

    if (i % 2 !==0 && (i-1)%10!==0){
        console.log ('Monkey') ==>   // 5. when both conditions are true, run the code
    }

    if (i % 5 === 0){
        continue; // ==> skip if it is divided by O
    }

  }

  //JS | Functions

  function sayHello() {
    console.log('Hello!');
  }

  sayHello(); // => Hello!
  sayHello(); // => Hello!
  sayHello(); // => Hello!
  


  function sayHelloFr() {
    console.log('Bonjour!');
  }
  
  function sayHelloGer() {
    console.log('Hallo!');
  }
  
  function sayHelloEsp() {
    console.log('Hola!');
  }
  
  sayHelloFr(); // => Bonjour!
  sayHelloGer(); // => Hallo!
  sayHelloEsp(); // => Hola!

  // function declaration with a parameter
function sayHello(language) {
    switch (language) {
      case 'fr':
        console.log('Bonjour!');
        break;
      case 'ger':
        console.log('Hallo!');
        break;
      case 'esp':
        console.log('Hola!');
        break;
      default:
        console.log('Hello!');
    }
  }
  
  // function invocation with or without an argument
  sayHello('ger'); // => Hallo!
  sayHello('fr'); // => Bonjour!
  sayHello('esp'); // => Hola!
  sayHello(); // => Hello!
  
// Print input

let Input = 3
  function printInput(theInput) {
    console.log(`Passed input is: ${theInput}`);
  }
  
printInput(2); // => Passed input is: 2
printInput('Ironhack is the best!');
// => Passed input is: Ironhack is the best

function calculator(symbol, num1, num2) {
    // symbol will be the math symbol passed in the function invocation
    // firstNum and secondNum will be the second and third arguments passed
   
    if (symbol === '+') {
      console.log(num1 + num2);
    } else if (symbol === '-') {
      console.log(num1 - num2);
    } else if (symbol === '*') {
      console.log(num1 * num2);
    } else if (symbol === '/') {
      console.log(num1 / num2);
    } else {
      console.log('Symbol unknown');
    }
  }
   
  // invocation example
  calculator('+', 5, 3); // <= 8

  // STEP 1:

function calculateSum(num1, num2) {
    return num1 + num2;
  }
  
  function printResult() {
    // in the line below, the function result will be stored inside the variable: result
    const result = calculateSum(3, 6);
    console.log(`The result is ${result}.`);
  }
  
  printResult();


  function colorMix (col1, col2){
    if ((col1 === 'red' && col2 === 'blue') || (col1 === 'blue' && col2 === 'red')) {
        return 'violet';
    }
    else if ((col1 === 'red' && col2 === 'yellow') || (col1 === 'yellow' && col2 === 'red')){
        return 'orange';
    }
    else if ((col1 === 'blue' && col2 === 'yellow') || (col1 === 'yellow' && col2 === 'blue')){
        return 'green' ;
    }
  }

  let myColor= colorMix('red', 'yellow');
    console.log (MyColor);
  
    function werewolfCheck (name) {
        if (name.indexOf('were')>=0 ){
        return 'it is a werewolf'//===> wrong typing corrected were+
        }
        else {
        return' just a regular person' //==> other    
        }
    }


    function daysInMonth(month){
        switch (month){
            case '1':
            case '3':
            case '5':
            case '7':
            case '8':
            case '10':
            case '12':
                return'31';
            case '4':
            case '6':
            case '9':
            case '11':
                return'30';
            case: '2'
                return'28'
                default:
                return 'othe'
                break;
      }

// Basic data 

const animalArray = ["dog", "cat", "fish"];

const myDog = animalArray[0];
console.log(myDog);

const myFish = animalArray[2];
console.log(myFish);

 // returns undefined when there's no element with the that index
 const myUndefinedElement = animalArray[3]
console.log(myUndefinedElement);x``

// the position 2 since we start counting from zero
// this tells us that the position of the last element will always be:
// the length of the array - 1 (3-1=2)
const lastIndex = animalArray.length - 1;
const lastElement = animalArray[lastIndex];

const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`); // => Before: dog,cat,fish

animalArray.push("lizard");
console.log(`After: ${animalArray}`); // => After: dog,cat,fish,lizard

animalArray.push ('elephant');
console.log('After again: ${animalArray}');


const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`); // => Before: dog,cat,fish

animalArray.unshift("whale");
console.log(`After: ${animalArray}`); // => After: whale,dog,cat,fish

const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`); // => Before: dog,cat,fish

animalArray.pop();
console.log(`After: ${animalArray}`); // => After: dog,cat

const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`); // => Before: dog,cat,fish

animalArray.shift();
console.log(`After: ${animalArray}`); // => After: cat, fish

const animalArray = ['dog', 'cat', 'fish'];

// removes the first element and stores it inside a variable
let myFirstAnimal = animalArray.shift();
// removes the last element and stores it inside a variable
let myLastAnimal = animalArray.pop();

console.log(animalArray); // => ["cat"]
console.log(myFirstAnimal); // => "dog"
console.log(myLastAnimal); // => "fish"

let nameArray = ['Tuly','Feuch','Tania','Pauline','Thibault']

let lastElement = nameArray.pop ();
let firstElement = nameArray.shift ();

nameArray.unshift(lastElement); // => add removed element to the start of array
nameArray.push(firstElement); // => add removed element to the end of array

console.log(nameArray);

const animalArray = ["dog", "cat", "fish", "lizard", "whale", "cheetah"];
console.log(`Original: ${animalArray}`); // => Original: dog,cat,fish,lizard,whale,cheetah
console.log("------");

// "From the first element, remove one going forward"
animalArray.splice(0, 1);
console.log(`From the first element, remove one going forward: ${animalArray}`);
// => From the first element, remove one going forward: cat,fish,lizard,whale,cheetah

//  "From the second element, remove two going forward"
animalArray.splice(2, 2);
console.log(`From the second element, remove two going forward: ${animalArray}`);
// => From the second element, remove two going forward: cat,fish,cheetah

// If we pass a third argument
// It is inserted as the replacement
animalArray.splice(0, 1, "Something else");
console.log(`If we pass a third argument: ${animalArray}`); // => If we pass a third argument: Something else,fish,cheetah


let counter = 0;
const animalArray1 = ["dog", "cat", "fish"];

while (counter < animalArray1.length){
  console.log(`Counter (===index): ${counter} - element: ${animalArray1[counter]}`);
  counter++;
}

// Counter (===index): 0 - element: dog
// Counter (===index): 1 - element: cat

// Initial code
const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum
 
// loop that goes from 0 to the length of the prices array
for (let i = 0; i < prices.length; i++) {
  // in every iteration, the value of the current array element will be added to sum
  sum += prices[i];
}
 
// Math.round() is a Number method used to round numbers to it's closest integer value
sum = Math.round(sum);
 
console.log(sum);


let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];
// initial variable

seriesPending.push[`String value`];
// add a new element at the end of the array

for (let i = 0; i < seriesPending.length; i++) {
    // the variable i will be the index. [i] will target the element in that position
    console.log(`Serie #${i}: ${seriesPending[i]}`);

if (seriesPending[i] === 'Boolean 99'){
    console.log (`Found it`)
    // Found it message once it hits Boolean 99
}
  }

  let seriesWatching = [];
  // Empty variable

  removedSeries = seriesPending.shift() + seriesWatching.push(removedSeries);
  console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);
// another solution in a single line
// will use the removed value with .shift() to add it with .push()
// seriesWatching.push(seriesPending.shift())



function countSmilies(message) {
    const smileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D'];
     let count = 0;
     
     for (let i = 0; i < message.length && i<=2; i++) {
       if (smileys.includes(message[i])) {
         count++;
       }
     }
     return count
   }
   

   function countSmilies(message) {
    const smileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D'];
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < smileys.length; j++) {
        if (message[i] === smileys[j]) {
          count++;
        }
      }
    }
    return count;
  }



  function pickOdd (arr) {
    const oddNumbers = []; // do not remove or change this line
  
    
    // Your code here
    
    
    return oddNumbers; // do not remove or change this line
  }


  function pickOdd (arr) {
    const oddNumbers = []; // Stored here the odd nunbers
    const evenNumbers= []; // stored here the even Numbers
  
    for (let i=1; i < arr.length; i++ ){
      if ( i % 2 ==0){
        evenNumbers.push(arr[i]);
      }
      else {
        oddNumbers.push(arr[i]);
      }
    }
    return oddNumbers; // do not remove or change this line
  }



//JS | Basic data types: Objects

let student = {
    firstName: 'Bob',
    lastName: 'Hill',
    course: 'Web Dev',
    city: 'Miami',
    age: 29,
    hasPriorExp: false,
    goals: ['career change', 'new skills'],
    step: {
      application: 'approved',
      techTest: 'passed',
      prework: 'submitted',
      course: 'ongoing',
      foundJob: '',
      activeAlumnus: ''
    }
  };
 // As we see, the properties firstName, lastName, 
 //course and city are of type string but at the same time, 
// the property age has value of type number, hasPriorExp has value of type boolean, goals has an array as its value and step has an object as its value with its own properties.

let goldenBall = {
    goldenBall22: 'Karim Benzema',
    goldenBall21: 'Lionel Messi',
    goldenBall18: ' Christiano Ronaldo'
};

goldenBall.goldenBall17 = 'Modric'
goldenBall.doubleOllie = 'Chris Chann';
delete goldenBall.doubleOllie; //==> deleted
goldenBall.goldenBall21: 'Mbappe'; //==> updated

let allKeys = Object.keys (goldenBall);
console.log (allKeys) //==> in array

for (let key in goldenBall){
console.log(key);// ==> in a list
}

for (let key in goldenBall){
    console.log[key];// ==> in a list
    }


// objectName.key = value

let user = {
    name: 'Ana',
    age: 27
  };
   
  // The in operator is used to verify if a certain property exists in an object. It returns a boolean.
  console.log('name' in user); // => true
  console.log('age' in user); // => true
  console.log('course' in user); // => false


  let product = {
    name: 'headphones',
    price: 120,
    doesItWork: false,
    previousOwner: 'Bob'
  };

  for (let key in product){
    console.log (`${key}: ${product[key]}`); //==> key as a value
  }

  delete product.previousOwner; //==> deleted bob
  product.doesItWork = true; //==. value updated
  console.log (product);

  if (product.price>100){
    product.discountPercentage= 10;
  }
  
  product.price = product.price * (100-product.discountPercentage)/100; //==> minus 10%
  console.log (product)

  if ('discountPercentage' in product){
    console.log (`"We got some ${name} on sale for just ${product.price}, that's ${product.discountPercentage}% off!"`)
  }

  const teddybear{
    texture: 'fluffy'
  }

  console.log(teddybear['texture']);

  function printBio (user) {
    let name = user.name; //==>  name
    let surname = user.surname; //==> surname
    let city = user.address.country; // ==> adress
    
      // object age not included in the function
    
    return `This is ${name} ${surname} from ${city} `;
      // should return the value
    };



  // JS nested 

  // Object in the array

  const books = [
    {
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke'
    },
    {
      title: 'Secrets of the JavaScript Ninja',
      author1: 'John Resig',
      author2: 'Bear Bibeault'
    }
  ];

  console.log(books[0]);
  // { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }

  let jsDesignPatterns = {
    title: 'Learning JavaScript Design Patterns',
    author1: 'Addy Osmani'
  };
  
  books.push(jsDesignPatterns);
  
  // [
  //   { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  //   { title: 'Secrets of the JavaScript Ninja',
  //     author1: 'John Resig',
  //     author2: 'Bear Bibeault' },
  //   { title: 'Learning JavaScript Design Patterns',
  //     author1: 'Addy Osmani' }
  // ]
  

  let tulybooks={
    title:' Tuly is learning JS',
    author1: 'Tuly'

  }
  
  books.push(tulybooks)
// Pushing tuly books in the array 

console.log(books)

console.log(books[1].authors);
// [ 'John Resig', 'Bear Bibeault' ]
 
console.log(books[1].authors[0]); // => John Resig
console.log(books[1].authors[1]); // => Bear Bibeault

let currentGroup = {
    course: 'Web Development',
    type: 'full-time',
    squadName: 'squad-307',
    city: 'Miami',
    teacher: {
      name: 'Nick',
      age: 27
    },
    classroom: {
      floor: 3,
      seats: 30,
      available: true
    }
  };

console.log(currentGroup.teacher); // => { name: 'Nick', age: 27 }
console.log(currentGroup.teacher.name); // => Nick
console.log(currentGroup.classroom.available); // => true


// JS Functions



function calculateSum(num1, num2) {
  return num1 + num2;
}
alert(calculateSum(3,7))



function calculator(num1, num2, operator) {
  // makes sure user always passes three args
  if (!num1 || !num2 || !operator) {
    console.log('Please provide both numbers and operator!');
    return;
  }
  // makes sure user passes numeric values
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.log('Please add a numeric value only!');
    return;
  }
 
  // make sure the user passes one of the valid operators (+, -, *, /)
  if (operator !== '+' && operator != '-' && operator != '*' && operator != '/') {
    console.log('Please provide valid operator.');
    return;
  }
 
  // initialize a variable that will hold the result
  let result;
 
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;ป
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  let response = `${num1} ${operator} ${num2} = ${result}`;
  return response;
}

let ironCities = ['Amsterdam', 'Barcelona', 'Berlin', 'Lisbon', 'Madrid', 'Mexico City', 'Miami', 'Paris', 'Sao Paulo'];

function(sayHello){
  console.log (Welcome to (ironCities))
}
// => expected output:
// Amsterdam
// Barcelona
// Berlin
// Lisbon
// Madrid
// Mexico City
// Miami
// Paris
// Sao Paulo


/*Initial setup 
To start, let’s first create an array called board that we will be using in this example.
 The board will be a two-dimensional array. 
By two-dimensional array we mean - one array holding multiple (in our case three other) arrays. 
Here is the visual representation:

Each nested array will have 3 elements, and they will be objects with two properties: x and y, 
defining their position in the array. Let’s see what this means. On the image above:

greenNestedArray is the first nested array, so its position is index zero,
blueNestedArray is the second nested array, so its position is index one,
burgundyNestedArray is the third nested array, so its position is index two.
x represents the index of the board array (the first nested array elements will have x set to 0, 
  the second nested array elements will have x set to 1, and the third nested array elements will have x set to 2).

y represents the position of each element in the nested (inner) array so it will be 0, 1 or 2 (since each nested array has 3 elements).

Let’s see: */

const player{
  x:1,
  y:1
};

function placeHorizontal (Player, command) ={

  if (commande ==='l') {
    thePlayer.y==
    }

else {
  the Player.y++

}
}
console.log(`Player has position: x=${thePlayer.x}, y=${thePlayer.y}`);



