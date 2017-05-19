
var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b= 5;\nvar c;\n____________\n" +
      "a + b = " + (a + b) + "\n" +
      "a - b = " + (a - b) + "\n" +
      "a * b = " + (a * b) + "\n" +
      "a / b = " + (a / b) + "\n" +
      "a % b = " + (a % b) + "\n" +
      "(a += b): " + (a += b) + "\n" +
      "(a -= b): " + (a += b) + "\n" +
      "(a *= b): " + (a *= b) + "\n" +
      "(a /= b): " + (a /= b) + "\n" +
      "(a %= b): " + (a %= b) + "\n" +
      "(a == b): " + (a == b) + "\n" +
      "(a != b): " + (a != b) + "\n" +
      "(a > b): " + (a > b) + "\n" +
      "(a < b): " + (a < b) + "\n" +
      "(!a && !c): " + (!a && !c) + "\n" +
      "(!a || !c): " + (!a || !c) + "\n" 
    );
    
    

//  CONCATENATION:
//Declare the variable first_name and assign it with the value of your first name;.
var first_name = "Miaozi";
//Declare the variable last_name and assign it with the value of your last name;
var last_name = "Yin";
//Declare the variable email and assign it with the value of your email;
var email = "yin00030@algonquinlive.com";
// Declare the variable output;
var output;
// Concatinate first_name, last_name, email and string literals needed 
// to form the sentence:
	// My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.
output = " My name is " + first_name + " " + last_name + "." + " " + " You can contact me at " + email + ".";
		
// Print output using alert()
alert(output);

// Print experiment using console.log()
console.log(output);
