import React, { useState } from "react";
import "./InputField.css";
const InputField = ({ label, value, onChange, multipleChoice, options }) => {
	const [inputValue, setInputValue] = useState(value);

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
		onChange(newValue);
	};

	return (
		<div className="Container">
			<label style={{ marginTop: "12px" }}>{label}</label>
			{!options ? (
				<input
					type="text"
					className="Input--Text"
					value={inputValue}
					onChange={handleInputChange}
				/>
			) : null}
			{options && multipleChoice ? (
				<div className="Input--Check">
					{options.map((data, index) => (
						<div style={{ margin: "4px" }}>
							<input type="checkbox" />
							<label>{data}</label>
						</div>
					))}
				</div>
			) : null}
			{options && !multipleChoice ? (
				<select className="Input--Drop">
					{options.map((data, index) => (
						<option value={data}>{data}</option>
					))}
				</select>
			) : null}
		</div>
	);
};

export default InputField;
