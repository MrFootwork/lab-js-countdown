const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const timeDisplay = document.querySelector('#time');

// ITERATION 1: Add event listener to the start button
// Your code goes here ...
const startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', () => {
	timeDisplay.textContent = remainingTime;
	startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
	// Your code goes here ...
	timeDisplay.textContent = remainingTime;
	startButton.disabled = true;

	timer = setInterval(() => {
		timeDisplay.textContent = remainingTime;
		let message;

		switch (remainingTime--) {
			case 10:
				message = '⏰ Final countdown!';
				showToast(message);
				break;
			case 5:
				message = 'Start the engines! 💥';
				showToast(message);
				break;
			case 0:
				message = 'Lift off! 🚀';
				showToast(message);

				remainingTime = DURATION;
				startButton.disabled = false;

				clearInterval(timer);
				break;
		}
	}, 1000);
}

// ITERATION 3: Show Toast
const toastCard = document.querySelector('#toast');
const toastMessageDisplay = document.querySelector('#toast-message');
const closeToastButton = document.querySelector('#close-toast');

closeToastButton.addEventListener('click', () => {
	clearTimeout(timeoutID);
	toastCard.classList.remove('show');
});

let timeoutID;

function showToast(message) {
	// Your code goes here ...
	toastMessageDisplay.textContent = message;
	toastCard.classList.add('show');

	// BONUS: ITERATION 4: TOAST CLOSE BUTTON
	// Your code goes here ...
	timeoutID = setTimeout(() => {
		toastCard.classList.remove('show');
	}, 3000);
}
