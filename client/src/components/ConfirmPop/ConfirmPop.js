import "./ConfirmPop.css";
import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { RingLoader } from "react-spinners";

import { GrClose } from "react-icons/gr";
function ConfirmPop({ closeFunction, data }) {
	const [confirmed, setConfirmed] = useState(false);
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
		<div className="ConfirmPop">
			<div className="ConfirmPop-background" onClick={handleClose}></div>
			<div className="ConfirmPop-container">
				<div className="ConfirmPop-close" onClick={handleClose}>
					<GrClose />
				</div>
				<div className="ConfirmPop-title">
					Pieteikšanās laimīgai stundai
				</div>
				{confirmed ? (
					<>
						<div className="ConfirmPop-sub">
							Pieteikšanās veiksmīga
						</div>
						<p>
							{formatDate(data.date)}
							<br />
							{data.st[0] ? "15:30" : "16:15"}
							{" - "}
							{data.st[1] ? "16:55" : "16:10"}
							<br />
							{data.subject}
							<br />
							{data.test}
						</p>
						<BsCheckLg
							style={{
								fontSize: "36px",
								color: "green",
							}}
						/>
					</>
				) : (
					<RingLoader color="#007bff" className="ConfirmPop-loader" />
				)}
			</div>
		</div>
	);
}

export default ConfirmPop;
