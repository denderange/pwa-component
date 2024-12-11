export const formatNumberWithSymbol = (value: number): string => {
	return `№ ${value.toLocaleString("ru-RU").replace(/,/g, " ")}`;
};
