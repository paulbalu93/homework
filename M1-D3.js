/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
const myArray = [1,2,3,4,5];
console.log(myArray);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
const myObject =
{
    name : 'Paul',
    surname : 'Maliakel',
    email : 'paulbalu93@gmail.com',
    age: 26,
}

console.log(myObject.name)
console.log(myObject.age)


/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */

myObject.haveLicense = true
console.log(myObject.haveLicense)

/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */
delete myObject.age
console.log(myObject);


/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */
const myObject2 =
{
name : 'Don',
surname : 'Mathew',
email : 'donmathew@gmail.com',
}
// with Ternary Operator
let emailcheck = myObject2.email=== myObject.email ? 'Equal': 'NotEqual';
console.log(emailcheck);

//with if else case

if(myObject.email === myObject2.email)
console.log('Equal')
else
console.log('Not Equal')



/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */

const user1 =
{
    totalShoppingCart: 60,
    
}

const user2 = 
{
    totalShoppingCart : 40,
}
//For user 1

let Shipping = user1.totalShoppingCart>50 ? 0:10 ;
let totalCost = user1.totalShoppingCart + Shipping ;
console.log('Total Cost for User 1 :', totalCost);

//For user 2
let Shipping2 = user2.totalShoppingCart>50 ? 0:10 ;
let totalCost2 = user2.totalShoppingCart + Shipping2 ;
console.log('Total Cost for User 2 :', totalCost2);



/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */

let totalShopping = totalCost - ((20/ 100)* totalCost);
console.log(totalShopping);

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
const car =
{
    brand: 'Audi',
    model: 'A4',
    licensePlate: 'BL-62-2020',
}
console.log('Price after black friday discount' , car.licensePlate);


const car1 =
{
    brand: 'Audi',
    model: 'A6',
    licensePlate: 'BL-62-2021',
}

const car2 =
{
    brand: 'Benz',
    model: 'C',
    licensePlate: 'BL-62-2024',
}

const car3 =
{
    brand: 'Mustang',
    model: 'Gt',
    licensePlate: 'BL-62-2030',
}
const car4 =
{
    brand: 'Lamborghini',
    model: 'Gallardo',
    licensePlate: 'BL-62-2040',
}


Object.assign(car1,car)
console.log(car1);

car1.licensePlate = 'BL-63-1234';

console.log(car1.licensePlate);



/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */

const carsForRent = [car, car1,car2,car3,car4];
console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

carsForRent.pop();
carsForRent.shift();
console.log(carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */
for(let i=0; i<carsForRent.length; i++)
{
    console.log('Type :',carsForRent[i].model);
    console.log('LicensePlate :',carsForRent[i].licensePlate);
    console.log('Brand :',carsForRent[i].brand);
}


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */
let carsForSale = [ 
    car5 = { brand: 'Tesla',
model: 'S',
licensePlate: 'BL-62-2045',}, 
car6 = { brand: 'Tesla',
model: 'Y',
licensePlate: 'BL-62-2055',},
car7 = { brand: 'Benz',
model: 'C',
licensePlate: 'BL-62-2065',}  ]

let totalCars = carsForRent.length + carsForSale.length;
console.log(totalCars)



/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */
for(let i=0; i<carsForSale.length; i++)
{
    console.log('car :', i+1);
    console.log('Type :',carsForSale[i].model);
    console.log('LicensePlate :',carsForSale[i].licensePlate);
    console.log('Brand :',carsForSale[i].brand);
}

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
