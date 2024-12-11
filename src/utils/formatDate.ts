export const formatDate = (inputDate: string | Date): string => {
	const localDate = new Date(inputDate);

	const day = localDate.getDate().toString().padStart(2, "0");
	const month = (localDate.getMonth() + 1).toString().padStart(2, "0");
	const year = localDate.getFullYear();
	const hours = localDate.getHours().toString().padStart(2, "0");
	const minutes = localDate.getMinutes().toString().padStart(2, "0");

	return `${day}.${month}.${year} ${hours}:${minutes}`;
};
