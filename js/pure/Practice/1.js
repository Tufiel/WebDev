// BEGINNER QUESTIONS

function sum() {
	var sum = document.querySelectorAll(".sum");
	sum[2].textContent = Number(sum[0].value) + Number(sum[1].value);
}

function oddEven() {
	var num = document.querySelectorAll(".oddEven");
	num[1].textContent = Number(num[0].value) % 2 == 0 ? num[0].value + " is even" : num[0].value + " is odd";
}

var reverse = () => {
	var rev = document.querySelectorAll(".reverse");

	//Using String
	// var arr = rev[0].value;
	// console.log(arr);
	// for(var i of arr)
	//   {
	// 	var temp = rev[1].textContent??"";
	// 	rev[1].textContent = i+temp;
	//   }

	//Using Array
	var arr = new Array();
	var txt = rev[0].value;
	for (var i of txt)
		arr.push(i);
	//rev[1].textContent = arr.reverse();
	for (var i in txt)
		rev[1].textContent += arr.pop();

	//Using number
	// var arr = Number(rev[0].value);
	// while(arr>0)
	// {
	// 	rev[1].textContent += arr%10;
	// 	arr = Math.floor(arr/10);
	// }

}

function randGenerate() {
	var para = document.querySelectorAll(".rand");
	para[1].textContent = Math.floor(Math.random() * (Number(para[0].value) + 1));

}

function largestNumber() {
	var para = document.querySelectorAll(".largestNumber");
	var arr = para[0].value.split(",");
	para[1].textContent = arr[0];
	for (var i of arr) {
		if (Number(para[1].textContent) < Number(i))
			para[1].textContent = i;

	}
}

function fibonacciNumber() {
	var para = document.querySelectorAll(".fibonacciNumber");
	var n = Number(para[0].value);
	if (n == 1)
		para[1].textContent = "0";
	else if (n == 2)
		para[1].textContent = "0 1";
	else {
		para[1].textContent = "0 1 1";
		n -= 3;
		var p1 = 1, p2 = 1, p;
		while (n-- > 0) {
			p = p1 + p2;
			para[1].textContent += " " + p;
			p2 = p1;
			p1 = p;
		}
	}
}

function convertTemp() {
	var para = document.querySelectorAll(".convertTemp");
	var c = Number(para[0].value);
	para[1].textContent = (c * 9 / 5 + 32) + " Farenheit";
}

function findVowels() {
	var para = document.querySelectorAll(".vowels");
	var str = para[0].value;
	var count = 0;
	for (var i = 0; i < str.length; i++)
		if (str[i] == 'a' || str[i] == 'A' || str[i] == 'e' || str[i] == 'E' || str[i] == 'i' || str[i] == "I" || str[i] == 'o' || str[i] == 'O' || str[i] == 'u' || str[i] == 'U')
			count++;
	para[1].textContent = "There are " + count + ' vowels in "' + str + '"';
}

function checkPalindrome() {
	var para = document.querySelectorAll(".palindrome");
	var str1 = para[0].value;
	var str2 = "";

	for (var i = str1.length; i >= 0; i--)
		str2 += str1.charAt(i);
	para[1].textContent = str1 === str2 ? "Yes it's a palindrome" : "No it is not a palindrome";
}

function findFactorial() {
	var para = document.querySelectorAll(".factorial");
	para[1].textContent = para[0].value + "! = " + getFact(Number(para[0].value));
}

function getFact(n) {
	if (n < 0)
		return "Wrong input please enter whole number";
	if (n == 1 || n == 0)
		return 1;
	return n * getFact(--n);
}

//****************  Intermediate ***********

function sort() {
	var para = document.querySelectorAll(".sort");
	var arr = para[0].value.split(',');
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++)
			if (Number(arr[i]) > Number(arr[j])) {
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
	}
	para[1].textContent = arr;
}

function duplicate() {
	var para = document.querySelectorAll(".duplicate");
	var arr = para[0].value.split(',');
	var res = new Array();

	for (var i of arr)
		if (!includes(i, res))
			res.push(i);
	para[1].textContent = res;
}

function includes(i, res) {
	for (var e of res)
		if (i == e)
			return true;
	return false;
}

function anagram() {
	var para = document.querySelectorAll(".anagram");
	var str1 = para[0].value.split("").sort().join("");
	var str2 = para[1].value.split("").sort().join("");
	para[2].textContent = str1 == str2 ? "Yes" : "No";
}

function intersection() {
	var para = document.querySelectorAll(".intersection");
	var arr1 = para[0].value.split(",");
	var arr2 = para[1].value.split(",");
	var ret = new Array();

	for (var i of arr1)
		if (arr2.includes(i) && !ret.includes(i))
			para[2].textContent += i + " ";
}

function commonString() {
	var para = document.querySelectorAll(".commonString");
	var str1 = para[0].value;
	var str2 = para[1].value;
	var commonStrings = new Array();

	for (var ch1 = 0; ch1 < str1.length; ch1++) {
		for (var ch2 = 0; ch2 < str2.length; ch2++) {
			if (str1[ch1] == str2[ch2]) {
				var temp1 = ch1, temp2 = ch2, item = "";
				while (str1[temp1] == str2[temp2] && temp1 < str1.length && temp2 < str2.length) {
					item += str1[temp1];
					temp1++;
					temp2++;
				}
				if (!commonStrings.includes(item) && item.length > 1)
					commonStrings.push(item);
			}
		}

	}
	commonStrings.sort((a, b) => b.length - a.length);
	para[2].textContent = commonStrings[0] + " (length :" + commonStrings[0].length + " characters)";
}

function decimalConversion() {
	var para = document.querySelectorAll(".decimalConversion");
	var n = Number(para[0].value);
	var opt = Number(para[1].value);
	var res = "";

	while (n > 0) {
		if (opt == 16 && n % opt > 10) {
			switch (n % opt) {
				case 10:
					res = "A" + res;
					break;

				case 11:
					res = "B" + res;
					break;

				case 12:
					res = "C" + res;
					break;

				case 13:
					res = "D" + res;
					break;

				case 14:
					res = "E" + res;
					break;

				case 15:
					res = "F" + res;
					break;

			}
		}
		else
			res = n % opt + res;
		n = Math.floor(n / opt);
	}
	para[2].textContent = res;

}

function secondSmallest() {
	var para = document.querySelectorAll(".secondSmallest");
	var arr = para[0].value.split(',').sort((a, b) => { return Number(a) - Number(b); });
	para[1].textContent = arr[1];
}

function leapYear() {
	var para = document.querySelectorAll(".leapYear");
	var year = Number(para[0].value);
	para[1].textContent = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? "Yes leap year" : "Not leap year";
}

function validateEmail() {
	var para = document.querySelectorAll(".validateEmail");
	var email = para[0].value;


	if (email.indexOf('@') != -1 &&
		email.indexOf('@') > 1 &&
		email.indexOf('@') < email.length - 3 &&
		email.indexOf('.') != -1 && email.indexOf('.') > 0 &&
		email.indexOf('.') < email.length - 2 &&
		email.indexOf(' ') == -1 &&
		email.indexOf('@') == email.lastIndexOf('@') &&
		email.lastIndexOf('@') < email.lastIndexOf('.') &&
		email.indexOf('.') + 1 != email.indexOf('@') &&
		email.indexOf('.') - 1 != email.indexOf('@'))
		para[1].textContent = "Valid";
	else
		para[1].textContent = "Invalid";

}

function shuffleElements() {
	var para = document.querySelectorAll(".shuffleElements");
	var arr = para[0].value.split(',');
	var len = arr.length;
	var iterations = len * 2;
	console.log(arr);
	while (iterations-- > 0) {
		var index1 = Math.floor(Math.random() * len);
		var index2 = Math.floor(Math.random() * len);
		var temp1 = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp1;
	}

	para[1].textContent = arr;
}

//****************  Advanced ***********

class Stack {
	constructor() {
		this.elements = new Array();
		this.deleted = new Array();
		this.current = document.querySelectorAll(".stack");
		this.bucket = document.querySelectorAll(".buckets");
	}

	pushElement() {
		
		if( !this.isFull())
		{
		if (this.current[0].value != "" && this.current[1].value != "" ) {
			var obj = {
				color: this.current[0].value,
				value: this.current[1].value
			};
			this.elements.push(obj);
			this.addChild(0,obj);
			this.current[2].textContent = "{color:" +obj.color +" value:"+obj.value + "} pushed";
		}
		else {
			this.current[2].textContent = "Please enter data to push element";
		}
	}
	else
	{
		this.current[2].textContent = "Stack is Full";

	}

	}

	popElement() {
		if (!this.isEmpty()) {
			var obj = {
				color:this.elements[this.elements.length-1].color,
				value:this.elements[this.elements.length-1].value
			}
			this.deleted.push(this.elements[this.elements.length-1]);
			this.elements.pop();
			this.deleteChild();
			this.current[2].textContent = "{color:" +obj.color +" value:"+obj.value + "} popped";
			this.addChild(1,obj);
		}
		else{
			this.current[2].textContent = "Stack is already empty";
		}
	}

		peekElement(){
			if (!this.isEmpty()) {
				this.current[2].textContent = "{color:" +this.elements[this.elements.length - 1].color+" value:"+this.elements[this.elements.length - 1].value + "}";
			}
			else{
				this.current[2].textContent = "Stack is empty";
			}
		}

		isEmpty(){
			if (this.size() == 0)
			   return true;
			   else
			   return false;
		}

		isFull()
		{
			if(this.size()>7)
			  return true;
			  return false;
		}

		size(){
			this.current[2].textContent = this.elements.length;
			return this.elements.length;
		}
		

		print()
		{
			this.current[2].textContent = "";

			for(var e of this.elements)
			this.current[2].innerHTML += "{color:" +e.color +" value:"+e.value + "} <br>" ;

		}

		addChild(n,obj)
		{
			// Create a new div element
var newDiv = document.createElement('div');

// Add classes to the new div
newDiv.classList.add('element');

// Set inline CSS properties
newDiv.style.backgroundColor = obj.color;
newDiv.textContent = obj.value;

if (this.bucket[n].firstChild) {
	this.bucket[n].insertBefore(newDiv, this.bucket[n].firstChild);
  } else {
	this.bucket[n].appendChild(newDiv);
  }

		}

		deleteChild() {
  // Get the parent div element with the class name ".bucket1"
  const parentDiv = document.querySelector('.bucket1');
  
  // Check if the parent div exists
  if (parentDiv) {
    // Get the first child div element
    const firstChildDiv = parentDiv.querySelector('div');
  
    // Check if the first child div exists
    if (firstChildDiv) {
      // Apply CSS animation to the first child div
      firstChildDiv.style.transition = 'all 0.5s';
      firstChildDiv.style.transform = `translateY(-${(8-this.elements.length)*30}px)`;
    //   firstChildDiv.style.opacity = '0';

      // Remove the first child div from the parent div after the animation completes
      setTimeout(() => {
        parentDiv.removeChild(firstChildDiv);
      }, 500); // Adjust the delay to match the animation duration
    }
  }

  if (this.deleted.length > 8) {
    var del = document.querySelector('.bucket2');
    del.removeChild(del.lastElementChild);
  }
}
		  

	}



	var stackObject = new Stack();
	
	function myStack(opt)
	{
		if (opt.toLowerCase() == "push") 
			stackObject.pushElement();
		else if (opt.toLowerCase() == "pop")
		    stackObject.popElement();
		else if (opt.toLowerCase() == "peek")
		    stackObject.peekElement();
        else if(opt.toLowerCase() == "size")
		    stackObject.size();
		else if(opt.toLowerCase() == "print")
		    stackObject.print();
        else if(opt.toLowerCase() == "clear")
            stackObject.clear();
		
	}

	var obj = {
		name:["Tufail","Zahid"],
		roll:"20DCS054",
		weight:60,
		marks:[98,56,45,24],
		student:true
	}

	function cloneObject(obj)
	{
		var temp = Object.entries(obj);
		var obj2={};
		for(var i of temp)
		{
          obj2[i[0]] = i[1];
		}
		return obj2;
	}

	// console.log(cloneObject(obj));

	function binarySearch()
	{
		var para = document.querySelectorAll(".binarySearch");
	    var arr = para[0].value.split(',');//1,2,3,4,5,6,7,8
		var n = Number(para[1].value);//7
        var count = 0;
		var i,lowerLmt=-1,upperLmt=arr.length;//0 8
		   do{
			count++;
			  i = Math.floor((upperLmt+lowerLmt)/2);//3 5 6
			  if(arr[i]==n)
			    break;
				if(arr[i]<n)
				 lowerLmt = i;//3 5
				 if(arr[i]>n)
				   upperLmt = i;
				//    console.log("upr:"+upperLmt+' lwr:'+lowerLmt);
		   }
		   while(upperLmt-1 != lowerLmt);
			if(arr[i]==n)
			 para[2].textContent = `Found at index ${i} in ${count} iterations`;
			 else
			 para[2].textContent = "Not found";
			
	}

	function frequentElement()
	{
		var para = document.querySelectorAll(".frequentElement");
	    var arr = para[0].value.split(',');

		var res = {};
		for(var i of arr)
		{
			if(res[i])
			  res[i]++;
			else
			res[i] = 1;
		}
		var e = arr[0]; 

		for(var i of arr)
		{
			
		if(res[i]>res[e])
		  e = i;
		}
		  para[1].textContent = e+" is "+res[e]+" times";
		   
	}

	var arr = [1,2,[3,4,5,[6,7,[8,9,[10,[11,12],13],14],15],16],17,18];
	
	// flatArray(arr);
	function flatArray(arr)
	{
		for(var i of arr)
	  if(typeof(i) == "object")
		   flatArray(i);
	  else
	  console.log(i);
	}

	function primeNumber()
	{
		var para = document.querySelectorAll(".primeNumber");
		var n = Number(para[0].value);
		if(n==1)
		para[1].textContent = "1 is not a prime number";
		else if(n<1)
		 para[1].textContent = "Please enter correct number";
		 else
		 {
		 var i = 2,prime = true;
		while(i<Math.floor(n/2)+1)
		    {
				if(n%i == 0)
				 {
					prime = false;
					para[1].textContent = `${n} is not a prime number it is divisible by ${i}`;
					break;
				 }
				i++;
			}
			if(prime)
			para[1].textContent = `${n} is a prime number`;
			
		}
	}