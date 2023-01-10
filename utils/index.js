const getPomodoroSize = (minutes = pomodoro_size) => {
	return minutes * 60;
};

const getDisplayTimer = (pomodoro) => {
	let minutes = Math.floor(pomodoro / 60);
	let seconds = pomodoro - minutes * 60;
	return `${minutes >= 10 ? minutes : `0${minutes}`}:${
		seconds >= 10 ? seconds : `0${seconds}`
	}`;
};
