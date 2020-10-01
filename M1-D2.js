/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

console.log(12+20);


/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Create a variable named X containing the number 12
*/

/* WRITE YOUR CODE HERE */
let X=12;
console.log(X);

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

/* WRITE YOUR CODE HERE */
let name= 'John Doe';

/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

/* WRITE YOUR CODE HERE */
console.log(X-12);

/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

/* WRITE YOUR CODE HERE */
let name1= 'john';
let name2= 'John';
console.log(name1==name2);
console.log(name2);
console.log(name1==name2.toLowerCase());




/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

/* WRITE YOUR CODE HERE */
a=3;
{
if(a==1)
console.log('one');
else if(a==2)
console.log('two');
else if(a==3)
console.log('three');
else if(a==4)
console.log('four');
else if(a==5)
console.log('five');
else if(a==6)
console.log('six');
else if(a==7)
console.log('seven');
else if(a==8)
console.log('eight');
else
console.log('nine');
}





/*let z=9;
let th = ['','thousand','million', 'billion','trillion'];
let dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];

function toWords(s) 
    s = s.toString();
    s = s.replace(/[\, ]/g,'');
    if (s != parseFloat(s)) return 'not a number';
    let a = s.indexOf('.');
    if (a == -1)
        a = s.length;
    if (a > 15)
        return 'too big';
    let n = s.split(''); 
    let str = '';
    let sk = 0;
    for (let i=0;   i < a;  i++) {
        if ((a-i)%3==2) { 
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        } else if (n[i]!=0) { // 0235
         

console.log(toWords(z));*/




/* EXERCISE 7 (EXTRA)
Insert a value in a variable based on the result of a ternary if
*/
let y='a'
if(y=='a')
y=y+'e';
console.log(y);

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT 
*/
