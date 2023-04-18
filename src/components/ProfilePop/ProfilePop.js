import "./ProfilePop.css";
import cardTestData from "../../cardTestData.json";

import { GrClose } from "react-icons/gr";
function ProfilePop({ closeFunction }) {
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
				<h1>Skolēna Profils</h1>
				<h2>123456-12345</h2>
				<h3>Pieteiktās laimīgās stundas: {cardTestData.length}</h3>
				<div className="ProfilePop-cards">
					{cardTestData.map((data, index) => (
						<div
							className="ProfilePop-card"
							style={
								isMobile
									? { width: "100%" }
									: { width: "calc(50%-32px)" }
							}
						>
							{formatDate(data.date)}
							<br />
							{data.st1Applied ? "15:30" : "16:15"}
							{" - "}
							{data.st2Applied ? "16:55" : "16:10"}
							<br />
							{data.subject}
							<br />
							{data.test}
							<div className="ProfilePop-card__button">
								Atcelt
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProfilePop;
