import React, { useState } from "react";
import "./ApplyPop.css";
import { GrClose } from "react-icons/gr";

import InputField from "../InputField/InputField";
import teachers from "../../teachers.json";
import Button from "../Button/Button";
function ApplyPop({ closeFunction, date }) {
	const [formData, setFormData] = useState({
		skolotajs: "",
		prieksmets: "",
		darbaTemats: "",
		statuss: [],
		laiks: [],
	});
	function handleClose() {
		closeFunction(false);
	}
	function handleApply() {
		console.log(formData);
	}
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleMultipleChoiceChange = (name, value) => {
		const prevValues = formData[name];
		let newValues;

		if (prevValues.includes(value)) {
			newValues = prevValues.filter((v) => v !== value);
		} else {
			newValues = [...prevValues, value];
		}

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: newValues,
		}));
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
						<InputField label={"Skolotājs:"} options={teachers} />
						<InputField label={"Priekšmets:"} options={teachers} />
						<InputField
							label={"Darba temats:"}
							value={formData.darbaTemats}
							onChange={(value) =>
								setFormData("darbaTemats", value)
							}
						/>
					</div>
					<div style={{ marginRight: "32px", marginLeft: "32px" }}>
						<InputField
							label={"Statuss:"}
							options={[
								"Nerakstīts darbs",
								"Vērtējumu uzlabošana",
							]}
							multipleChoice={true}
						/>
						<InputField
							label={"Laiks:"}
							options={["15:30 - 16:10", "16:15 - 16:55"]}
							multipleChoice={true}
							value={formData.laiks}
							onChange={(value) =>
								handleMultipleChoiceChange("laiks", "value")
							}
						/>
					</div>
				</div>
				<div className="ApplyPop--button">
					<Button text={"Pieteikties"} clickFunction={handleApply} />
				</div>
			</div>
		</div>
	);
}

export default ApplyPop;
