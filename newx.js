'use strict';

//FUNCTIONS
// function logger(name) {
//     const details = `My name is ${name}!`;
//     return details;
// }

// // calling / running / invoking fuction
// console.log(logger(`Rex_Munil`))


// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const apppleOrangeJuice = fruitProcessor(2, 4);
// console.log(apppleOrangeJuice);


//function declaration
// function calcAge1(birthyear) {
//     return 2021 - birthyear;
// }

// const age1 = calcAge1(1998);
// //function expression
// const calcAge2 = function(birthyear) {
//     return 2021 - birthyear;
// }
// const age2 = calcAge2(1997);
// console.log(age1, age2);

//arrow function

// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName)=> {
//     const age = 2021 - birthYear;
//     const retiment = 65 - age;
//     // return retiment;
//     return `${firstName} retires in ${retiment} years`;
// }
// console.log(yearsUntilRetirement(1998, `rex`));
// console.log(yearsUntilRetirement(1997, `munil`));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `juice with ${applePieces} apple Pieces and ${orangePieces} orange Pieces.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const apppleOrangeJuice = fruitProcessor(2, 4);
// console.log(apppleOrangeJuice);

// const cacAge = function(birthYear) {
//     return 2021 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = cacAge(birthYear);
//     const retiment = 65 - age;

//     if(retiment > 0){
//         return retiment;
//     }else{
//         return -1;
//     }
    
//     // return `${firstName} retires in ${retiment} years`;
// }
// console.log(yearsUntilRetirement(1998, `rex`));
// console.log(yearsUntilRetirement(1950, `munil`));


//CHALLENGE

// const calcAverage = (a, b, c)=> (a + b + c)/3;
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// console.log(avgDolphins, avgKoalas);

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2*avgKoalas){
//         console.log( `Dolphin wins(${avgDolphins} vs. ${avgKoalas})`);
//     }else if(avgKoalas >= 2*avgDolphins){
//         console.log( `Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
//     }else{
//         console.log(`No team wins......`);
//     }
// }
// checkWinner(avgDolphins, avgKoalas);

// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);

// console.log(avgDolphins, avgKoalas);
// checkWinner(avgDolphins, avgKoalas);

//FUNCTION ASSIGNMENTS
///#1
// const describeCountry = function(country, population, capitalCity){
//      return`${country} has ${population} million people and its capital city is ${capitalCity}.`;
//  }
// const finland = describeCountry(`Finland`, 6, `Helsinki`);
// const uganda = describeCountry(`Uganda`, 43, `Kampala`);
// console.log(finland, uganda);

///#2
//expression
// const percentageOfWorld1 = function(country, population){
//     const percentage = (population/7900)*100;
//     return `${country} has ${population} lillion people, so it's about ${percentage} of the world population.`;
// }
// const china = percentageOfWorld1(`china`, 1441);
// console.log(china);
//declartion
// function percentageOfWorld2(country, population){
//     const percentage = (population/7900)*100;
//     return `${country} has ${population} lillion people, so it's about ${percentage} of the world population.`;  
// }
// const china = percentageOfWorld2(`china`, 1441);
// console.log(china);
//arrow function

// const percentageOfWorld3 = population => (population/7900)*100;
// const china = percentageOfWorld3(1441);
// console.log(china);

//calling a function
// const describePopulation = function(country, population){
//     const percentage = percentageOfWorld3(population);
//     console.log(`${country} has ${population} million people, so it's about ${percentage} of the world population.`);  
// }

// const china = describePopulation(`china`, 1441);

let population = 13;
if(population > 33){
    console.log(`portugal's population is above average.`);
}else{
    console.log(`Portugal's population is 22 millon below average.`);
}










