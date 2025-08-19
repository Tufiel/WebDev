
function validatePassword()
{
	var para = document.querySelectorAll('.validatePassword');
     para[2].textContent = para[0].value == para[1].value?"Matched":"Not Matched";
}

function calculator()
{
	var para = document.querySelectorAll(".calculator");
	var n1 = Number(para[0].value);
	var opt = para[1].value;
	var n2 = Number(para[2].value);
    var res ;

	switch(opt)
	{
		case  "Add":
	           res = n1+n2;
		break;
	
		case "Subtract":
			res = n1-n2;
		break;
	
		case "Multiply":
			res = n1*n2;
		break;

		case "Divide":
			res = n1/n2;
		break;

		case "Reminder":
			res = n1%n2;
		break;

		case "Power":
			res = n1**n2;
		break;
	
		default : res = "Wrong Operator";
	}
	  
	para[3].textContent = getPrecision(res,4);
}

function getPrecision(arr,n)
{
	arr +="";
	if(arr.indexOf('.') == -1)
	return arr;
	
	 return arr.split('.')[0]+"."+arr.split('.')[1].slice(0,n);
}

function colorMixer()
{
	var para = document.querySelectorAll(".colorMixer");
	var c = para[0].value.toLowerCase()+ para[1].value.toLowerCase();
	var c1 = para[0].value.toLowerCase();
	var c2 = para[1].value.toLowerCase();
     /*
	//Method 1
	switch(true)
	{
		case c=="redblue" || c=="bluered"  :
			para[2].textContent = "Purple";
			break;

		case c=="redyellow" || c=="yellowred":
			para[2].textContent = "Orange";
			break;
			
		case c=="blueyellow" || c=="yellowblue":
			para[2].textContent = "Purple";
			break;

		default:
			para[2].textContent = "Invalid Color Combination"
	}
	*/

	
	//Method 2
	switch(c)
	{
		case "redblue":
		case "bluered"  :
			para[2].textContent = "Purple";
			break;

		case "redyellow":
		case "yellowred":
			para[2].textContent = "Orange";
			break;
			
		case "blueyellow":
		case "yellowblue":
			para[2].textContent = "Purple";
			break;

		default:
			para[2].textContent = "Invalid Color Combination"
	}
	

	
}

// console.log(highestMarks([12,13,7,9,5,13,5,2,6,15,3,0,9]));
function highestMarks(arr)
{
	var result = arr[0];
	for(var i of arr)
	{
     result = i>result?i:result;
	}
	return result;
}

function captalizeName()
{
	var para = document.querySelectorAll(".captalizeName");
	var name = para[0].value;
	para[1].textContent = name[0].toUpperCase()==name[0]?name:name[0].toUpperCase()+name.slice(1);
}

function addToDuplicateList()
{
	var para = document.querySelectorAll(".duplicateList");
	var newItem = document.createElement("li");
	newItem.textContent = para[1].value;
	para[0].appendChild(newItem);
}

function removeDuplicatesFromList()
{
	var para = document.querySelectorAll(".duplicateList");
    var lists = document.querySelectorAll(".duplicateList li");
	var arr = new Array();
	for(var i of lists)
	if(arr.includes(i.textContent.toLowerCase()))
	para[0].removeChild(i);
	else
	arr.push(i.textContent.toLowerCase());
	
}

function invertedTriangle()
{
	var para = document.querySelectorAll(".invertedTriangle");
	var n = Number(para[0].value);
	var str="",triangle="";
	for(var i = 0 ;i<n;i++)
	{
		for(var j=0;j<n-i;j++)
		   str+= `<span style="color:rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})">`+"*</span> ";
		   triangle += str+"<br>";
		   str = "";
	}
	para[1].innerHTML = triangle;
}

function divisibleTest()
{
	
	var para = document.querySelectorAll(".divisibleTest");
    var arr = para[0].value.split(',');
	for(var i of arr)
	  if( i%3==0 && i%2 !=0 )
	  para[1].textContent += i+" ";
}

// doubleArray([12,3,5,34,65,23,653,54,3]);
function doubleArray(arr)
{
  for(var i=0;i<arr.length;i++)
     arr[i] = arr[i]*2;
	 console.log(arr);
}

// rentCost("Midsize",12);
function rentCost(car,days)
{
	if(car.toLowerCase() == "economic")
	console.log(days*4000);
	else if(car.toLowerCase() == "midsize")
	console.log(days*10000);
	else if(car.toLowerCase() == "luxury")
	console.log(days*20000);
}

// console.log(dish(1234,4));
function dish(dish,people)
{
	return {'Total':dish,'EachPerson':getPrecision(dish/people,2)}
}

var arr =
[
	
  {"UnitPrice":12,"Quantity":734},
  {"UnitPrice":212,"Quantity":634},
  {"UnitPrice":123,"Quantity":234},
  {"UnitPrice":142,"Quantity":345},
  {"UnitPrice":162,"Quantity":344},
  {"UnitPrice":712,"Quantity":434},

].reduce(
	(sum,product)=>
	{
		sum += product['UnitPrice']*product['Quantity'];
		return sum;
	},
	0
	);
// var s = (arr)=>{
// 	var sum=0;
// 	for(var i of arr)
// 	 sum += i['UnitPrice']*i['Quantity'];
// 	 return sum;
// }
// console.log(arr);

arr = 
[
{"OrginalPrice":500,"CurrentPrice":432},
{"OrginalPrice":450,"CurrentPrice":359},
{"OrginalPrice":830,"CurrentPrice":757},
{"OrginalPrice":1050,"CurrentPrice":961},
{"OrginalPrice":835,"CurrentPrice":698},
{"OrginalPrice":830,"CurrentPrice":758},
{"OrginalPrice":1070,"CurrentPrice":758},
{"OrginalPrice":629,"CurrentPrice":558},
{"OrginalPrice":343,"CurrentPrice":318},
{"OrginalPrice":559,"CurrentPrice":508},
].reduce(
        (FinalObj,obj)=>{

			FinalObj.push({"OrginalPrice":obj['OrginalPrice'],'Discount' : ((obj['CurrentPrice']/obj['OrginalPrice'])*100).toFixed(2)});
			return FinalObj;
		},[]
);
// console.log(arr);

arr = 
[
	{AccountNumber:1,Data:{Name:"Tufail",Balance:1240}},
	{AccountNumber:2,Data:{Name:"Zahid",Balance:560}},
	{AccountNumber:3,Data:{Name:"Suhaib",Balance:2340}},
	{AccountNumber:4,Data:{Name:"Sartaj",Balance:64}},
	{AccountNumber:5,Data:{Name:"Moomin",Balance:3420}}
];

var BankFunctions = 
[
	//0
	function WithDraw(){
		var display = document.querySelectorAll(".BankScreen")[0];
		var acc = Number( document.querySelectorAll(".Bank")[0].value);
		var money = Number( document.querySelectorAll(".Bank")[1].value);
		var index = arr[1](acc);//AccountExists
		if(money<1)
		display.textContent ="Please enter valid amount to be withdrawn!";
		else
		{
		if( index )
		  if(arr[index]['Data']['Balance']>= money) 
		  {
			arr[index]['Data']['Balance'] -=money 
			 display.textContent =`${arr[index]['Data']['Name']} your account has been debeted by Rs ${money} and now remaining balace is ${arr[index]['Data']['Balance']}`;
			 SaveData();
			 setTimeout(UpdateData,3000);
			}
		   else
		   display.textContent = `Not suffecient balance.Your balance is ${arr[index]['Data']['Balance']} !`;
        else
		display.textContent =`Wrong Account Number`;	  
	} 
    },
	//1
	function AccountExists(acc)
	{
		
		for(var i in arr)
			if( arr[i]["AccountNumber"]==acc)
				return i;
		return false;
	},
	//2
	function Deposite()
	{
		var display = document.querySelectorAll(".BankScreen")[0];
		var acc = Number( document.querySelectorAll(".Bank")[0].value);
		var money = Number( document.querySelectorAll(".Bank")[1].value);
		if(money<1)
		display.textContent ="Please enter valid amount to be deposited!";
		else
		{
		var index = -1;
		index = BankFunctions[1](acc);//AccountExists
		if( index )
		  {
			arr[index]["Data"]['Balance'] +=money;
		   display.textContent = `Hello ${arr[index]["Data"]['Name']} your account has been credited by Rs ${money}, Now the available balace is ${arr[index]["Data"]["Balance"]}`;
		   SaveData();
		   setTimeout(UpdateData,3000);
		}
        else
		 display.textContent = `Wrong Account Number`;
		}
	},
	//3
	function Balance()
	{
		var display = document.querySelectorAll(".BankScreen")[0];
		var acc = Number( document.querySelectorAll(".Bank")[0].value);
		var index = arr[1](acc);//AccountExists
		
		if( acc && index )
		   display.textContent = `Hello ${arr[index]['Data']['Name']} your account balace is ${arr[index]['Data']['Balance']}`;
        else
		 display.textContent = `Wrong Account Number`;
		
	},
	//4
	function CreateNewAccount()
	{
		var Name = document.querySelectorAll(".Bank")[2].value;
		var display = document.querySelectorAll(".BankScreen")[0];
		if(Name=="")
		{
			display.textContent = "Please enter name!";
		}
		else
		{
		var acc = BankFunctions[5]();
		arr.push({"AccountNumber":acc,"Data":{"Name":Name,"Balance":0}});
		display.textContent = `Account successfully added with Account Number ${acc} and Name ${Name}`;
		SaveData();
		setTimeout(UpdateData,3000);
	   }
	},
	//5
	function GenerateAccountNumber(){
         
		 return arr[arr.length-1]["AccountNumber"]+1;
	},
	//6
	function PrintAllAccounts()
	{
		
		var display = document.querySelectorAll(".BankScreen")[0];
		display.textContent = "";
		for(var i = 0;i<arr.length;i++)
			display.innerHTML += ` Account Number:${arr[i]['AccountNumber']} Name:${arr[i]['Data']['Name']} Balance:${arr[i]['Data']['Balance']}<br>`;
		
	},
	//7
    function UpdateData()
	{
		var display = document.querySelectorAll(".BankScreen")[0];
        display.innerHTML = `Total Accounts: ${arr.length}<br>
		Total Cash in Bank: ${
			arr.reduce(function(sum,i){
				if(i["AccountNumber"])
				sum += i['Data']['Balance'];
				return sum;
			},0)
		} <br><br> <span style='font-size:15rem;'>😊</span>
		`;
	},
	//8
	function SaveData()
	{
		var data = JSON.stringify(arr);
		localStorage.setItem("BankAccounts",data);
	},
	//9
	function GetData()
	{
		data = localStorage.getItem("BankAccounts");
		if(data)
		arr = JSON.parse(data);
	}
];

var TotalAccounts = arr.length ;
var Withdraw = BankFunctions[0];//Withdraw
var Deposite = BankFunctions[2];//Deposite
var CheckBalance = BankFunctions[3];//Check Balance
var AddAccount = BankFunctions[4];//Add New Account
var PrintAllAccounts = BankFunctions[6]//Print Accounts
var UpdateData = BankFunctions[7];
var SaveData = BankFunctions[8];
var GetData = BankFunctions[9];


GetData();
UpdateData();

function ToggleHeading()
{
	var heading = document.querySelector("#headingChange");
	heading.textContent = heading.textContent ==
	 "My name is Tufail click here"? "I am Learning"+
	  "JS click here":"My name is Tufail click here";
}


function ValidateForm(){
	var para = document.getElementsByClassName("validateForm");

	if(para[0].value.indexOf('@') != -1)
	{
		para[1].style.backgroundColor = "green";
		para[1].style.color = "white";
		para[1].textContent = "Email is correct";
	}
	else
	{
		para[1].style.backgroundColor = "red";
		para[1].style.color = "white";
		para[1].textContent = "Email must contain @";
	}

	if(para[2].value.length >= 8)
	{
		para[3].style.backgroundColor = "green";
		para[3].style.color = "white";
		para[3].textContent = "Correct Password";
	}
	else
	{
		para[3].style.backgroundColor = "red";
		para[3].style.color = "white";
		para[3].textContent = "Password must be 8 characters";
	}
	para[3].style.padding = para[1].style.padding = "10px";
	return false;
};

function Scroll()
{
	const bar = document.querySelector(".progressBar");
	const totalHeight = document.documentElement.scrollHeight-window.innerHeight;
	const scrolled = window.scrollY;
	 bar.style.width = ((scrolled/ totalHeight)*100)+'%';
	//  console.log(((scrolled/ totalHeight)*100)+'%');
} 

window.addEventListener('scroll',Scroll);

arr = ['180deg,blue,black,green,gold','120deg,blue,yellow,green','80deg,violet,skyblue,black','20deg,white,gray,blue','120deg,white,maroon,green,gold'];
document.getElementById('backgroundColor').addEventListener('click',function(){
	var color = arr[Math.floor(Math.random()*arr.length)];
	console.log(color);
	document.querySelector('body').style.backgroundImage = `linear-gradient(${color})`;
});

function highlightLongWords(id = 'highlight' ) {
	
	document.getElementById('putChars').innerText =  Number(document.getElementById('highlightChars').value);
	var element = document.querySelector('#'+id);
	var textWords = element.textContent.split(' ');
	for(var i in textWords)
	 if(textWords[i].length>= Number(document.getElementById('highlightChars').value))
	   textWords[i] = `<span style="background-color:yellow">${textWords[i]}</span>`;
	element.innerHTML = textWords.join(' ');
}

document.addEventListener('keydown',moveImage);

function moveImage(k)
{
	var img = document.querySelector('#moveImage');
	var img2 = document.querySelector('#resizeImage');
	var left  = Number(img.style.left.slice(0,img.style.left.length-2));
	var bottom  = Number(img.style.bottom.slice(0,img.style.bottom.length-2));
    var step =10;

	if(k.key=="ArrowLeft")
	{
		img.style.left = (left-step)+'px';
		img2.width =  Number(img2.width)+1;
	}

	else if(k.key=="ArrowRight")
	{
		img.style.left = (left+step)+'px';
		img2.width =  Number(img2.width)+1;
	}
	
	else if(k.key=="ArrowDown")
	{
		img.style.bottom = (bottom-step)+'px';
		img2.height =  Number(img2.height)+1;
	}

	
	else if(k.key=="ArrowUp")
	{
		img.style.bottom = (bottom+step)+'px';
		img2.height =  Number(img2.height)+1;
	}

}

function ReverseDelay(id)
{
	document.querySelector('#'+id).textContent = document.querySelector('#'+id).textContent.split('').reverse().join('');
}

setInterval(()=>{ReverseDelay('reverseWithDelay')},2000);

var time = 3;

setInterval( ()=>{
	if(time>=0)
	{
		document.getElementById('randTime').textContent = time;
		time--;
	}
	else
	{
		document.getElementById('randNum').textContent = Math.floor(Math.random()*101);
		time = 3;
	}
} ,1000);

arr = [12,4,6,2,7,3,7,34].map((num)=>{return num*80;});
// console.log(arr);

arr= [
	{Author:"Tufail",PYear:2007},
	{Author:"zahid",PYear:2011},
	{Author:"tufail",PYear:2015},
	{Author:"JJ Thompson",PYear:2004},
	{Author:"suhaib",PYear:2008},
	{Author:"Tufail",PYear:2010},
	{Author:"sartaj",PYear:2017},
	{Author:"suhail",PYear:2023},
	{Author:"a",PYear:2009},
	{Author:"x",PYear:2001},
	{Author:"y",PYear:1990},
	{Author:"Z",PYear:2005}
].filter((obj,index,arr)=>{
	if(obj.PYear<2010)
	  {
		obj.Author = obj.Author.charCodeAt(0)<97?obj.Author:obj.Author.charAt(0).toUpperCase()+obj.Author.slice(1,obj.Author.length-1);
		// console.log(obj.Author);
		return obj;
	  }
},"");

// console.log(arr);













