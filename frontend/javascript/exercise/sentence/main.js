/**
 * Let's Form a Sentence
 * Gabungkanlah kata yang terdapat palam setiap varibel dibawah ini menjadi sebuah kalimat
 */ 

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

// console.log(word + " " + second + " " + third +  " " + fourth + " " + fifth +  " " + sixth + " " + seventh);
// console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);

// cara 1
let sentence = word.concat(" ", second, " ", third, " ", fourth, " ", fifth, " ", sixth, " ", seventh);

// cara 2
// let sentence = word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh;

// cara 3 template literals
// let sentence = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`;

console.log(sentence);