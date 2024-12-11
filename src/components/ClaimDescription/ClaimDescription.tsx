import { useState } from "react";
import styles from "./ClaimDescription.module.css";

interface Props {
	text: string;
}

const ClaimDescription = ({ text }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleText = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className={styles.textBlock}>
			<div
				className={`${styles.textContent} ${
					isExpanded ? styles.expanded : ""
				}`}>
				{text}
			</div>
			<div
				onClick={toggleText}
				className={styles.readMore}>
				{isExpanded ? "▲  Свернуть" : "▼  Читать далее"}
			</div>
		</div>
	);
};

export default ClaimDescription;
