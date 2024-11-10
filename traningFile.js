/* const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    console.log(x);
    txt += numbers[x];
} */


/* -----------------------------------------------------------------------------------------------------------------
2.
    *
   ***
  *****
 *******
*********
 */
/*
let result = '';

for(let row = 5; row > 0; row--){
   for(let space1 = 0; space1 < row; space1++){
       result += ' ';
   }
   for(let star1 = 5; star1 >= row; star1--){
       result += '*';
   }
   for(let star2 = 5; star2 > row; star2--){
       result += '*'
   }
   for(let space2=0; space2 < row; space2++){
       result += ' '
   }
   result += "\n";
}
console.log(result);
*/
/* ----------------------------------------------------------------------------------------------------------------- */
/*  -----------------------------------------------------------------------------------------------------------------
         1
        121
       12321
      1234321
     123454321
    12345654321
   1234567654321
  123456787654321
 12345678987654321
1234567890987654321

 */

/* let result = '';
let h = 9;

for (let str = 1; str <= h; str++){
    for(let j = h; j > str; j--){
        result += 'd';
    }
    for(let a = 1; a <= str; a++){
        result += a;
    }
    for(let b = 1; b < str; b++){
       result += str - b;
    }
    for(let c = h; c > str; c--){
        result += 'd'
    }
    result += '\n';
}
console.log(result); */
/* -----------------------------------------------------------------------------------------------------------------
3. **
1 
2 3 
4 5 6 
7 8 9 10
11 12 13 14 15
*/
/* let result = '';
let counter = 1;
h = 5; 

for( str = 1; str <= h; str++){
    for( j = 0; j < str; j++){
        result += counter + ' ';
        counter++;
    }
    result += '\n';
}
console.log(result); */



/* -----------------------------------------------------------------------------------------------------------------
3. 
1 
2 6 
3 7 10 
4 8 11 13 
5 9 12 14 15
*/

/* let result = '';
let h = 5;


for(let str = 1; str<=h; str++){
    let container = str;
    for(let i = 1; i<=str; i++){
        result += container + ' ';
        container += h-i;
    }
    result += '\n';
}
console.log(result); */

/*-----------------------------------------------------------------------------------------------------------------
вывести слова у которых есть буква о и а из массива ['Капуста','Репа','Морковка','Лук','Картошка']*/

/* let arr = ['Капуста', 'Репа', 'Морковка', 'Лук', 'Картошка'];
let newString = '';

for (let item = 0; item < arr.length; item++) {
    let word = arr[item];
    for (let letter = 0; letter < word.length; letter++) {
        if (word[letter] == 'а') {
            for (let letter2 = 0; letter2 < word.length; letter2++) {
                if (word[letter2] == 'о') {
                    newString += word + ' ';
                    break;
                }
            }
            break;
        }
    }
}
console.log(newString); */





/* -----------------------------------------------------------------------------------------------------------------
//5//let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
// найти сумму всех чисел, выведите в формате ‘The sum of all numbers is: 25’
*/
/* let arr1 = ['mama', 1000, 'Sunday', 3, 'my',true,'limit', null,15, 'elite', undefined, 100, 'destruction', 313,'abc', 425, 'apples'];
let sum = 0;
let result = 'The sum of all numbers is: ';

for (let item = 0; item < arr1.length; item++) {
    if (!isNaN(arr1[item]) && typeof(arr1[item]) === 'number') {
        console.log(arr1[item]);
        sum += arr1[item];
    }
}
result += sum;
console.log(result); */
/* -----------------------------------------------------------------------------------------------------------------
 *//* //дан массив, найди сумму квадратов всех элементов
arr = [1, 2, 3, 1, 5]; /*


function squreSum(numbers){
    let sum = 0;
    for (let i = 0; i<numbers.length; i++){
        //sum += numbers[i]**2;
        sum += Math.pow(numbers[i], 2);
    }
    return sum
}

console.log(squreSum(arr));
 */

/*write a function that takes an array of numbers and returns the sum of the numbers.
The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0;
example:
input [1, 5.2, 4, 0, -1]
output 9.2 */
/* let array = [1, 5.2, 4, 0, -1];
function summa(array){
    let result = 0;
    for (let i =0; i < array.length; i++){
        if (isFinite(array[i]) == true){
            result += array[i];
        }
    }
    return result;
}

console.log(summa(array)); */
/* ----------------------------------------------------------------------------------------------------------------- */

/* Complete the square sum function so that it
squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 */
/* 
let arr = [1, 2, 2];


let squere = arr.reduce((container, value) => {
    container += Math.pow(value, 2);
    return container;
});

console.log(squere);

let arr2 = [1, 2, 2];

function squere2(arr){
    result = 0
    for( let i = 0; i<arr.length; i++){
        result += (arr[i] ** 2);
    }
    return result
}

console.log(squere2(arr2));


function squareSum(numbers){
    let square = numbers.reduce((container, value) => {
      container += Math.pow(value, 2);
      return container;
    }, 0);
    return square;
} */
/* ----------------------------------------------------------------------------------------------------------------- */

   /*  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

    Examples
    
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
    Notes
    
    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first. */
/* 
function highAndLow(numbers){
  // ...
  let arr = numbers.split(' ').map(Number);
  let min = arr[0];
  let max = arr[0];
  let result ='';
  console.log(arr.length);
  for (let i = 1; i<arr.length; i++){
    if (max < arr[i]){
      max = arr[i];
    }
    else if (min > arr[i]){
        min = arr[i];
    }
  }
  result += max + ' ' + min;
  return result;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); */

/* ----------------------------------------------------------------------------------------------------------------- */

/* Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

/* 
function XO(str) {
    //code here
    str = str.toLowerCase();
    oCounter = 0;
    xCounter = 0;
    for(let i =0; i<str.length; i++){
        if (str[i] == 'o'){
            oCounter++;
        } 
        else if ( str[i] == 'x'){
            xCounter++;
        }
    }
    if (oCounter == xCounter){
        return true;
    } else {
        return false;
    }
}

console.log(XO("xxOo")); */

/* ----------------------------------------------------------------------------------------------------------------- */

/* Write a function, persistence, that takes in a positive parameter num and
returns its multiplicative persistence, which is the number of times you must
multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication) */
/* 
function persistence(num) {
    //code me
    if (String(num).length == 1) {
        return 0;
    }
    else {
        container = 1;
        counter = 0;
        let spiner = String(num)
        while (spiner.length > 1) {
            for (let i = 0; i < spiner.length; i++) {
                container *= Number(spiner[i]);
            }
            spiner = String(container);
            container = 1
            counter++
        }
    }
    return counter;
}
 console.log(persistence(39)); */


/* ----------------------------------------------------------------------------------------------------------------- */

/* Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. 
Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.

Notes: You should not modify the original array.
you do not have to verify the validity of the parameter, 
and do not worry about the number of elements of the array is not a multiple of 3.

Example:

threeInOne( [1,2,3]) should return [6]
threeInOne( [1,2,3,4,5,6]) should return [6,15]
threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21] */

/* 
function threeInOne(arr){
    let arrResult = [];
    let container = 0;
    for (let i = 1; i<=arr.length; i++){
        container += arr[i-1]
        if (i%3 == 0){
            arrResult.push(container);
            container = 0;
        }
    }
    return arrResult;
}
console.log(threeInOne([1,3,5,2,4,6,7,7,7])); */
/* 
function threeInOne(arrOriginal){
    let arr = arrOriginal.slice();
    let result = [];
    while (arr.length > 0){
        let subArr = arr.splice(0, 3);
        let preResult = subArr.reduce((accum, value) => {
            accum += value;
            return accum;
        })
        result.push(preResult);
    }
    return result
}
console.log(threeInOne([1,2,3,4,5,6,7,8,9]));

 */
/* ----------------------------------------------------------------------------------------------------------------- 

/* This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
 */
/* let str = "ZpglnRxqenU";

function accum(s) {
    result =s[0].toUpperCase();
  for (let i=1; i<s.length; i++){
    result += '-' + s[i].toUpperCase();
    result += ((s[i]).toLowerCase().repeat(i))
  }
  return result
}

console.log(accum(str));
 */

/* ----------------------------------------------------------------------------------------------------------------- 
/* The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return). Then, traverse obj, checking each key and value. 
If the length of the key is equal to 5, then push the key to your array. 
Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array.

You should use for..in in your code, otherwise your solution may not pass this kata. */

/* function giveMeFive(obj){
    let arr = [];
    for (let key in obj){
        if (key.length == 5){
            arr.push(key);
        }
        if (obj[key].length == 5){
            arr.push(obj[key]);
        }
    }
    return arr
} */

//console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));
//console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));
/* ----------------------------------------------------------------------------------------------------------------- 
/* 
/* Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

/* function pigIt(str){
    let arrStr = str.split(' ');
    let result = '';
    let punctuationRegex = /[.,!?;:()]/;
    for (let word in arrStr){
        if (punctuationRegex.test(arrStr[word]) != true){
            result += arrStr[word].slice(1) + arrStr[word][0] + 'ay' + ' ';
        }
        else{
            result += arrStr[word]
        }
    }
    return result.trim();
}

console.log(pigIt('Pig latin is cool !')); */

/*
 ----------------------------------------------------------------------------------------------------------------- 
/* 
/* You will be given an array of numbers.
For each number in the array you will need to create an object.
The object key will be the number, as a string. 
The value will be the corresponding character code, as a string.
Return an array of the resulting objects.
All inputs will be arrays of numbers. 
All character codes are valid lower case letters. The input array will not be empty. 
*/
/* 
function numObj(s){
    let result = [];
    for (let value in s){
        result.push({[s[value]]: String.fromCharCode([s[value]]) })
    }
    return result;
} 
*/

/* 
function numObj(s){
    return s.map(value => ({[value]: String.fromCharCode(value) }))
}


console.log(numObj([101,121,110,113,113,103])); 
*/
/*
 ----------------------------------------------------------------------------------------------------------------- 
/* 
/* 
You will be given an array of objects (associative arrays in PHP) 
representing data about developers who have signed up to attend the next coding meetup 
that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
your function should return true.

Notes:

The input array will always be valid and formatted as in the example above.
*/
/* 
let list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
let list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
];


function isRubyComing(list) {
    for (let obj in list){
        if (list[obj].language == 'Ruby'){
            return true;
        }
    }
    return false;
}


console.log(isRubyComing(list1))
console.log(isRubyComing(list2))
 */
/*
 ----------------------------------------------------------------------------------------------------------------- 
/* 
/* 
You will be given an array of objects (associative arrays in PHP, tables in COBOL) 
representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will 
have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
Notes:

The order of the properties in the objects does not matter (except in COBOL).
The input array will always be valid and formatted as in the example above.
*/
/* 
list1 = [
    {
      firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    },
    {
      firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    },
    {
      firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    },
  ];
 */
/* function greetDevelopers(list) {
    for (let obj in list){
        list[obj].greeting = `Hi ${list[obj].firstName}, what do you like the most about ${list[obj].language}?`
    }
    return list
} */
/* 
function greetDevelopers(list){
    list.map(obj => 
        obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`
    )
    return list;
}


console.log(greetDevelopers(list1));
 */
/*
 ----------------------------------------------------------------------------------------------------------------- 
*/
/*
An Ironman Triathlon is one of a series of long-distance triathlon races organized by the World Triathlon Corporaion (WTC). It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile) (run, raced in that order and without a break. It hurts... trust me.

    Your task is to take a distance that an athlete is through the race, and return one of the following:
    
    If the distance is zero, return 'Starting Line... Good Luck!'.
    
    If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.
    
    If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.
    
    If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, and the remaining race distance as the value.
    
    If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.
    
    Finally, if the athlete has completed te distance, return "You're done! Stop running!".
    
    All distance should be calculated to two decimal places.
*/


/* 
function iTri(distance){
    let totalDistance = 2.40 + 112 + 26.20;
    if (distance == 0){
        return 'Starting Line... Good Luck!';
    }
    else if (distance > 0 && distance < 2.4){
        distDiff = (totalDistance - distance).toFixed(2);
        return({'Swim': `${distDiff} to go!`});
    }
    else if (distance > 2.4 && distance < 114.4){
        distDiff = (totalDistance - distance).toFixed(2);
        return({'Bike': `${distDiff} to go!`});
    }
    else if(distance >= 114.4 && distance < (totalDistance - 10)){
        distDiff = (totalDistance - distance).toFixed(2);
        return({'Run': `${distDiff} to go!`});
    }
    else if (distance >= (totalDistance - 10) && distance < totalDistance){
        return({'Run': 'Nearly there!'});
    }
    else {
        return ("You're done! Stop running!");
    }
}
console.log(iTri(123));
console.log(iTri(150));
console.log(iTri(36));
console.log(iTri(103.5));
console.log(iTri(0));
console.log(iTri(2)); 
*/
/*
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
*/
/*  
Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). 
Sort the channels in an alphabetical order, remove duplicates and, finally, 
return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.

Examples:
var arr = ["BBC1", "BBC2", "MTV"];
redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

var arr = ["BBC1", "BBC1", "BBC2", "MTV"];
redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
*/
/*  
function redarr(arr) {
    let newObj = {};
    let newArr = [...new Set(arr)]; 
    newArr.sort();
    for (let i = 0; i<newArr.length; i++){
        newObj[i] = newArr[i]
    }
    return newObj;    
}
console.log(redarr(["BBC1","BBC2","MTV"]))
console.log(redarr(["BBC1","BBC1","BBC2","MTV"]))
*/
/*
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
*/
/* 
It's important day today: the class has just had a math test. You will be given a list of marks. Complete the function that will:

Calculate the average mark of the whole class and round it to 3 decimal places.
Make a dictionary/hash with keys "h", "a", "l" to make clear how many high,
average and low marks they got. High marks are 9 & 10, average marks are 7 & 8, 
and low marks are 1 to 6.
Return list [class_average, dictionary] if there are different type of marks,
or [class_average, dictionary, "They did well"] if there are only high marks.
Examples

[10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

[5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]
*/
/* 
function testResult(array) {
    // your code
    let summa = 0;
    let dict = {'h':0, 'a': 0, 'l':0};
    let result = [];
    for (let i = 0; i<array.length; i++){
        //console.log(array[i])
        summa += array[i];
    }
    averageResult = (summa/array.length).toFixed(3);
    for (let value of array){
        //console.log('value ----->' + value)
        if (value > 8){
            //console.log("dict['h'] ----->" + dict['h'])   
            dict['h'] += 1;
        }
        else if (value < 9 && value > 6){
            dict['a'] += 1;
        }
        else {
            dict['l'] += 1;
        }
        //console.log("full dict----->" + JSON.stringify(dict))
    }
    result.push(+averageResult);
    result.push(dict);
    //result.push(JSON.stringify(dict));
    if (dict['h'] == array.length){
        result.push('They did well')
        return result
    }
    else{
        return result
    }
}

console.log(testResult([10,9,9,10,9,10,9]))
//[9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']
console.log(testResult([5,6,4,8,9,8,9,10,10,10]))
//[7.9, {'h': 5, 'a': 2, 'l': 3}]
 */

