import React from "react";
import "./NavBar.css"; // import your custom CSS file
import { BsPersonCircle, BsQuestionCircle } from "react-icons/bs"; // import the help icon
import Button from "../Button/Button";

function NavBar({ helpFunction, profileFunction }) {
	const isMobile = window.innerWidth <= 768;

	function handleHelp() {
		helpFunction(true);
	}
	function handleProfile() {
		profileFunction(true);
	}
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<BsQuestionCircle
					onClick={handleHelp}
					className="navbar-icon"
					style={{
						fontSize: "36px",
						cursor: "pointer",
					}}
				/>
			</div>
			<div className="navbar-middle">
				{isMobile ? (
					<h1 className="navbar-title" style={{ fontSize: "24px" }}>
						Laimīgā stunda
					</h1>
				) : (
					<h1 className="navbar-title">Laimīgā stunda</h1>
				)}
			</div>
			<div className="navbar-right">
				{isMobile ? (
					<BsPersonCircle
						onClick={handleProfile}
						className="nav__login-icon"
						style={{
							fontSize: "28px",
						}}
					/>
				) : (
					<Button
						text={"Pieslēgties"}
						content={
							<BsPersonCircle
								style={{
									paddingLeft: "16px",
									fontSize: "28px",
								}}
								className="nav__login-icon"
							/>
						}
						clickFunction={handleProfile}
					/>
				)}
			</div>
		</nav>
	);
}

export default NavBar;
