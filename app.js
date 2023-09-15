// *ASSIGNMENT 12 AND 13

// !Q 1 Write a program that takes a character (number or string) in a variable & checks whether the given input is a
// !number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
//  ?let a = prompt("Enter Value:");
//  ?if(a>="A"&& a<="Z");
//   ? document.write("Uppercase letters");
//   ?else if(a>="a"&& a<="z");
//    ?  document.write("Lowercase letters");
// ? else
//      ?document.write("Its a Number");


// !Q 2 Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// ?let a = +prompt("Input Value of a:")
// ?let b = +prompt("Input Value of b:")

// ?if (a > b)
//  ?   document.write("Larger Integer Number is a = " + a + "<br>")
// ?else if (b > a)
//  ?   document.write("Larger Integer Number is b = " + b + "<br>")
// ?else
//  ?   document.write("The values of a=" + a + " and b=" + b + " are equal.")


// !Q 3 Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// ?let a = +prompt("Input Value:")
// ?if (a >= 1)
//  ?  document.write("The Value is Positive <br>")

// ?else if (a < 0)
//   ? document.write("The Value is Negative <br>")

// ?else
//    ?document.write("The values is zero")


// !Q 4 Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// ?let a = prompt("Enter a Character: ")
// ?if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u")
//  ?   document.write("True")
// ?else
//  ?   document.write("False")


// ! Q 5 Write a program that
// !a. Store correct password in a JS variable.
// !b. Asks user to enter his/her password
// !c. Validate the two passwords:
// !i. Check if user has entered password. If not, then give message “ Please enter your password”
// !ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
// !Show “Incorrect password” otherwise.
// ?let password1 = prompt("Enter your password")
// ?let password2 = prompt("Enter your password again")

// ?if (password1 === "")
//  ?   alert("Please enter your password")
// ?else if (password1 === "SMIT" && password2 === password1)
//  ?   alert("Your both password is correct")
// ?else
//  ?   alert("Your password is incorrect")


// !Q 6 This if/else statement does not work. Try to fix it:
// !var greeting;
// !var hour = 13;
// !if (hour < 18) {
// !greeting = "Good day";
// !else
// !greeting = "Good evening";
// !}
// ?var hour= prompt("Enter your Timing")
//  ?if (hour < 18) 
//  ?alert ("Good day")
//  ?else
//  ?   alert("Good evening")


// !Q 7Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the
// !following case using if, else & else if statements
// Prompt the user to enter the time in 24-hour format (e.g., 1900)
// ?var time24 = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900):"));

// Initialize variables for 12-hour format
// ?var time12;
// ?var period;

// Check different cases based on the input time
// ?if (time24 >= 0.0 && time24 <= 11.59) {
//  ?   time12 = time24;
//   ?  period = "AM";
//    ? document.write(time12 + " : " + period)
// ?} else if (time24 >= 1200 && time24 <= 1259) {
//  ?   time12 = time24;
//   ?  period = "PM";
//    ? document.write(time12 + " : " + period)
// ?} else if (time24 >= 1300 && time24 <= 2359) {
//  ?   time12 = time24 - 1200;
//   ?  period = "PM";
//    ? document.write(time12 + " : " + period)
// ?} else {
//  ?   document.write("Invalid input. Please enter a time between 0000 and 2359.")
//   ?  console.log("Invalid input. Please enter a time between 0000 and 2359.");
// ?}

// Display the result
// ?if (time12 !== undefined && period !== undefined) {
//  ?   console.log("The time in 12-hour clock format is: " + time12 + period);
// ?}


// *ASSIGNMENT 14 to 16

// !Q 1 Declare an empty array using JS literal notation to store student names in future.
// ?var epmtyArray = [];   

// !Q 2 Declare an empty array using JS object notation to store student names in future.
// ?var arryObject = new Array();  

// !Q 3 Declare and initialize a strings array.
// ?var stringArray =["Cat", "Dog","Lion","Elephant"]

// !Q 4 Declare and initialize a numbers array.
// ?var numberArray =[11, 12 , 13 ,14, 15] 

// !Q 5 Declare and initialize a boolean array.
// ?var boleanArray =[true,false] 

// !Q 6 Declare and initialize a mixed array.
// ?var mixedArray = ["Toyota", true, 5, "Samsung", 6]

// !Q 7 Declare and Initialize an array and store availableeducation qualifications in Pakistan (e.g. SSC, HSC, BCS,
// !BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
    //  ?     let heading = "<h2>Qaulifications:</h2>"; 
    //   ?    document.write(heading+"<br>")

    //  ? var qaulifications =["1) SSC","2) HSC","3) BSC","4) BS","5) BCOM","6) MS","7) M.Phil","8) PhD"]
  
    // ?  for(let i = 0; i<=7; i++){
    //  ?   document.write(qaulifications[i]+"<br>" )
    //   ?}

// !Q 8 Write a program to store 3 student names in an array.Take another array to store score of these three students.
// !Assume that total marks are 500 for each student, display the scores & percentages of students like.
//   ?  //   Create an array to store student names
//? var studentNames = ["WAqar", "Anwar", "Shehzad"];

// //? Create an array to store student scores (out of 500)
// ?var studentScores = [420, 350, 480];

// //? Calculate and display the scores and percentages of students
// ?for (var i = 0; i < studentNames.length; i++) {
//   ?  var name = studentNames[i];
//  ?   var score = studentScores[i];
    
//   ?  // Calculate the percentage
//    ? var percentage = (score / 500) * 100;
    
//  ?   document.write("Score of " + name + " is "+score+" Percentage: " + percentage+"%" +"<br>");
// ?}


// !Q 9 Initialize an array with color names. Display the array elements in your browser.
// !a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// !Display the updated array in your browser.
// !b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the
// !updated array in your browser.
// !c. Add two more color to the beginning of the array. Display the updated array in your browser.
// !d. Delete the first color in the array. Display the updated array in your browser.
// !e. Delete the last color in the array. Display the updated array in your browser.
// !f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
// !position/index. . Display the updated array in your browser.
// !g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// !Then remove the same number of color(s) from user-definedposition/index. . Display the updated array in your
// !browser.
// ?var colorNames = ["Red", " Green"," Yellow"," Pink"];                    
// ?document.write("<p>Original Array: " + colorNames.join(", ") + "</p>")
                                  
//  ?                         // a

// ?let userColor = prompt("Which Color do you want to add at begining")
//  ?colorNames.unshift(userColor)
// ?document.write("<p>Original Array: " + colorNames.join(", ") + "</p>")

//   ?                //  b
// //? Ask the user for a color to add to the end
// ?var userColorEnd = prompt("Enter a color to add to the end:");

// //? Add the user's color choice to the end of the array
// ?colors.push(userColorEnd);

// //? Display the updated array in the browser
// ?document.write("<p>Updated Array (with user's color at the end): " + colors.join(", ") + "</p>");
//    ?                       // c 

// //? Add two more colors to the beginning of the array
// ?colors.unshift("Purple", "Pink");

// //? Display the updated array with two colors added to the beginning
// ?document.write("<p>Updated Array (with two colors added to the beginning): " + colors.join(", ") + "</p>");
                                
//    ?                             // d 

// //? Delete the first color in the array
// ?colors.shift();

// //? Display the updated array after deleting the first color
// ?document.write("<p>Updated Array (after deleting the first color): " + colors.join(", ") + "</p>");

//     ?                            //  f 

//  //? Ask the user for the position/index and color name to add
// ?var addIndex = parseInt(prompt("Enter the index where you want to add a color:"));
// ?var userColorToAdd = prompt("Enter the color name to add:");

// //? Check if the index is valid
// ?if (addIndex >= 0 && addIndex <= colors.length) {
//     //? Add the user's color choice at the specified index
// ?    colors.splice(addIndex, 0, userColorToAdd);
    
//     //? Display the updated array with the user's color added at the specified index
//  ?   document.write("<p>Updated Array (with user's color added at index " + addIndex + "): " + colors.join(", ") + "</p>");
// ?} else {
//  ?   document.write("<p>Invalid index. Color not added.</p>");
  
// ?}
// ?                                // g 
// //? Ask the user for the position/index and number of colors to delete
// ?var deleteIndex = parseInt(prompt("Enter the index where you want to delete color(s):"));
//? var deleteCount = parseInt(prompt("Enter how many colors you want to delete:"));

// //? Check if the index is valid
// ?if (deleteIndex >= 0 && deleteIndex < colors.length && deleteCount > 0 && deleteIndex + deleteCount <= colors.length) {
//     //? Remove the specified number of colors from the user-defined position
// ?    colors.splice(deleteIndex, deleteCount);
    
//     //? Display the updated array after deleting the colors
//  ?   document.write("<p>Updated Array (after deleting " + deleteCount + " color(s) from index " + deleteIndex + "): " + colors.join(", ") + "</p>");
// ?} else {
// ?    document.write("<p>Invalid input. Colors not deleted.</p>");
//? }    

// !Q 10 Write a program to store student scores in an array & sort the array in ascending order using Array’s sort
// !method.
//  //? Create an array to store student scores
// ?var studentScores = [85, 72, 93, 88, 64, 97, 78];

// //? Sort the array in ascending order
// ?studentScores.sort(function(a, b) {
// ?    return a - b;
//? });

// //? Display the sorted array
//? console.log("Sorted Student Scores (Ascending Order): " + studentScores.join(", "));                       

// !Q 11 Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities
// !array.
//  //? Initialize an array with city names
// ?var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

// //? Create an empty array to store selected cities
// ?var selectedCities = [];

// //? Copy three elements from the cities array to selectedCities array
//? selectedCities = cities.slice(0, 3);

// //? Display the selected cities array
// ?console.log("Selected Cities: " + selectedCities.join(", "));   

// !Q 12 Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities
// !array.
// ?var arr = ["This", " is", " my", " cat"];
// ?var singleString = arr.join('');
                          
// ?console.log(singleString);  

// !Q 13 Create a new array. Store values one by one in such a way that you can access the values in the order in which they
// !were stored. (FIFO-First In First Out)
//  //? Create an empty array to represent the FIFO queue
// ?var fifoQueue = [];

// //? Add values to the queue (FIFO)
// ?fifoQueue.push("Value 1");
// ?fifoQueue.push("Value 2");
// ?fifoQueue.push("Value 3");

// //? Access and remove values in FIFO order
// ?var firstValue = fifoQueue.shift(); // Removes and retrieves "Value 1"
// ?var secondValue = fifoQueue.shift(); // Removes and retrieves "Value 2"

// ?console.log("First Value: " + firstValue);
//? console.log("Second Value: " + secondValue); 

//  !Q 14 Create a new array. Store values one by one in such a way that you can access the values in reverse order.
//  !(Last InFirst Out)
// //? Create an empty array to represent the LIFO stack
// ?var lifoStack = [];

// //? Add values to the stack (LIFO)
//? lifoStack.push("Value 1");
// ?lifoStack.push("Value 2");
// ?lifoStack.push("Value 3");

// //? Access and remove values in reverse order (LIFO)
// ?var lastValue = lifoStack.pop(); // Removes and retrieves "Value 3"
// ?var secondLastValue = lifoStack.pop(); // Removes and retrieves "Value 2"

//? console.log("Last Value: " + lastValue);
// ?console.log("Second Last Value: " + secondLastValue);


//  !Q 15 Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//  !Display the following dropdown/select menu in your browser using document.write() method:
// //? Array of phone manufacturers
// ?var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// //?Begin the HTML select element
// ?document.write("<select>");

// //? Loop through the manufacturers array and create options for the select menu
// ?for (var i = 0; i < manufacturers.length; i++) {
//  ?   document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
//? }
// //? Close the HTML select element
// ?document.write("</select>")