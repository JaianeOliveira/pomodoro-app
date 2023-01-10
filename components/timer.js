const display_timer = document.querySelector('#display-timer');
const timer_container = document.querySelector('.timer-container');
const timer_status_indicator = document.querySelector(
	'.timer-status-indicator'
);
const action_buttons = document.querySelectorAll('.action-button');

let timer_count = 0;
let isStarted = false;
let interval;

const actionButtonsVisibilityHandler = (visibility) => {
	action_buttons.forEach((item) => {
		const isVisible = getComputedStyle(item).visibility === 'visible';
		item.style.visibility = visibility;
	});
};

const interval_handler = () => {
	if (timer_count === pomodoro_size) {
		pauseTimer();
		timer_status_indicator.textContent = '';
	} else {
		timer_count += 1;
		display_timer.textContent = getDisplayTimer(timer_count);
		console.log(getDisplayTimer(timer_count));
	}
};

const startTimer = () => {
	isStarted = true;
	interval = setInterval(interval_handler, 100);
};

const pauseTimer = () => {
	clearInterval(interval);
	interval = null;
	isStarted = false;
};

const stopTimer = () => {
	pauseTimer();
	timer_count = 0;
	display_timer.textContent = getDisplayTimer(timer_count);
	timer_status_indicator.textContent = 'Começar';
	stop_button.style.visibility = 'hidden';
};

const timerHandler = () => {
	if (isStarted) {
		pauseTimer();
		actionButtonsVisibilityHandler('visible');
		timer_status_indicator.textContent = 'Continuar';
	} else {
		startTimer();
		actionButtonsVisibilityHandler('hidden');
		timer_status_indicator.textContent = 'Pausar';
	}
};
