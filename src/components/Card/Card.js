import React from "react";
import "./Card.css";
import ApplyPop from "../ApplyPop/ApplyPop";
function Card({ data, clickFunction, key }) {
	//If free spaces are less than warnThreshold, then card becomes orange
	const warnThreshold = 10;
	function formatDate(dateString) {
		const [day, month, year] = dateString.split("/");
		const date = new Date(year, month - 1, day);
		const options = { day: "numeric", month: "short" };
		const formattedDate = date.toLocaleString("lv-GB", options);
		return formattedDate;
	}

	function handleClick() {
		clickFunction([true, data.date]);
	}
	return (
		<div
			onClick={handleClick}
			className="Card"
			style={{
				background:
					data.st1 + data.st2 <
					data.st1Max + data.st2Max - warnThreshold
						? "radial-gradient(circle farthest-corner at 100% 0%, #C1FFC1 0%, #00C700 100%)"
						: data.st1 + data.st2 == data.st1Max + data.st2Max
						? "radial-gradient(circle farthest-corner at 100% 0%, #ffc3c3 0%, #ff4848 100%)"
						: "radial-gradient(circle farthest-corner at 100% 0%, #FFE0B2 0%, #FF9900 100%)",
			}}
		>
			<div style={{ position: "absolute", top: 8 }}>
				<div className="Card-title">{formatDate(data.date)}</div>
				<div className="Card-text">{data.location}</div>
			</div>

			<div
				className="Card-text"
				style={{ position: "absolute", bottom: 8 }}
			>
				{data.teacher}
			</div>
			<div
				className="Card-text"
				style={{
					position: "absolute",
					bottom: 8,
					right: 16,
					textAlign: "right",
				}}
			>
				1. {data.st1}/{data.st1Max}
				<br />
				2. {data.st2}/{data.st2Max}
			</div>
		</div>
	);
}

export default Card;
