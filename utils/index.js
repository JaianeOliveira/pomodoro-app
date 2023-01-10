const getPomodoroSize = (minutes = pomodoro_size) => {
	return minutes * 60;
};

const getDisplayTimer = (pomodoro) => {
	let minutes = Math.floor(pomodoro / 60);
	let seconds = pomodoro;
	return `${minutes}:${seconds}`;
};
