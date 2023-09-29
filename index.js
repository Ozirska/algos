///////////// exo00 ///////////////
// const makesTen = (num1, num2) => {
//   return num1 == 10 || num2 == 10 || num1 + num2 == 10;
// };
// console.log(makesTen(9, 10));
// console.log(makesTen(9, 9));
// console.log(makesTen(1, 9));

///////////// exo01 ///////////////

// const calcAge = (age) => {
//   return age * 365;
// };
// console.log(calcAge(65));
// console.log(calcAge(0));
// console.log(calcAge(20));

///////////// exo02 ///////////////

// const addUp = (num) => {
//   if (num > 1000) {
//     console.log("To mutch");
//     return;
//   }
//   let result = 0;

//   for (let i = 0; i <= num; i++) {
//     result += i;
//   }
//   console.log(result);
// };
// addUp(4); //10    1+2+3+4
// addUp(13); //91
// addUp(600); //180300

///////////// exo03 ///////////////

// const minMax = (arr) => {
//   //   let val = arr.some((i) => typeof i !== "number");

//   //   if (arr.length == 0 || val) {
//   //     console.log("not valid");
//   //     return;
//   //   }
//   console.log(`${Math.min(...arr)}, ${Math.max(...arr)}`);
// OR
//   let sortedArr = arr.sort((a, b) => a - b);
//   //console.log(`min: ${sortedArr[0]}   max: ${sortedArr[sortedArr.length - 1]}`);
// };
// minMax([1, 2, 3, 4, 5]); // [1, 5]
// minMax([2334454, 5]); // [5, 2334454]
// minMax([1]); // [1, 1]

///////////// exo04 ///////////////

// const detectWord = (str) => {
//   console.log(
//     [...str].filter((letter) => letter == letter.toLowerCase()).join("")
//   );
// };
// detectWord("UcUNFYGaFYFYGtNUH"); // "cat"
// detectWord("bEEFGBuFBRrHgUHlNFYaYr"); // "burglar"
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"); // "embezzlement"

///////////// exo05 ///////////////

// let drinks = [
//   { name: "lemonade", price: 10 },
//   { name: "lime", price: 10 },
//   { name: "coke", price: 8 },
//   { name: "vodka", price: 17 },
//   { name: "water", price: 3 },
// ];
// const sortDrinkByPrice = (arr) => {
//   return arr.sort((a, b) => a.price - b.price);
// };
// console.log(sortDrinkByPrice(drinks));

///////////// exo06 ///////////////

// const animals = (chickens, cows, pigs) => {
//   return chickens * 2 + cows * 4 + pigs * 4;
// };
// console.log(animals(2, 3, 5)); // 36
// console.log(animals(1, 2, 3)); // 22
// console.log(animals(5, 2, 8)); // 50

///////////// exo07 ///////////////

// const profitableGamble = (num1, num2, num3) => {
//   return num1 * num2 - num3 > 0;
// };
// console.log(profitableGamble(0.2, 50, 9)); // true
// console.log(profitableGamble(0.9, 1, 2)); // false
// console.log(profitableGamble(0.9, 3, 2));

///////////// exo08 ///////////////

// const frames = (fr, min) => {
//   return fr * (min * 60);
// };

// console.log(frames(1, 1)); // 60
// frames(10, 1); // 600
// frames(10, 25); // 15000

///////////// exo09 ///////////////

// const calculateFuel = (distance) => {
//   if (distance <= 0) return;
//   let result = distance * 10;
//   return result < 100 ? 100 : result;
// };
// console.log(calculateFuel(15)); // 150
// console.log(calculateFuel(23.5)); // 235
// console.log(calculateFuel(3)); // 100

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///     ALGOS  2  ///
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

///////////// exo00 ///////////////

// const countTrue = (arr) => {
//   if (arr.length == 0) return 0;
//   let res = arr.filter((el) => el === true);
//   return res.length;
// };
// countTrue([true, false, false, true, false]); // 2
// countTrue([false, false, false, false]); // 0
// countTrue([]); // 0

///////////// exo01 ///////////////

// const calcAge = (age) => {
//   return age * 365;
// };
// calcAge(65); // 23725
// calcAge(0); // 0
// calcAge(20); // 7300

///////////// exo02 ///////////////

// const addUp = (num) => {
//   let res = 0;
//   for (let i = 0; i <= num; i++) {
//     res += i;
//   }
//   console.log(res);
// };
// addUp(4); // 10
// addUp(13); // 91
// addUp(600); // 180300

///////////// exo03 ///////////////

// const toArray = (obj) => {
//   let res = [];
//   for (let i in obj) {
//     res.push([i, obj[i]]);
//   }
//   console.log(res);
// };
/// or //
// const toArray = (obj) => {
//   console.log(Object.entries(obj));
// };
// toArray({ a: 1, b: 2 }); // [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }); // [["shrimp", 15], ["tots", 12]]
// toArray({}); // []

///////////// exo04 ///////////////

// const arrayOfMultiples = (num, length) => {
//   let arr = [];
//   for (let i = 1; i <= length; i++) {
//     arr.push(num * i);
//   }
//   console.log(arr);
// };
// arrayOfMultiples(7, 5); // [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10); // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6); // [17, 34, 51, 68, 85, 102]

///////////// exo05 ///////////////

// const removeLeadingTrailing = (n) => {
//   let res = n;
//   while (res.charAt(0) === "0") {
//     res = res.slice(1);
//   }
//   if (res.includes(".")) {
//     while (
//       res.charAt(res.length - 1) === "0" ||
//       res.charAt(res.length - 1) === "."
//     ) {
//       res = res.slice(0, -1);
//     }
//   }
//   console.log(res);
// };
// removeLeadingTrailing("230.000"); // "230"
// removeLeadingTrailing("00402"); // "402"
// removeLeadingTrailing("03.1400"); // "3.14"
// removeLeadingTrailing("30"); // "30"

///////////// exo06 ///////////////

// const sortIt = (arr) => {
//   return arr.sort((a, b) => Number(a) - Number(b));
// };
// console.log(sortIt([4, 1, 3])); // [1, 3, 4]
// console.log(sortIt([[4], [1], [3000]])); // [[1], [3], [4]]
// console.log(sortIt([4, [1], 3])); // [[1], 3, 4]
// console.log(sortIt([[4], 1, [3]])); // [1, [3], [4]]
// console.log(sortIt([[3], 4, [2], [5], 1, 6])); // [1, [2], [3], 4, [5], 6]
///////////// exo07 ///////////////

// const calculator = (num1, operator, num2) => {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num2 == 0 ? "Can't divide by 0!" : num1 / num2;
//   }
// };
// console.log(calculator(2, "+", 2)); // 4
// console.log(calculator(2, "*", 2)); // 4
// console.log(calculator(4, "/", 2)); // 2

///////////// exo08 ///////////////

// const areaOfCountry = (contry, area) => {
//   console.log(
//     `${contry} is ${((area * 100) / 148940000).toFixed(
//       2
//     )}% of the total world's landmass`
//   );
// };
// areaOfCountry("Ukrain", 17098242); //"Ukraine is 11.48% of the total world's landmass"
// areaOfCountry("USA", 9372610); //"USA is 6.29% of the total world's landmass"
// areaOfCountry("Iran", 1648195); //"Iran is 1.11% of the total world's landmass"
// // Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

///////////// exo09 ///////////////

// const reverseWords = (str) => {
//   console.log(
//     str
//       .split(" ")
//       .reverse()
//       .filter((el) => el !== "")
//       .join(" ")
//   );
// };
// reverseWords(" the sky is blue"); // "blue is sky the"
// reverseWords("hello   world!  "); // "world! hello"
// reverseWords("a good example"); // "example good a"

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///     ALGOS 3   ///
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

///////////// exo00 ///////////////

// const oddishOrEvenish = (num) => {
//   let numStr = num.toString();
//   let sum = 0;
//   for (let i = 0; i < numStr.length; i++) {
//     sum += parseInt(numStr[i]);
//   }
//   console.log(sum % 2 == 0 ? "Evenish" : "Oddish");
// };
// oddishOrEvenish(43); // "Oddish"
// oddishOrEvenish(373); // "Oddish"
// oddishOrEvenish(4433); // "Evenish"

///////////// exo01 ///////////////

// const getTotalPrice = (groceries) => {
//   let sum = 0;
//   groceries.map((product) => (sum += product.quantity * product.price));
//   console.log(sum);
// };
// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.5 },
//   { product: "Eggs", quantity: 12, price: 0.1 },
//   { product: "Bread", quantity: 2, price: 1.6 },
//   { product: "Cheese", quantity: 1, price: 4.5 },
// ]); // 10.4

///////////// exo02 ///////////////
// const reverseOdd = (str) => {
//   console.log(
//     str
//       .split(" ")
//       .map((word) => {
//         if (word.length % 2 !== 0) {
//           return [...word].reverse().join("");
//         }
//         return word;
//       })
//       .join(" ")
//   );
// };
// reverseOdd("Bananas"); // "sananaB"
// reverseOdd("One two three four"); // "enO owt eerht four"
// reverseOdd("Make sure uoy only esrever sdrow of ddo length");
// // "Make sure you only reverse words of odd length"

///////////// exo03 ///////////////

// const isSmooth = (sentence) => {
//   let words = sentence.split(" ");
//   for (let i = 1; i < words.length; i++) {
//     if (words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0)) {
//       console.log(false);
//       return;
//     }
//   }
//   console.log(true);
// };
// isSmooth("Marta appreciated deep perpendicular right trapezoids"); // true
// isSmooth("Someone is outside the doorway"); // false
// isSmooth("She eats super righteously"); // true

///////////// exo04 ///////////////

// const sevenBoom = (arr) => {
//   let res = false;
//   arr.map((num) => {
//     //console.log(num.toString().charAt(0));
//     for (let i = 0; i < num.toString().length; i++) {
//       if (num.toString().charAt(i) == 7) {
//         res = true;
//       }
//     }
//   });
//   return res == true ? "Boom!" : "there is no 7 in the array";
// };
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // "Boom!"
// // 7 contains the number seven.
// console.log(sevenBoom([8, 6, 33, 100])); // "there is no 7 in the array"
// // None of the items contain 7 within them.
// console.log(sevenBoom([2, 55, 60, 97, 86])); // "Boom!"
// // 97 contains the number seven.

///////////// exo05 ///////////////

// const convert = (value) => {
//   let degrees = parseFloat(value);

//   if (value.includes("F")) {
//     let temp = ((degrees - 32) / 1.8).toFixed();
//     return `${temp}°C`;
//   } else if (value.includes("C")) {
//     let temp = degrees * 1.8 + 32;
//     return `${temp}°F`;
//   }
//   return "Error";
// };
// console.log(convert("35°C")); // "95°F"
// console.log(convert("19°F")); // "-7°C"
// console.log(convert("33")); // "Error"

///////////// exo06 ///////////////

// const findBrokenKeys = (str1, str2) => {
//   let wordStr1 = str1.split(" ");
//   let wordStr2 = str2.split(" ");

//   let res = [];
//   for (let index = 0; index < wordStr1.length; index++) {
//     for (let i = 0; i < wordStr1[index].length; i++) {
//       if (
//         wordStr1[index].charAt(i) != wordStr2[index].charAt(i) &&
//         !res.includes(wordStr1[index].charAt(i))
//       ) {
//         res.push(wordStr1[index].charAt(i));
//       }
//     }
//   }
//   console.log(res);
// };
// findBrokenKeys("happy birthday", "hawwy birthday"); // ["p"]
// findBrokenKeys("starry night", "starrq light"); // ["y", "n"]
// findBrokenKeys("beethoven", "affthoif5"); // ["b", "e", "v", "n"]

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///     ALGOS advanced   ///
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

///////////// exo00 ///////////////

// const func = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// func(20);

///////////// exo01 ///////////////

// const ransomNote = (noteText, magazineText) => {
//   const noteWords = noteText.split(" ");
//   const magazineWords = magazineText.split(" ");

//   const magazineWordCount = {};

//   for (const word of magazineWords) {
//     if (magazineWordCount[word]) {
//       magazineWordCount[word]++;
//     } else {
//       magazineWordCount[word] = 1;
//     }
//   }

//   for (const word of noteWords) {
//     if (!magazineWordCount[word] || magazineWordCount[word] === 0) {
//       return false;
//     } else {
//       magazineWordCount[word]--;
//     }
//   }
//   return true;
// };

// let noteText = "this is a note to you from a secret admirer";
// let magazineText =
//   "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you";
// console.log(ransomNote(noteText, magazineText));
///////////// exo02 ///////////////

// const isPalindrome = (text) => {
//   let textWithoutSpace = text.replace(/[\s,']/g, "").toLowerCase();
//   let reversed = textWithoutSpace.split("").reverse().join("");
//   console.log(textWithoutSpace.includes(reversed));
// };
// isPalindrome("kayak"); // true
// isPalindrome("race car"); // true
// isPalindrome("hello world"); // false
// isPalindrome("Madam, I'm Adam"); // true

///////////// exo03 ///////////////

// const alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// const caesarCipher = (text, num) => {
//   let textSpl = text.split("");
//   let cipher = [];
//   textSpl.map((letter) => {
//     let indexLetter = alphabet.indexOf(letter.toLowerCase());
//     if (indexLetter + num > alphabet.length) {
//       indexLetter = indexLetter - alphabet.length;
//     } else if (indexLetter + num < 0) {
//       indexLetter = alphabet.length - indexLetter - num;
//     }
//     letter == " " ? cipher.push(" ") : cipher.push(alphabet[indexLetter + num]);
//   });
//   console.log(cipher.join(""));
// };
// caesarCipher("zoo keeper", 2); // "bqq mggrgt"
// caesarCipher("bqq mggrgt", -2); // "zoo keeper"
// caesarCipher("My name is Henrique", 3); // "pb qdph lv khqultxh"

///////////// exo04 ///////////////

// const revers = (text) => {
//   let words = text.split(" ");
//   let resultat = [];
//   words.map((word) => resultat.push(word.split("").reverse().join("")));
//   console.log(resultat.join(" "));
// };
// revers("This is a string of words"); // "siht si a gnirts fo sdrow"

///////////// exo05 ///////////////

// const revers = (text) => {
//   let words = text.split(" ");
//   let result = ";";

//   let reversedWord = words.map((word) => {
//     let newWord = "";

//     for (let i = word.length - 1; i >= 0; i--) {
//       newWord += word.charAt(i);
//     }

//     return newWord;
//   });
//   result = reversedWord.join(" ");
//   console.log(result);
// };
// revers("This is a string of words"); // "siht si a gnirts fo sdrow"

///////////// exo06 ///////////////

// const numArray = (arr, num) => {
//   let result = [];
//   let startIndex = 0;
//   arr.forEach((element) => {
//     for (let i = startIndex; i < arr.length; i++) {
//       if (element + arr[i] == num) {
//         result.push([arr[i], element]);
//       }
//     }
//     startIndex++;
//   });

//   console.log(result);
// };
// numArray([1, 6, 4, 5, 3, 3], 7); // [[6,1], [3,4], [3,4]]

// ///////////// exo07 ///////////////
// const fibonacci = (num) => {
//   let result = [1, 1];

//   while (result.length < num) {
//     result.push(result[result.length - 1] + result[result.length - 2]);
//   }
//   console.log(result);
// };
// fibonacci(4); // [1, 1, 2, 3]
// fibonacci(9); // [1, 1, 2, 3, 5, 8, 13, 21, 34]
// fibonacci(6); // [1, 1, 2, 3, 5, 8]
