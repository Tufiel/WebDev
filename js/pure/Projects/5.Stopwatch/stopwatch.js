const start = document.getElementById('start');
const stop = document.getElementById('stop');
const resume = document.getElementById('resume');
const reset = document.getElementById('reset');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const ms = document.getElementById('ms');
let msCounter;

start.addEventListener('click',()=>{
	start.classList.add('hidden');
	stop.classList.remove('hidden');
	reset.classList.remove('hidden');
 msCounter = setInterval(increaseMs,10);
});

stop.addEventListener('click',()=>{
	stop.classList.add('hidden');
	resume.classList.remove('hidden');
	clearInterval(msCounter);
});

resume.addEventListener('click',()=>{
	stop.classList.remove('hidden');
	resume.classList.add('hidden');
	msCounter = setInterval(increaseMs,10);
});

reset.addEventListener('click',()=>{
	start.classList.remove('hidden');
	stop.classList.add('hidden');
	reset.classList.add('hidden');
	resume.classList.add('hidden');
	clearInterval(msCounter);
	ms.textContent = '00';
	sec.textContent = '00';
	min.textContent = '00';
});

function increaseMs()
{
	let n = Number(ms.textContent);
	if(ms.textContent == 99)
	{

		if(sec.textContent == 59)
		  {
			min.textContent = Number(min.textContent)+1;
			sec.textContent = '00';
			ms.textContent = '00';
		  }
		  else
		  {
			sec.textContent = Number(sec.textContent)<9? '0'+(Number(sec.textContent)+1):(Number(sec.textContent)+1);
			ms.textContent = '00';
		  }
	}
	else
	ms.textContent = Number(ms.textContent)<9?'0'+ (Number(ms.textContent)+1) : Number(ms.textContent)+1;
}

