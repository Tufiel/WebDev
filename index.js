const darklight = document.querySelector("#darkmode");
var num =0;
darklight.addEventListener('click',()=>{
	const nav = document.querySelector("#navbar");
	const navdropdown = document.querySelector("#navdropdown");
	const sitename = document.querySelector("#sitename");
	const body = document.querySelector("body");
	const modetext = document.querySelector("#modetext");
	nav.classList.toggle('navbar-dark');
	nav.classList.toggle('bg-dark');
	nav.classList.toggle('bg-light');
	sitename.classList.toggle('daymodesitetitle');
	sitename.classList.toggle('nightmodesitetitle');
	body.classList.toggle("darkcolors");
	body.classList.toggle("lightcolors");
	nav.setAttribute("data-bs-theme", num % 2 == 0 ? "light" : "dark");
    modetext.innerHTML = num%2==0?"Light Mode":"Dark Mode";
	num++;
   

});

// counter
 
 $(document).ready(function(){
	 $('.counter-value').each(function(){
		 $(this).prop('Counter',0).animate({
			 Counter: $(this).text()
		 },{
			 duration: 3500,
			 easing: 'swing',
			 step: function (now){
				 $(this).text(Math.ceil(now));
			 }
		 });
	 });
 });
