// Copyright © Tufiel Gulzar 2025
// login.js

const loginBtn = document.querySelector('button[type="submit"]'); // Copyright © Tufiel Gulzar 2025
const username = document.getElementById('username'); // Copyright © Tufiel Gulzar 2025
const password = document.getElementById('password'); // Copyright © Tufiel Gulzar 2025
const form = document.getElementById('loginForm'); // Copyright © Tufiel Gulzar 2025
const errorMsg = document.getElementById('errorMessage'); // Copyright © Tufiel Gulzar 2025
const btnMinSize = 40;
const btnMaxSize = 100;
let isBtnSmall = false; // Copyright © Tufiel Gulzar 2025

// Helper to get random position within window bounds
// Copyright © Tufiel Gulzar 2025
function getRandomPosition(btn) {
	// Copyright © Tufiel Gulzar 2025
	const padding = 20;
	const btnRect = btn.getBoundingClientRect();
	const winW = window.innerWidth;
	const winH = window.innerHeight;
	const maxLeft = winW - btnRect.width - padding;
	const maxTop = winH - btnRect.height - padding;
	const left = Math.random() * maxLeft + padding / 2;
	const top = Math.random() * maxTop + padding / 2;
	return { left, top };
}
// Copyright © Tufiel Gulzar 2025

// Animate button to new position
function moveButtonRandomly() {
	// Copyright © Tufiel Gulzar 2025
	const pos = getRandomPosition(loginBtn);
	loginBtn.style.transition = 'all 0.4s cubic-bezier(.68,-0.55,.27,1.55)';
	loginBtn.style.position = 'fixed';
	loginBtn.style.left = `${pos.left}px`;
	loginBtn.style.top = `${pos.top}px`;
	loginBtn.style.zIndex = 1000;
	loginBtn.style.boxShadow = '0 0 30px 5px #00f2ff99, 0 0 10px 2px #ff00c899';
	loginBtn.style.transform = `rotate(${Math.random() * 40 - 20}deg) scale(${isBtnSmall ? 0.7 : 1})`;
	loginBtn.style.background = `linear-gradient(90deg, #00f2ff, #ff00c8, #fff200)`;
	loginBtn.style.color = '#222';
	loginBtn.style.fontWeight = 'bold';
	loginBtn.style.letterSpacing = '2px';
	loginBtn.style.filter = 'blur(0.5px) brightness(1.2)';
	loginBtn.style.borderRadius = '50px';
	loginBtn.style.border = 'none';
	loginBtn.style.outline = 'none';
	loginBtn.style.fontSize = isBtnSmall ? '0.9rem' : '1.1rem';
	loginBtn.style.width = isBtnSmall ? `${btnMinSize}px` : `${btnMaxSize}px`;
	loginBtn.style.height = isBtnSmall ? `${btnMinSize}px` : `${btnMaxSize}px`;
	loginBtn.innerHTML = isBtnSmall ? '😜' : 'Login';
	// Add crazy shake
	loginBtn.animate([
		{ transform: loginBtn.style.transform },
		{ transform: `${loginBtn.style.transform} translateY(-10px) rotate(-10deg)` },
		{ transform: `${loginBtn.style.transform} translateY(10px) rotate(10deg)` },
		{ transform: loginBtn.style.transform }
	], {
		duration: 400,
		iterations: 1
	});
}
// Copyright © Tufiel Gulzar 2025

// Reset button to original position and style
function resetButton() {
	// Copyright © Tufiel Gulzar 2025
	loginBtn.style.transition = 'all 0.4s cubic-bezier(.68,-0.55,.27,1.55)';
	loginBtn.style.position = '';
	loginBtn.style.left = '';
	loginBtn.style.top = '';
	loginBtn.style.zIndex = '';
	loginBtn.style.boxShadow = '';
	loginBtn.style.transform = '';
	loginBtn.style.background = '';
	loginBtn.style.color = '';
	loginBtn.style.fontWeight = '';
	loginBtn.style.letterSpacing = '';
	loginBtn.style.filter = '';
	loginBtn.style.borderRadius = '';
	loginBtn.style.border = '';
	loginBtn.style.outline = '';
	loginBtn.style.fontSize = '';
	loginBtn.style.width = '';
	loginBtn.style.height = '';
	loginBtn.innerHTML = 'Login';
}
// Copyright © Tufiel Gulzar 2025

// Check if fields are empty
function isEmpty() {
	// Copyright © Tufiel Gulzar 2025
	return !username.value.trim() || !password.value.trim();
}
// Copyright © Tufiel Gulzar 2025

// Mouse move handler
function onMouseMove(e) {
	// Copyright © Tufiel Gulzar 2025
	if (!isEmpty()) {
		resetButton();
		isBtnSmall = false;
		return;
	}
	const btnRect = loginBtn.getBoundingClientRect();
	const dist = Math.hypot(
		e.clientX - (btnRect.left + btnRect.width / 2),
		e.clientY - (btnRect.top + btnRect.height / 2)
	);
	// If mouse is close to button, move it
	if (dist < 120) {
		isBtnSmall = true;
		moveButtonRandomly();
	} else if (isBtnSmall) {
		// If mouse moves away, reset button size
		isBtnSmall = false;
		moveButtonRandomly();
	}
}
// Copyright © Tufiel Gulzar 2025

// Prevent clicking when fields are empty
loginBtn.addEventListener('mouseenter', (e) => {
	// Copyright © Tufiel Gulzar 2025
	if (isEmpty()) {
		isBtnSmall = true;
		moveButtonRandomly();
	}
});
loginBtn.addEventListener('click', (e) => {
	// Copyright © Tufiel Gulzar 2025
	if (isEmpty()) {
		e.preventDefault();
		errorMsg.textContent = "Please fill in both fields!";
		errorMsg.style.color = "#ff00c8";
		errorMsg.animate([
			{ transform: 'scale(1)' },
			{ transform: 'scale(1.2) rotate(-5deg)' },
			{ transform: 'scale(1) rotate(0deg)' }
		], { duration: 400 });
	}
});
// Copyright © Tufiel Gulzar 2025

// Listen for mousemove on document
// Copyright © Tufiel Gulzar 2025
document.addEventListener('mousemove', onMouseMove);
// Copyright © Tufiel Gulzar 2025

// Reset button when fields are filled
username.addEventListener('input', () => {
	// Copyright © Tufiel Gulzar 2025
	if (!isEmpty()) resetButton();
	errorMsg.textContent = '';
});
password.addEventListener('input', () => {
	// Copyright © Tufiel Gulzar 2025
	if (!isEmpty()) resetButton();
	errorMsg.textContent = '';
});
// Copyright © Tufiel Gulzar 2025

// Fun: Add a rainbow border to input fields on focus
[username, password].forEach(input => {
	// Copyright © Tufiel Gulzar 2025
	input.addEventListener('focus', () => {
		input.style.transition = 'box-shadow 0.3s';
		input.style.boxShadow = '0 0 10px 2px #ff00c8, 0 0 20px 4px #00f2ff';
	});
	input.addEventListener('blur', () => {
		input.style.boxShadow = '';
	});
});
// Copyright © Tufiel Gulzar 2025

// Show developer info animation after successful login
function showDeveloperInfo() {
	// Copyright © Tufiel Gulzar 2025
	// Create overlay
	const overlay = document.createElement('div');
	overlay.className = 'dev-info-overlay';
	overlay.innerHTML = `
		<div class="dev-info-board">
			<div class="dev-man">
				<svg viewBox="0 0 80 120">
					<ellipse cx="40" cy="30" rx="18" ry="20" fill="#f9d29d"/>
					<rect x="28" y="50" width="24" height="40" rx="10" fill="#1976d2"/>
					<rect x="28" y="90" width="8" height="24" rx="4" fill="#ffe082"/>
					<rect x="44" y="90" width="8" height="24" rx="4" fill="#ffe082"/>
					<!-- Arm holding chalk -->
					<rect class="dev-arm" x="50" y="60" width="18" height="8" rx="4" fill="#f9d29d"/>
				</svg>
			</div>
			<div class="dev-board">
				<svg viewBox="0 0 340 180">
					<rect x="0" y="0" width="340" height="180" rx="18" fill="#fffde7" stroke="#1976d2" stroke-width="4"/>
				</svg>
				<div class="dev-board-text" id="devBoardText"></div>
			</div>
			<button class="dev-close-btn" id="devCloseBtn">Close</button>
		</div>
	`;
	document.body.appendChild(overlay);

	// Animate man writing (move arm)
	const arm = overlay.querySelector('.dev-arm');
	let armAngle = 0;
	const armAnim = setInterval(() => {
		armAngle = armAngle === 0 ? 18 : 0;
		arm.setAttribute('transform', `rotate(${armAngle} 50 64)`);
	}, 180);

	// Animate text letter by letter
	const text = `Developer: Tufail Gulzar\nB.Tech Student from Kulgam, Kashmir\nCompleted Diploma in CS from Jamia Millia Islamia (2020-2023)\nB.Tech in CS (2023-2026)\nContact: 6006522041\nEmail: tufielgulzar20@gmail.com`;
	const boardText = overlay.querySelector('#devBoardText');
	let i = 0;
	function typeWriter() {
		if (i <= text.length) {
			boardText.innerHTML = text.slice(0, i).replace(/\n/g, '<br>');
			i++;
			setTimeout(typeWriter, 38);
		} else {
			clearInterval(armAnim);
			arm.setAttribute('transform', 'rotate(0 50 64)');
		}
	}
	typeWriter();

	// Close button
	overlay.querySelector('#devCloseBtn').onclick = () => {
		document.body.removeChild(overlay);
	};
}
// Copyright © Tufiel Gulzar 2025

// Prevent form submit if fields are empty
form.addEventListener('submit', (e) => {
	// Copyright © Tufiel Gulzar 2025
	if (isEmpty()) {
		e.preventDefault();
		errorMsg.textContent = "Please fill in both fields!";
		errorMsg.style.color = "#ff00c8";
	} else {
		e.preventDefault();
		showDeveloperInfo();
	}
});
// Copyright © Tufiel Gulzar 2025