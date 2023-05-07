import React, { useState } from "react";
import "./ApplyPop.css";
import { GrClose } from "react-icons/gr";

import InputField from "../InputField/InputField";
import Button from "../Button/Button";
function ApplyPop({ closeFunction, date, applyFunction }) {
	const [formData, setFormData] = useState({
		teacher: "",
		subject: "",
		test: "",
		status: "",
		st: [false, false],
		date: date,
	});
	const [warning, setWarning] = useState(false);
	function handleClose() {
		closeFunction(false);
	}
	function handleApply() {
		console.log(formData);
		if (
			formData.teacher != "" &&
			formData.subject != "" &&
			formData.test != "" &&
			formData.status != "" &&
			formData.st != [false, false]
		) {
			applyFunction(formData);
			handleClose();
		} else {
			setWarning(true);
		}
	}
	const handleTextInputChange = (name, value) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleMultipleChoiceChange = (name, index) => {
		const updatedArray = [...formData[name]];
		updatedArray[index] = !updatedArray[index];
		setFormData({ ...formData, [name]: updatedArray });
	};

	function formatDate(dateString) {
		const [day, month, year] = dateString.split("/");
		const date = new Date(year, month - 1, day);
		const options = { day: "numeric", month: "long" };
		const formattedDate = date.toLocaleString("lv-GB", options);
		return formattedDate;
	}
	return (
		<div className="ApplyPop">
			<div className="ApplyPop--background" onClick={handleClose}></div>
			<div className="ApplyPop--container">
				<div className="ApplyPop--close" onClick={handleClose}>
					<GrClose />
				</div>
				<div className="ApplyPop--titles">
					<div className="ApplyPop--titles_main">
						Pieteikšanās laimīgai stundai
					</div>
					<div className="ApplyPop--titles_sub">
						{formatDate(date)}
					</div>
				</div>

				<div className="ApplyPop--optionsContainer">
					<div style={{ marginRight: "32px", marginLeft: "32px" }}>
						<InputField
							label={"Skolotājs:"}
							options={["", "Sergejs Zembkovskis"]}
							value={formData.teacher}
							onChange={(e) =>
								handleTextInputChange("teacher", e)
							}
						/>
						<InputField
							label={"Priekšmets:"}
							options={["", "Programmēšana"]}
							value={formData.subject}
							onChange={(e) =>
								handleTextInputChange("subject", e)
							}
						/>
						<InputField
							label={"Darba temats:"}
							value={formData.test}
							onChange={(e) => handleTextInputChange("test", e)}
						/>
					</div>
					<div style={{ marginRight: "32px", marginLeft: "32px" }}>
						<InputField
							label={"Statuss:"}
							options={[
								"",
								"Nerakstīts darbs",
								"Vērtējumu uzlabošana",
							]}
							onChange={(e) => handleTextInputChange("status", e)}
						/>
						<InputField
							label={"Laiks:"}
							options={["15:30 - 16:10", "16:15 - 16:55"]}
							multipleChoice={true}
							value={formData.st}
							onChange={(e) =>
								handleMultipleChoiceChange("st", e)
							}
						/>
					</div>
				</div>
				<div className="ApplyPop--button">
					<Button text={"Pieteikties"} clickFunction={handleApply} />
				</div>
				<div className="ApplyPop--warning">
					{warning ? "Lūdzu aizpildiet visus laukus!" : null}
				</div>
			</div>
		</div>
	);
}

export default ApplyPop;
