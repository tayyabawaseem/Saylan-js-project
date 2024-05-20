/* ===== Question 1 ==== */

document.write("<h1><center>Question : 1 </center></h1>");


var num1 = 3;
var num2 = 5;

/* Addition */
var add = num1 + num2;
document.write("<h1> Sum of two numbers:-</h1>" + "<h2>" + num1 + " + " + num2 + " = " + add + "</h2><br><br><hr>");

/* Question 2 */
document.write("<h1><center>Question : 2 </center></h1>");

/* Subtraction */
var add = num1 - num2;
document.write("<h1> Subtract of two numbers:-</h1>" + "<h2>" + num1 + " - " + num2 + " = " + add + "</h2>");

/* Multiply */
var add = num1 * num2;
document.write("<h1> Multiply of two numbers:-</h1>" + "<h2>" + num1 + " * " + num2 + " = " + add + "</h2>");

/* Divide */
var add = num1 / num2;
document.write("<h1> Divide by two numbers:-</h1>" + "<h2>" + num1 + " / " + num2 + " = " + add + "</h2>");

/* Modulus */
var add = num1 % num2;
document.write("<h1> Modulus by two numbers:-</h1>" + "<h2>" + num1 + " % " + num2 + " = " + add + "</h2> <hr>");


/* Question 3 */

document.write("<h1><center>Question : 3</center></h1>");

// a. Declare a variable

var myVariable;

// b. Show the value of the variable in your browser
console.log("Value after variable declaration is: " + myVariable);

var myVariable = 6;

// c. Initialize the variable with some number.
console.log("Value after variable declaration is: " + myVariable);

var increment = 5;
// d. Show the value of variable in
document.write("<b>Intialized value is : </b>" + "<b>" + increment + "<br><br></b>");

// e. increment the value
increment++;

// f. Show the value of after increment
document.write("<b>Increment value is : </b>" + "<b>" + increment + "<br><br></b>");

// g. Add 7 to the variable.
var num = 7;
var num3 = 6;

// h. Show the value of variable
var sum = num + num3;
document.write("<b>Add numbers : </b> " +"<b>" + num  + " + " + num3 + " = " + sum + "</b><br><br>" );

// i. Decrement the variable.
sum--;

// j. Decrement value
document.write("<b>Decrement value is : </b> " + sum + "</b><br><br>" );

// k. Dividing by 3
var mod = sum % 3;

// l. Output : “The remainder is : 0”.
document.write("<b>Reminder is : <b>" + "<b>" + mod +"</b><br><br><hr>");

/* ===== Question 4 ==== */

document.write("<h1><center>Question : 4 </center></h1>");

var movieTicket = 600;
var totalTickets = 5;
var totalCost = movieTicket * totalTickets;

document.write("<b> Total amount of buying tickets is  : </b> " +"<b>" + movieTicket  + " * " + totalTickets + " = " + totalCost + "PKR" + "</b><br><br><br><hr>" );


/* ===== Question 5 ==== */

document.write("<h1><center>Question : 5 </center></h1>");

var number = 4 ;

document.write("<b> Multiplication Table of </b>" + "<b>" +  number + ":<br><br></b>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br><br><hr>");


/* ===== Question 6 ==== */

document.write("<h1><center>Question : 6 </center></h1>");

var celsiusTemp = 25;
var temp = (celsiusTemp * 9/5) + 32;


document.write("Celsius temperature is : " + celsiusTemp + " °C is " + temp + " °F<br><br>");

var FahrenTemp = 70;
var Temp = (FahrenTemp - 32) * 5/9;
document.write( "Fahrenheit temperature is : " + FahrenTemp + " °F  is  " + Temp + " °C<br><br><br><hr>");


/* ===== Question 7 ==== */

document.write("<h1><center>Question : 7 </center></h1>");

// a.  Price of item 1

var priceItem1 = 650;
var quantityItem1 = 3;
var amount = priceItem1*quantityItem1;
document.write("Amount 1 is : " + amount +"<br><br>")

var priceItem2 = 100;
var quantityItem2 = 7;
var amount1 = priceItem2 * quantityItem2;
document.write("Amount 2 is : " + amount1 +"<br><br>")

var shippingCharges = 100;

var calculate = (amount + amount1 + shippingCharges);
document.write("Total amount is : " +  calculate + "<br><br><hr>")


/* ===== Question 8 ==== */

document.write("<h1><center>Question : 8 </center></h1>");

var marksObtained = 804;
var totalMarks = 980;
var percentage = marksObtained/totalMarks*100;
document.write("<b>Percentage is : </b>" + "<b>" + percentage + "</b><br><br><hr>");


/* ===== Question 9 ==== */

document.write("<h1><center>Question : 9 </center></h1>");

var Us$ = 10;
var Us$rate = 104.80;
var currency = 10 * 104.80;
document.write(" Convert Dollar in PKR : " + currency + "PKR <br><br>");


var Riyal = 25;
var Riyalrate = 28;
var Riyalcurrency = 25 * 28;
document.write(" Convert Riyal in PKR : " +  Riyalcurrency + "PKR <br><br>");

var convert = currency + Riyalcurrency
document.write("Total amount is : " + convert + "PKR <br><br><hr>" );

/* ===== Question 10 ==== */

document.write("<h1><center>Question : 10 </center></h1>");

 // Initialize a variable with some number
 var number = 20;

 // Perform the arithmetic operations in a single expression
 var result = ((number + 5) * 10) / 2;

 // Display the result in the browser
 document.write("The result of the arithmetic operations is: " + result  +"<br><br><hr>" );

/* ===== Question 11 ==== */

document.write("<h1><center>Question : 11 </center></h1>");

var currentYear = 2016;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write("Your current age is : " + age +  "PKR <br><br><hr>" );

/* ===== Question 12 ==== */

document.write("<h1><center>Question : 12 </center></h1>");

/* Define radius value */
var radius = 10;
radius = 10 *2;
document.write("Radius value is : " + radius + "<br><br>") ;

/* Define pi value */
var pi = 3.142;

/* Define Circumference of a circle */
var Circumferenceformula = 2 * 3.142 * 20;
document.write("Circumference of a circle is : " + Circumferenceformula + "<br><br>")

/* Define area of a circle */
var area = pi * radius * radius;
document.write("Area of a circle is : " + area + "<br><br><hr>")

/* ===== Question 13 ==== */

document.write("<h1><center>Question : 13 </center></h1>");

// a. Store your favorite snack into a variable
var favoriteSnack = "chocolate chip";

// b. Store your current age into a variable
var currentAge = 15;

// c. Store a maximum age into a variable
var maxAge = 65;

// d. Store an estimated amount per day (as a number)
var amountPerDay = 3;

// e. Calculate how many would you eat total for the rest of your life
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365; // Approximate number of days remaining
var totalSnacks = daysRemaining * amountPerDay;

// Output the result to the screen
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
