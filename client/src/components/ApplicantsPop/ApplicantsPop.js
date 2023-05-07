import "./ApplicantsPop.css";
import cardTestData from "../../cardTestData.json";
import Button from "../Button/Button";

import { GrClose } from "react-icons/gr";
function ApplicantsPop({ closeFunction }) {
	const isMobile = window.innerWidth <= 768;

	function handleClose() {
		closeFunction(false);
	}
	function formatDate(dateString) {
		const [day, month, year] = dateString.split("/");
		const date = new Date(year, month - 1, day);
		const options = { day: "numeric", month: "long" };
		const formattedDate = date.toLocaleString("lv-GB", options);
		return formattedDate;
	}
	return (
		<div className="ProfilePop">
			<div className="ProfilePop-background" onClick={handleClose}></div>
			<div className="ProfilePop-container">
				<div className="ProfilePop-close" onClick={handleClose}>
					<GrClose />
				</div>
				<h3>Pieteiktās laimīgās stundas: 1</h3>
				<div
					className="ProfilePop-card"
					style={
						isMobile
							? { width: "100%" }
							: { width: "calc(50%-32px)" }
					}
				>
					{formatDate("13/04/2023")}
					<br />
					15:30
					<br />
					Marko Sneiders
					<br />
					{"Laimiga stunda app"}
					<br />
					{"Nerakstīts darbs"}
					<div className="ProfilePop-card__button">
						<Button text={"Atcelt"} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ApplicantsPop;
