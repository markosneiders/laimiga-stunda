import React, { useState } from "react";
import "./LogInPop.css";
import { GrClose } from "react-icons/gr";
import Axios from "axios";
import Button from "../Button/Button";
import { TextField } from "@mui/material";

function LogInPop({ closeFunction }) {
	const [pass, setPass] = useState("");
	const [logInStatus, setLogInStatus] = useState(false);

	function handleClose() {
		closeFunction(false);
	}

	function logIn() {
		Axios.post("http://localhost:3001/login", {
			pass: pass,
		}).then((response) => {
			if (response.data.message) {
				setLogInStatus(false);
			} else {
				setLogInStatus(true);
			}
		});
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
				<Button clickFunction={logIn} text={"Pieslēgties"} />
				{logInStatus == false ? (
					<p style={{ color: "red" }}>{logInStatus}</p>
				) : (
					<p>{logInStatus}</p>
				)}
			</div>
		</div>
	);
}

export default LogInPop;
