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


//Q NO:04
function calculate() {
    const num1 = +(prompt("Enter the first number:"));
    const num2 = +(prompt("Enter the second number:"));
    const operator = prompt("Enter an operator (+, -, *, /):");

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        default:
            result = 'Invalid operator';
    }

    alert('Result: ' + result);
}
calculate();


//Q NO:05
function square(num) {
    return num * num;
}

console.log(square(5));  // 25
console.log(square(-3)); // 9
console.log(square(0));  // 0
square()


//Q NO:06
function factorial(n) {
    if (n < 0) {
        return 'Error: Factorial is not defined for negative numbers';
    }
    if (n === 0 || n === 1) {
        return 1; // 0! and 1! are both 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-3)); 


//Q NO:07
function displayCounting(start, end) {
    if (start > end) {
        console.log('Start number must be less than or equal to end number.');
        return;
    }
    
    let count = '';
    for (let i = start; i <= end; i++) {
        count += i + ' ';
    }
    
    console.log(count.trim());
}


displayCounting(1, 10);


//Q NO:08
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    
    const hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}

// Example usage:
console.log(calculateHypotenuse(3, 4)); // Output: 5



//Q NO:09 (A)
function calculateArea(width, height) {
    return width * height;
}

// Example usage:
console.log(calculateArea(5, 10)); // Output: 50


//Q NO:9 (B)
const width = 5;
const height = 10;
console.log(calculateArea(width, height)); // Output: 50


//Q N0:10
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome('madam')); // Output: true
console.log(isPalindrome('hello')); // Output: false


//Q NO:11
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
console.log(capitalizeFirstLetter('the quick brown fox')); // Output: 'The Quick Brown Fox'


//Q NO:12
function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
    
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}

// Example usage:
console.log(findLongestWord('Web Development Tutorial')); // Output: 'Development'


//Q NO:13
function countOccurrences(str, letter) {
    const regex = new RegExp(letter, 'gi'); // Case-insensitive
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Example usage:
console.log(countOccurrences('JSResourceS.com', 'o')); // Output: 1


// Q NO:14 (A)
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}

// Example usage:
calcCircumference(5); // Output: The circumference is 31.42


//Q NO:14 (B)
function calcArea(radius) {
    const area = Math.PI * radius * radius;
    console.log(`The area is ${area.toFixed(2)}`);
}

// Example usage:
calcArea(5); // Output: The area is 78.54
