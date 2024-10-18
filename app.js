//Q NO:01
function Time() { 
   var now = new Date(); 
   var hour = now.getHours(); 
   var munutes = now.getMinutes(); 
   alert("Current time: "+ hour + ":" + munutes)
}
Time()


//Q NO:02
function greetUser(firstName,lastName) {
    var fullName = firstName + lastName;
    console.log('Hello, ' + lastName + '!');
}
greetUser('Kifal ', 'Ahmed');


//Q NO:03
function addTwoNumbers() {
    var num1 = +(prompt("Enter the first number:"));
    var num2 = +(prompt("Enter the second number:"));
    var sum = num1 + num2;
    console.log("The sum is: " + sum);
}
addTwoNumbers();