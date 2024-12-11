import { useEffect, useState } from "react";
import ClaimTile from "./components/ClaimTile/ClaimTile";
import { IClaim } from "./types/claim.type";

function App() {
	const [claims, setClaims] = useState<IClaim[]>([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch(
					"https://api.jsonsilo.com/public/263b713d-78b6-467d-98ef-679b058f744c"
				);
				const data = await res.json();

				setClaims(data);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	return (
		<div className='wrapper'>
			{claims.map((claim) => (
				<ClaimTile
					claim={claim}
					key={claim.id}
				/>
			))}
		</div>
	);
}

export default App;
