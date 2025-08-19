const display = document.getElementById('calculatorDisplay');
const calTitle = document.getElementById('calTitle');
let history='';

function clearDisplay()
{
	display.textContent = '';
}
function addtoDisplay(x)
{
	display.textContent += x;
}

function findResult()
{
	try{
	let res = eval(display.textContent);
	
	if(res%1 != 0)
	  res = res.toPrecision(2);
      history += display.textContent+'='+res+'</br>';
	  display.textContent = res;
	}
	catch(err)
	{
		display.textContent = "Wrong Expression";
		setTimeout(()=>{display.textContent = '';},1000);
	}
}

function clearOneDigit()
{
	display.textContent = display.textContent.slice(0,display.textContent.length-1)
}

function printHistory()
{
	if(history=='')
	  {
		display.textContent = "No History";
		setTimeout(()=>{display.textContent = '';},1000);
	  }
	  else
	display.innerHTML = history;
}
let titleEffect =(function getTitleEffectFun()
{
	let charCount=0,colorCount=1;
	return ()=>{
		if(colorCount == 11)
		  colorCount=1;
		if(charCount==10)
		{
			calTitle.textContent = calTitle.textContent.toUpperCase();
			charCount = 0; 
		}
		document.getElementById('titleColor').style.width  = colorCount*10 +'%';
		let newTitle = calTitle.textContent.slice(0,charCount)+calTitle.textContent.charAt(charCount).toLowerCase()+calTitle.textContent.slice(charCount+1,11);
		calTitle.textContent = newTitle;
		charCount++;
		colorCount++;
	};
	
})();
setInterval(titleEffect,1000);

function clearHistory()
{
	history ='';
	display.textContent = "History Cleared";
	setTimeout(()=>{display.textContent=''},1000);
}

//c
document.getElementById('btn1').addEventListener('click',clearDisplay);
//<=
document.getElementById('btn2').addEventListener('click',clearOneDigit);
//+
document.getElementById('btn3').addEventListener('click',()=>{addtoDisplay('+')});
//-
document.getElementById('btn4').addEventListener('click',()=>{addtoDisplay('-')});
//x
document.getElementById('btn5').addEventListener('click',()=>{addtoDisplay('*')});
// /
document.getElementById('btn6').addEventListener('click',()=>{addtoDisplay('/')});
// 1
document.getElementById('btn7').addEventListener('click',()=>{addtoDisplay('1')});
// 2
document.getElementById('btn8').addEventListener('click',()=>{addtoDisplay('2')});
// 3
document.getElementById('btn9').addEventListener('click',()=>{addtoDisplay('3')});
// %
document.getElementById('btn10').addEventListener('click',()=>{addtoDisplay('%')});
// 4
document.getElementById('btn11').addEventListener('click',()=>{addtoDisplay('4')});
// 5
document.getElementById('btn12').addEventListener('click',()=>{addtoDisplay('5')});
// 6
document.getElementById('btn13').addEventListener('click',()=>{addtoDisplay('6')});
// M
document.getElementById('btn14').addEventListener('click',()=>{addtoDisplay('7')});
// 7
document.getElementById('btn15').addEventListener('click',()=>{addtoDisplay('8')});
// 8
document.getElementById('btn16').addEventListener('click',()=>{addtoDisplay('9')});
// 9
document.getElementById('btn17').addEventListener('click',()=>{addtoDisplay('0')});
// =
document.getElementById('btn18').addEventListener('click',()=>{findResult()});
// History
document.getElementById('btn19').addEventListener('click',printHistory);
// Clear History
document.getElementById('btn20').addEventListener('click',clearHistory);
