/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
const area = function (l1, l2) {
	return l1 * l2;
};
x = 10;
y = 5;

console.log('area of the rectangle is :', area(x, y));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = (a, b) => {
	if (a === b) return 3 * (a + b);
	else return 'not equal';
};

x = crazySum(3, 3);
console.log(x);

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = (c) => {
	if (c > 19) return 3 * Math.abs(c - 19);
	else return Math.abs(c - 19);
};
console.log(crazyDiff(20));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */
const boundary = (N) => {
	if (N == 400 || (N >= 20 && N <= 100)) return true;
	else return false;
};
console.log(boundary(700));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */
const strivify = (s) => {
	if (s.startsWith('Strive')) return s;
	else {
		s = 'Strive' + s;
		return s;
	}
};
console.log(strivify('School'));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
const check3and7 = (d) => {
	if (Math.sign(d) == 1) {
		if (d % 3 == 0 || d % 7 == 0) return true;
		else return false;
	} else return false;
};
console.log(check3and7(14));

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
const reverseString = (s1) => {
	let s2 = s1.split('');
	let s3 = s2.reverse();
	let s4 = s3.join('');
	return s4;
};
console.log(reverseString('strive'));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */
const upperFirst = function (str) {
	var splitStr = str.toLowerCase().split(' ');

	for (var i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}

	return splitStr.join(' ');
};

console.log(upperFirst('what is up strivers'));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
const cutString = function (stringed) {
	let h = stringed.length;
	return stringed.slice(1, h - 1);
};
console.log(cutString('Strive'));

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */
function giveMeRandom(n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr[i] = Math.floor(Math.random() * 10);
	}
	console.log(arr);
}
giveMeRandom(5);

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
