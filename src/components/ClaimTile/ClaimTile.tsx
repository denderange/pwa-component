import ClaimHeader from "../ClaimHeader/ClaimHeader";
import { IClaim } from "../../types/claim.type";
import styles from "./ClaimTile.module.css";
import ClaimDescription from "../ClaimDescription/ClaimDescription";
import { formatDate } from "../../utils/formatDate";
import { formatDuration } from "../../utils/formatDuration";

const ClaimTile = ({ claim }: { claim: IClaim }) => {
	return (
		<article className={styles.tileContainer}>
			<ClaimHeader
				isTechnological={claim.isTechnological}
				condition={claim.claimCondition}
				claimNumber={claim.claimNumber}
			/>

			<div className={styles.infoContainer}>
				<div className={styles.info}>
					<div className={styles.textLight}>Создана:</div>
					<div>
						{formatDate(claim.dateOfCreation.created)}{" "}
						{claim.dateOfCreation.duration &&
							"(" + formatDuration(claim.dateOfCreation.duration) + ")"}
					</div>
				</div>
				<div className={styles.info}>
					<div className={styles.textLight}>Контроль:</div>
					<div>{formatDate(claim.dateOfControl)}</div>
				</div>
				<div className={styles.info}>
					<div className={styles.textLight}>Система:</div>
					<div>{claim.system}</div>
				</div>
				<div className={styles.info}>
					<div className={styles.textLight}>Объект:</div>
					<div>
						{claim.subject.title} {claim.subject.city} {claim.subject.street}
					</div>
				</div>
			</div>

			<ClaimDescription text={claim.claimText} />
		</article>
	);
};

export default ClaimTile;
