export interface IClaim {
	id: string | number;
	claimNumber: number;
	dateOfCreation: {
		created: string | Date;
		duration?: number;
	};
	dateOfControl: string | Date;
	dateOfCompletion: string | Date;
	system: string;
	claimKind: string;
	subject: {
		title: string;
		city: string;
		street: string;
	};
	claimText: string;
	claimCondition: "В работе" | "Просрочена" | "Есть отзыв" | "Выполнена";
	isTechnological: boolean;
	files: string[];
}
