// let js = "amazing";
// console.log(40 + 8 + 23);
// console.log("rex")
// console.log(23);

// let firstName = 'Serah';
// console.log(firstName)

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;


// const markBmi = (markMass/(markHeight**2));
// const johnBmi = (johnMass/(johnHeight**2));
// console.log(markBmi, johnBmi);
// console.log(markBmi > johnBmi);

// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;


// console.log(markBmi, johnBmi);
// console.log(markBmi > johnBmi);

// const firstName = "Rex Munil";
// const job = "Programmer";
// const dateOfBirth = "1998";
// const yearNow = "2021";

// const jonas = "I'm " + firstName + ', a ' + (yearNow-dateOfBirth) + ' ' + "years old " + job + '!';
// console.log(jonas);
// const newJonas = `I'm ${firstName}, a ${yearNow - dateOfBirth} years old ${job}!`;
// console.log(newJonas);
// console.log(`Just a string bro.....`)

// const age = 15;
// if (age >= 18) {
//     console.log(`Sarah can star her driving licence `);
// }
// else{
//     const yearsLeft = 18-age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2030;
// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);



// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBmi = markMass/markHeight **2;
// const johnBmi = johnMass/johnHeight **2;

// if(markBmi > johnBmi){
//     console.log(`Mark's BMI (${markBmi}) is higher than John's(${johnBmi})!`);
// }else{
//     console.log(`John's BMI (${johnBmi}) is higher than Mark's(${markBmi})!`);
// }

// const favourite = Number(prompt(" Whats your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite)

// if(favourite === 23) {
//     console.log("Cool 23 is an amazing number");
// }else if (favourite === 7){
//     console.log("7 is also a cool number ");
// }else{
//     console.log("number is not 23 or 7");
// }

// const hasDriversLicense = false;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log("sarah should drive");
// }else {
//     console.log("someone else should drive");
// }

// const dolphinsAverage = (96 + 108 + 89)/3;
// const koalasAverage = (88 + 91 +110)/3;

// if(dolphinsAverage > koalasAverage){
//     console.log(`Dolphins are the winners of the competition with an avearge score of (${dolphinsAverage})!`);
// }else if(dolphinsAverage < koalasAverage){
//     console.log(`Koalas are the winners of the competition with an avearge score of (${koalasAverage})!`);
// }else if(dolphinsAverage === koalasAverage){
//     console.log(`its a draw guys!`)
// }


// const dScore1 = 97;
// const dScore2 = 112;
// const dScore3 = 101;

// const kScore1 = 109;
// const kScore2 = 95;
// const kScore3 = 123;

// const dAverage = Number((dScore1 + dScore2 + dScore3)/3);
// console.log(dAverage);

// const kAverage = Number((kScore1 + kScore2 + kScore3)/3);
// console.log(kAverage);
// const bill = 430;
// // let bill;
// if(bill >= 50 && bill <= 300){
//     tip = 0.15*bill;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);
// }else{
//     tip = 0.2*bill;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);


// }
const bill = 40;
// bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${tip = 0.15*bill}, and the total value ${tip + bill}`) :     
// console.log(`The bill was ${bill}, the tip was ${tip = 0.20*bill}, and the total value ${tip + bill}`);
const tip = bill >= 50 && bill <= 300 ? 0.15*bill : 0.20*bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);

