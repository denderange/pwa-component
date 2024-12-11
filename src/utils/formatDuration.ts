const getHourWord = (hours: number): string => {
	if (hours === 1 || (hours % 10 === 1 && hours % 100 !== 11)) {
		return "час";
	} else if (
		(hours >= 2 && hours <= 4) ||
		(hours % 10 >= 2 &&
			hours % 10 <= 4 &&
			(hours % 100 < 10 || hours % 100 >= 20))
	) {
		return "часа";
	} else {
		return "часов";
	}
};

const getDayWord = (days: number): string => {
	if (days === 1 || (days % 10 === 1 && days % 100 !== 11)) {
		return "день";
	} else if (
		(days >= 2 && days <= 4) ||
		(days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20))
	) {
		return "дня";
	} else {
		return "дней";
	}
};

export const formatDuration = (seconds: number): string => {
	const SECONDS_IN_HOUR = 3600;
	const SECONDS_IN_DAY = 86400;

	if (seconds < SECONDS_IN_DAY) {
		const hours = Math.floor(seconds / SECONDS_IN_HOUR);
		return `${hours} ${getHourWord(hours)}`;
	} else {
		const days = Math.floor(seconds / SECONDS_IN_DAY);
		return `${days} ${getDayWord(days)}`;
	}
};
