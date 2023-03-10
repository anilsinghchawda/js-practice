
// Challenge 1.

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK � 

// const markWeight=[78,95];
// const markHeight=[1.69, 1.88];
// const johnWeight=[92,85];
// const johnHeight=[1.95,1.76];

// const startTime = new Date().getTime();

// for(let i=0;i<=1;i++) {
//   const markBMI = markWeight[i] / markHeight[i] ** 2;
//   const johnBMI = johnWeight[i] / johnHeight[i] ** 2;
  
//   const markHigherBMI = markBMI > johnBMI;
  
//   console.log('Mark has a higher BMI than John = ', markHigherBMI)

//   if(i==1) {
//     const endTime = new Date().getTime();

//     console.log('Time take by process = ', endTime - startTime)
    
//   }
// }

//:FIXME:

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

// const markWeight=[78,95];
// const markHeight=[1.69, 1.88];
// const johnWeight=[92,85];
// const johnHeight=[1.95,1.76];

// const startTime = new Date().getTime();

// for(let i=0;i<=1;i++) {
//   const markBMI = markWeight[i] / markHeight[i] ** 2;
//   const johnBMI = johnWeight[i] / johnHeight[i] ** 2;
  
//   const markHigherBMI = markBMI > johnBMI;
  
//   if(markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}) !`)
//   } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}) !`)

//   }
// }

// :FIXME:

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:

// §Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// §Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// §Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

// const dolphinScore = [[96,108,89],[97,112,101],[97,112,101]];
//const koalasScore = [[88,91,110],[109,95,123],[109,95,106]];
//const minScore = 100;

/* for(let i = 0; i < koalasScore.length; i++) {
  const dolphinSum = dolphinScore[i].reduce((acc, val) => acc+=val)
  const koalasSum = koalasScore[i].reduce((acc, val) => acc+=val)
  const dolphinAverage = dolphinSum/3;
  const koalasAverage = koalasSum/3;
  console.log('both averages = ', dolphinAverage, koalasAverage)
  if(koalasAverage >= minScore && koalasAverage > dolphinAverage) {
    console.log(`Koalas won with the average score of ${koalasAverage}`)
  } else if(dolphinAverage >= minScore && dolphinAverage > koalasAverage) {
    console.log(`Dolphin won with the average score of ${dolphinAverage}`)
  } else if(koalasAverage >= minScore && koalasAverage === dolphinAverage) {
    console.log(`Match draw with the average score of ${koalasAverage}`)
  } else {
    console.log(`No team win as the average score is ${koalasAverage} and ${dolphinAverage}`)
  }
} */

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§
Data 1: Test for bill values 275, 40 and 430
Hints:
§To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

/*
const minAmt = 50;
const maxAmt = 300;
const bill = [275,40, 430];

for(let i=0;i<=2;i++){
const tip = bill[i]>minAmt && bill[i]<maxAmt ? (15*bill[i])/100 : (20*bill[i])/100;
console.log(`The bill is ${bill[i]}, the tip is ${tip}, and the total amount to pay = ${tip+bill[i]}`);  
}
*/


/*
JavaScript Fundamentals – Part 2

Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§To calculate average of 3 values, add them all together and divide by 3
§To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/
/*
const calcAverage = (s1, s2, s3) => (s1+s2+s3)/3; 

const d = [[44,23,71], [85,54,41]];
const c = [[65,54,49], [23,34,27]];

function checkWinner(avgD, avgC) {
	if(avgD >= avgC*2) { console.log(`Dolphins win (${avgD} vs ${avgC})`) } else if(avgC >= avgD*2) { console.log(`Koalas win (${avgC} vs ${avgD})`) }
}

for(let i=0;i<2;i++){
	const avgD = calcAverage(d[i][0], d[i][1], d[i][2]);
	const avgC = calcAverage(c[i][0], c[i][1], c[i][2]);
	checkWinner(avgD, avgC);
	
}
*/

/*
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 😀
*/

/*
const calcTip = (bill) => {
	if(bill >=50 && bill<=300) { return bill*15/100 } else { return bill*20/100};
}
const bills = new Array(125, 555, 44);
const total = new Array();
for(let i=0;i<bills.length;i++){
total.push(calcTip(bills[i]) + bills[i])
}

console.log(total, bills);
*/


/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/
/*
const mark = {
mass: 78,
height: 1.69,
bmi: 0,
calcBmi: function() {
	this.bmi = this.mass/(this.height ** 2); 
	return this.bmi;
},
}
const john = {
mass: 92,
height: 1.95,
bmi: 0,
calcBmi: function() {
	this.bmi = this.mass/(this.height ** 2); 
	return this.bmi;
},
}

mark.calcBmi();
john.calcBmi();

if(mark.bmi > john.bmi) {
	console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)
} else {
	console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`)
}
*/

/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1.
First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2.
To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3.
Call the function with the 'totals' array
GOOD LUCK 😀
*/
/*
const calcTip = (bill) => {
	if(bill >=50 && bill<=300) { return bill*15/100 } else { return bill*20/100};
}
const calcAverage = (arr) => {
  const sum = arr.reduce((acc, ele) => {
    return acc+=ele;
  }, 0)
  return sum/arr.length
}
const bills = [2, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const total = []
for(let i=0;i<bills.length;i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip)
  total.push(bills[i] + tip);
}
const average = calcAverage(total)

console.log('values = ', bills, total, average);
*/

/*Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§Data 1: [17, 21, 23]
§Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀
*/

function printForecast(arr) {
  let str='';
  for(let i = 0; i < arr.length; i++) {
    str += ` ... ${arr[i]}ºC in ${i+1} days`;
  }
  console.log(str + ' ...');
  console.log('\n');
}

const tmp = [[17,21,23], [12,5,-5,0,4]]

for(let i = 0; i < 2; i++) {
  printForecast(tmp[i])
}

























