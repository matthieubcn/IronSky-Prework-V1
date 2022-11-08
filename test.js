let name = "Ironname";
let age = "25";
console.log (name);
console.log (age);
let favoritefood
console.log (favoritefood);

var FirstNum, SecondNum, Average, Message
FirstNum = 1
SecondNum = 2
Average = (FirstNum+SecondNum)/2
Message = "The average number is" + Average
console.log (Message)

let myAge;
myAge = 0;
myAge = 35;
const myName= 'Tuly';
console.log (myAge,myName)

let FavoriteFood;
FavoriteFood = 'Steak';
console.log ('Value:',FavoriteFood,'Type:',typeof FavoriteFood);
FavoriteFood = 20;
console.log ('Value:', FavoriteFood,'Type:', typeof FavoriteFood);


let MyAge1=33;
let MyAge1New= MyAge1 + 1;
console.log (MyAge1New);

let cheeseCalories = 200;
let eggsRequired = 4;
let caloriesPerEgg = 75;

let eggsCalories;
eggsCaloriesCalories= eggsRequired*caloriesPerEgg;
console.log(eggsCalories);

let omeletteDuFromageCalories;
omeletteDuFromageCalories=cheeseCalories+eggsCalories;
console.log(omeletteDuFromageCalories);
console.log(omeletteDuFromageCalories/2);

let name1='Ironhacker';
console.log('the name'; name1)

let age3= 25
console.log(`i am ${age3} yers old`)
console.log (`Seriously you are ${age3}`)
console.log ( `How old are you`)
console.log ( `No it is not true I am ${age3+1}`)

const fact= I love webdev
console.log( `I am happy with ${fact} and sure bout ${fact.lenght}`)

// lets put a comment here

const greeting= `Hello`
console.log (greeting[0]);
console.log (greeting[3]);
console.log (greeting[9]);
console.log (greeting [1000]);

const favoritesong= `No woman no cry`
console log (favoritesong.indexOf(woman))
console log (favoritesong.indexOf(w))
console log (favoritesong.indexof(z))

const FavoritePhrase = `I love you`;
console.log (FavoritePhrase.indexof(`love`))
console.log (FavoritePhrase.indexof(`y`))
console.log (FavoritePhrase.indexof(`z`))

let statement = `I'm the Ironmaker and I cannot wait to start the courses`
let test1 = statement.slice(1,19)
console.log (test1)


let turtle1 = 'Leonardo';
let turtle2 = 'Raphael';
let turtle3 = 'Donatello';
let turtle4 = 'Michelangelo';

let allTurtles = '';
allTurtles += turtle1
console.log(allTurtles)

let allTurtles = '';
allTurtles += '' + turtle1;
allTurtles += '' + turtle2;
allTurtles += '' + turtle3;
allTurtles += '' + turtle4;
console.log(allTurtles)

console.log(allTurtles.length)
console.log(allTurtles.indexOf('Donatello'))

console.log(true && false); // ==> ?
console.log(11 % 3 === 2); // ==> ?
console.log(false || true); // ==> ?
console.log(!true || false); // ==> ?
console.log(17 == '17'); // ==> ?
console.log(123 === '123'); // ==> ?

let age4 = 25
let UnderEightTeen= 18

if (UnderEightTeen) {
console.log(`Sorry you cannot enter`);
} else {
 console.log (`Welcome to that club`);
}

let HardWork =7
if (HardWork > 8) {
    console.log (`you are the best`);
}
else if (HardWork > 6) {
    console.log ('you can do better');
}
else if (HardWork >=5) {
    console.log (`you get better bitch`)
}
else {
    console.log ('you sucks')
}


let Fruit = `Apple`
let TypeFruit = ``
switch (Fruit){
case 'apple':
case 'pear':
TypeFruit= `pome`
break;
case 'peach':
case 'coconut':
TypeFruit= `drupe`
break;
case 'strawberry':
case  'blueberry':
case 'blackbeerry':
TypeFruit = `berry`
break;
case 'beans':
case 'peas':
TypeFruit = `legumes`
break;
default:
TypeFruit = 'other'
}

console.log(`${fruit} is type of: ${type}.`);

let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice;
let secondPlayerChoice;

let firstPossibility;
let secondPossibility;
let thirdPossibility;
let fourthPossibility;
let fifthPossibility;
let sixthPossibility;
let seventhPossibility;

firstPossibility = firstPlayerChoice === rock && secondPlayerChoice ===scissors;
secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
fifthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;
sixthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;
seventhPossibility = firstPlayerChoice === secondPlayerChoice;

if(firstPossibility|| secondPossibility || thirdPossibility){
    console.log('The player one wins');
}
else if (fourthPossibility || fifthPossibility ||sixthPossibility){
    console.log ('the player 2 won')
}
else if ( seventhPossibility) {
    console.log ('Match nul')
}
else{
    console.log ('something sucks')
}



let name10 = 'thibault';
switch (name10){
    case 'Roger':
    console.log ('Not the good name buddy');
    break;
    case 'Thibault':
    console.log (' Thats it baby')
    default:
    console.log ('Try another name')
}


let counter = 1;
while (counter <=!10){
    console.log (counter)
    counter + = 1;
}

let counter = 0;
while (counyer <=30) {
    console.log (counter)
    counter +=1
}

for (let i=10; i>=0, i--) {
    console.log (i);
}
for (i === 0) {
    console.log ('Boum')
}

for (let z=30; z>=0; z--){
    if (z===25){
        console.log ( you are the best );
        break;
    }
    else {
        console.log(z)
    }
}

for (let f=1; f <=50; f++){
    if (f % 10 === 0 || f % 15 === 0) {
        console.log (`Donkey`)
    }
        // divide by 10 and 15 put donkey

    if (f % 2 !==2  &&  (f-1) % 10 === 0) {
        console.log (`Monkey`)
        // if one of condition above is solved run the code 
    }

    if (f % 5 === 0){
        console.log(f)
    }
    // exclude the number divided by 5
}



// function with declaration

function sayHello (language){
    switch (language) {
        case 'fr':
        console.log ('Bonjour');
        break;
        case 'es':
        console.log('Hola');
        break;
        case 'de':
        console.log ('Hallo')
        break;
        default:
        console.log('Hello');
}
}

// switch funtion to define the language put more here

sayHello ('fr'); // ==> Bonjour
sayHello ('es'); // ==> Hola
sayHello ('de'); //==> Hallo
sayHello(); // ==> Hello by default

function calculator (symb,num,num1) {
    if (symb === '+'){
        console.log (num+num1);
    }
    else (symb === '-'){
        console.log (num - num1);
    }
    else (symb === '*'){
        console.log (num * num1);
    }
    else (sym === '/'){
        console.log (num/num1)
    }
}

calulator ('+' ; 5 ; 9) // ==> Put your value here

function calculateSum(num1, num2) {
    return num1 + num2;
  }
   
  function printResult() {
    // in the line below, the function result will be stored inside the variable: result
    const result = calculateSum(3, 6);
    console.log(`The result is ${result}.`);
  }
 
  

  function colorMix (col1,col2) {
    if ((col1 === 'red' && col2 === 'blue') || (col1 === 'blue' && col2 === 'red')) {
        return :'violet' //==> result here need and and or conditions
        // the statement to execute on the condition will be here
      }
     else if ((col1 ==='red' && col2 === 'yellow') || (col1 ==='yellow' && col2 === 'red')){
        return : 'orange' // ==> result here for the conditions else if
      }
      else if ((col1 === 'blue'&& col2 ===='yellow')||(col1 ==='yellow' && col2 ==='blue')) {
        return : 'green' // ==> result here for the the conditions else if
      }
  }


function myColor (){
    const result = colorMix(col1,col2)
    console.log (myColor)
}

