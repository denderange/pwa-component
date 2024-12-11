import styles from "./ClaimHeader.module.css";
import GearImg from "../../assets/gear-svgrepo-com.svg?react";
import { formatNumberWithSymbol } from "../../utils/formatNumberWithSymbol";

interface IClaimProps {
	isTechnological: boolean;
	claimNumber: number;
	condition: "В работе" | "Просрочена" | "Есть отзыв" | "Выполнена";
}

const ClaimHeader = (claim: IClaimProps) => {
	const plateColorStyle = (condition: IClaimProps["condition"]) => {
		switch (condition) {
			case "В работе":
				return styles.inProgress;
			case "Просрочена":
				return styles.overdue;
			case "Есть отзыв":
				return styles.hasFeedback;
			case "Выполнена":
				return styles.completed;
			default:
				return "";
		}
	};

	return (
		<header className={styles.tileHeader}>
			<div className={`${styles.plate} ${plateColorStyle(claim.condition)}`}>
				{formatNumberWithSymbol(claim.claimNumber)}
			</div>
			<h4 className={styles.title}>{claim.condition}</h4>
			{claim.isTechnological && <GearImg className={styles.gearImage} />}
		</header>
	);
};

export default ClaimHeader;
