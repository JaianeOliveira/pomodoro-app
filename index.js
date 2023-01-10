const switch_items = document.querySelectorAll('.switch-item');

switch_items.forEach((item) => {
	item.addEventListener('click', () => {
		const isActive = !!item.classList.contains('switch-item-active');

		if (!isActive) {
			switch_items.forEach((item) => {
				item.classList.remove('switch-item-active');
			});
			item.classList.add('switch-item-active');
		}
	});
});

let timer_count = 0;
let interval;

const interval_handler = () => {
	if (timer_count === pomodoro_size) {
		clearInterval(interval);
		interval = null;
		console.log('Terminou');
	} else {
		timer_count += 1;
		console.log(getDisplayTimer(timer_count));
	}
};

const startTimer = () => {
	interval = setInterval(interval_handler, 1000);
};

const pauseTimer = () => {
	clearInterval(interval);
	interval = null;
};

console.log(timer_count);

startTimer();
