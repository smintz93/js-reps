// console.log("Hello")

//FUNCTIONS -- a way to write code that can be reused

// there are a couple of ways to declare functions.

// we will focus (Fornow) on arrow functions, which were introduced in ES6 (ES 2015)

// here we declare AND define a function 

//

// const printBoo = () => {
// 	console.log("-----yo-----");
// 	console.log("Boo!");
// 	console.log("-----what-----");
// }
// // now we will call (invoke) the function 

// printBoo();

//  

// const printSum = () => {
	// console.log(10 + 10);
// }

// printSum();

// #
// ##
// ###
// ####
// #####

const printTriangle = () => {

	let hashTag = "";
	for(let i = 0; i < 5; i++) {
		console.log(hashTag += "#")
	}
}

printTriangle();



// Functions are like verbs
// they "DO" stuff 




// semantics -- you can name your functions so that is clear what they do


// FUNCTIONS SHOULD DO ONLY ONE THING AND DO IT WELL!!
// FUNCTIONS SHOULD DO ONLY ONE THING AND DO IT WELL!!
// FUNCTIONS SHOULD DO ONLY ONE THING AND DO IT WELL!!


// check the length of some user input
// parameter input is a string

const checkInputLength = (input) => {
	if(input.length > 10) {
		console.log("input is over 10 in length")
	} else {
		console.log("input length is not greater than 10")
	}
}
checkInputLength("123456789");


// ARGUMENTS and PARAMETER
// A parameter is the input expcted for a function 

//we say that the same sayName function takes a parameter called name
const sayName = (name) => {
	console.log("Hello my name is " + name)
}

sayName(); // this prints undefined bc we did not specify the required parameter. we did not give the sayName function an argument when we called it  

// when you give some value or variable to a function we say "passing in" an argument or give it and argument 

sayName("Sam");

sayName("Majorie");

let jimsName = "Jim";

// you can call a function and pass in a variable as an arguement in addition to a literal 

sayName(jimsName);

jimsName = "James";
// we are passing  a variable as an arugment 

sayName(jimsName);

// write a function called that that takes a parameter input and console.log the value of the input parameter
const printParameter = (input) => {
	console.log(input)
		
}

printParameter("Sam is cool");  // this is a string literal you are just putting a string 

const arr = [1,2,3]

printParameter(arr);

// printParameter(["I", "am" "array" "Litea"])

	
printParameter({
	whatAmI: "I am this",
	isObject: true,
	age: 30
});


// write a function called minusOne that takes a parameter num. Assuming arugment is a number, print the value of arguemnt -1

const minusOne = (num) => {
	console.log(num - 1 )
}

minusOne(100);

// write a function called getLastElement that takes a parameter arr 
// call your fucnction with an array as arugment
// the function should print the last element of an array


const getLastElement = (arr) => {
	console.log(arr[arr.length-1])
}


// FUNCTION CAN AND OFTEN DO TAKE MULTIPLE PARAMETERS

const multiply = (num1, num2) => {
	console.log(num1 * num2)
}

multiply(4, 4);


// write a function that takes three string parameters and interpolates them into a sentence 
	
const makeSentence = (str1, str2, str3) => {
	console.log("I am from" + str1 + "which is a" + str2 + "yes" + str3)
}

makeSentence("Chicago", "Bad", "Yes");


// takes 3 parameters and prints the third parameter divded by the rest of the second parameter by the first

const divideThreeNums = (num1, num2, num3) => {
	// could also do const firstResult = num1 / num2;
	//console.log(num3 / firstResult);
	console.log(num3 / (num1 / num2))
}




// RETURN values 
// return means that a function, once executed, has a value 
// additionally, reutrn STOPS THE EXECUTION OF THE CODE within the function 

const ten = () => {
	return 10;
}

// the called function as an expression as a value of its value 10
console.log(8 + ten());


// A RETURN IS IN NO WAY THE SAME AS A CONSOLE.LOG THEY ARE TOTALLY DIFFERENT

// a function only has a value if it returns something

const newMultiply = (n1, n2) => {
	return n1 * n2
} 

let a = 3, b = 3;
console.log(" a times b " + newMultiply(a, b)) // some implicit version is happening here 

// you can use the function as its value
// you can use a called function to reprsent an arugment being passed into a function 

console.log(newMultiply(2,  newMultiply(a, b)  ))
//
// return stops execution
const example = (input) => {
	if(input === "none") {
		return 0;
	}
	return 1;
}

// returns the area of a retectangle based on area of re
const calculateArea = (length, width) => {
		return length * width;
}

const area = calculateArea(3, 4);
console.log(area)


//three parameters which are numbers, convert that sum into string and return string 


const sumString = (a, b, c) => {
	let total = a + b + c;
	return total.toString()

}

console.log(sumString(1, 2, 3));



// return true if 2 strings are identical, false if  not 


const isTheSame = (str1, str2) => {
	if(str1 === str2) {
		return true;
	} else {
		return false;
	}

}

console.log(isTheSame("hey", "hey"));

// you could also just ssay return str1 === str2

// in class lab 

// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.


const printGreeting = (name) => {
	return "Hello There, " + name 
}

printGreeting("Sam")

//  Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

const reverseWordOrder = (str) => {
	let splitStr = str.split(" ")
	return splitStr.reverse().join(" ")

}
reverseWordOrder("Ishmael, me, Call"); // 





// reverseWordOrder("Ishmael", "me", "Call");

// // const reverseWordOrder2 = (a, b, c, d, e) => {
// // 	return e + " " + d + " " + c " " + b + " " + A 
// // // }

// console.log(reverseWordOrder("I use Lâncome on my comb"));

// console.log just prints something. return is actually the output the of the function // console.log tells you wants going on in function



// return statment should be the last in function

// continued lab

const calculate = (num1, num2, operation) => {
	if (operation === "add") {
		return num1 + num2
	} else if (operation === "sub") {
		return num1 - num2 
	} else if (operation === "mult") {
		return num1 * num2
	} else if (operation === "div") {
		return num1 / num2
	} else (operation === "exp") 
		return num1 ^ num2 
	

}

calculate(4, 5, "add") // works 


//
// if if the digit is greater than length thant it isnt pan digital
// if 0 iz detected Return False
// there is no repeat

const pandNum = (num) => {
	// this puts all the numbers into a string into an array
	const len = num.toString().length;
	const newString = num.toString().split("");

	// loop over the length of the string and see if see if zero is in the array

	for (let i = 0; i < len; i++){
		//check if a number is zero or less than zero
		if (newString[i] <= 0){
			return "zero or below is detected"
		} else if(newString[i] > len) {
			return "Not Pangitial" + newString[i] +  " is greater than " + len
		} else {
			// then we want to check for duplicates
			for (let j=i+1; j < len; j++){
				console.log(newString, j, i)
				console.log(newString[j], newString[i])
				if(newString[j] === newString[i]) {
					return "not pandigital numbers repeat"
				}

			}
		}

		}
		return "pandigital number found"
	}
	

	



	




	// } else if(num repeats) {
	// 	return false;
	// } else if(num.length > ) {
	// 	return false;

		// return true;
}


}

// second draft of pandigital problem 

const	pandNum = (num) => {

	const newString = num.toString();
	

	const newArray = newString.split(" ")



	for (let i = 0; i <= newArray.length; i++);
}





//  

let printGreeting2 = function(){
	let userInput = prompt("How are you doing?");
		return window.alert("Hello" + userInput);
}

//  

let printGreeting2 = (name) => {
	let userInput = prompt("How are you doing?");
		return window.alert("Hello" + userInput + name);
}

printGreeting2("Sam");  // is this whats supposed to happen?

const printGreeting2 = (name) => {
	return window.alert("You are the man " + name);
}


printGreeting2("Sam")  // this this is correct.




// pailindrome


const pailindrome = (str) => {
	var len = str.length;
 for (let i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;   // would like this explained
}

// could also remove 
// Note. You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

// \W removes all non-alphanumeric characters:

// \W matches any non-word character
// \W is equivalent to [^A-Za-z0–9_]
// \W matches anything that is not enclosed in the brackets

// var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
  // var lowRegStr = str.toLowerCase().replace(re, '');

// Ben's Solution 

function isPandigital(num) {
    //don't accept zero or a negative number
    if (num <= 0) {
        return false;
    }
    //convert the number to a string
    num = num.toString();
    //define a array to hold checked numbers
    let numArr = [];
    //loop through the number string
    for (let i = 0; i < num.length; i++) {
        //if a digit is greater than the length then return false
        if (num[i] > num.length) {
            return false;
        }
        //if a digit is already included in our array of checked numbers then it is a duplicate
        if (numArr.includes(num[i])) {
            return false;
        }
        //this digit has been checked so push it to our array of checked numbers
        numArr.push(num[i]);
    }
    return true;
}

// start of second part of in class lab

const words  = ["hello", "what", "is", "going," " on", "dude"]; // new variable with names  // cant get this in the function??

const lengths = (arrayOfStrings) =>{  
	let myArray = []; // new array that will contine length of the words 
	for (i = 0; i < arrayOfStrings.length; i++) { // looping through length of words
		myArray.push(arrayOfStrings[i].length); // pushing myArr
	}	

	return myArray;

}


lengths(words)

//


const transmogrifier = (num1, num2, num3) => {
	let message = Math.pow((num1*num2), num3); // function that raises to the num3 power

	// The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.

	return message; 


}

transmogrifier(5,3,2); // 225
transmogrifier(13,12,5); // 92389579776
transmogrifier(42,13,3); // 162771336




// 



const toonify = (accent, sentence) => {

  let modSent; // delaring

  if (accent === "daffy"){
  modSent =  sentence.replace(/s/gi, "th");
  // console.log(modSent);

  } else if (accent === "elmer"){
   odSent = sentence.replace(/r/gi, "w");
  // console.log(modSent);

  } else {
  // console.log(sentence);
  }

  return modSent;
}



toonify("daffy", "so you smell like sausage")

//  


// const letterReverse = (ourInput) => {
// 	let splitStr = ourInput.split(" "); // split sentence into words
// 	let output = new Array(); // 
// 		splitStr.forEach = (sentence) => {
// 		output.push(sentence.split("").reverse().join(""));

// 	} 

// 	return output.join(" ");

	const letterReverse = (ourInput) => {

		let splitStr = ourInput.split("");

		let revStr = splitStr.reverse();

		return revStr.join("")
	}



letterReverse("Now I know what a TV dinner feels like");  // // need to reverse the letter

}

// 



//  
const
 

const longest = (array) => {

let long = 0;

let longest = "";

	for(i = 0; i < arrary.length; i++) // iterating through string
		if(array[i].length > long) {
		let = array[i].length; //storing length of longest string so far 
		longest = array[i] // longest string so far 

		}

		return longest;
}



longest(["oh", "good", "grief"]);




// final questions

const repMaster = () => // start this 
