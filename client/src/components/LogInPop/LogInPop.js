import React, { useEffect, useState } from "react";
import "./LogInPop.css";
import { GrClose } from "react-icons/gr";
import Button from "../Button/Button";
import { TextField } from "@mui/material";

function LogInPop({ closeFunction, logInFunction, logInStatus }) {
	const [pass, setPass] = useState();

	function handleClose() {
		closeFunction(false);
	}

	return (
		<div className="LogInPop">
			<div className="LogInPop-background" onClick={handleClose}></div>
			<div className="LogInPop-container">
				<div className="LogInPop-close" onClick={handleClose}>
					<GrClose />
				</div>
				<h1>Pieslēgties</h1>
				<TextField
					onChange={(e) => {
						setPass(e.target.value);
					}}
					id="standard-basic"
					label="Personas Kods"
					variant="standard"
				/>
				<div style={{ height: "20px" }}></div>
				<Button
					clickFunction={() => logInFunction(pass)}
					text={"Pieslēgties"}
				/>
				{logInStatus == false ? (
					<p style={{ color: "red" }}>Netika atrasts lietotājs</p>
				) : (
					<p></p>
				)}
			</div>
		</div>
	);
}

export default LogInPop;
