import React, { useState } from "react";
import "./App.css";

import Background from "./assets/images/Background.jpg";
import testData from "./testData.json";

import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import HelpPop from "./components/HelpPop/HelpPop";
import ProfilePop from "./components/ProfilePop/ProfilePop";
import ApplyPop from "./components/ApplyPop/ApplyPop";
import ConfirmPop from "./components/ConfirmPop/ConfirmPop";
//Card data format example
// const testData = {
// 	date: "13/04/2023", // Date in dd/mm/yyyy string
// 	location: "Konferenču zāle", // Location in string
// 	teacher: "Elīna Ozola", // Teacher in string
// 	st1: 40, // 1st lesson current applied student count
// 	st2: 40, // 2nd lesson current applied student count
// 	st1Max: 40, // 1st lesson max student count
// 	st2Max: 40, // 2nd lesson max student count
// };

function App() {
	const isMobile = window.innerWidth <= 768;
	const [showHelp, setShowHelp] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
	const [showApply, setShowApply] = useState([false, ""]);
	const [showConfirm, setShowConfirm] = useState([false, ""]);
	function handleHelp(state) {
		setShowHelp(state);
	}
	function handleProfile(state) {
		setShowProfile(state);
	}
	function handleApply(state) {
		setShowApply(state);
		console.log(state);
	}
	function handleConfirm(state) {
		setShowConfirm(state);
	}
	function handleSendApply(data) {
		handleConfirm([true, data]);
		console.log(data);
	}

	return (
		<div className="Main">
			{!isMobile ? (
				<img
					src={Background}
					style={{
						position: "absolute",
						width: "100%",
						height: "120%",
						objectFit: "cover",
						zIndex: -1,
					}}
				></img>
			) : null}
			<NavBar helpFunction={handleHelp} profileFunction={handleProfile} />
			{showHelp && <HelpPop closeFunction={handleHelp} />}
			{showProfile && <ProfilePop closeFunction={handleProfile} />}
			{showApply[0] && (
				<ApplyPop
					date={showApply[1]}
					closeFunction={handleApply}
					applyFunction={handleSendApply}
				/>
			)}
			{showConfirm[0] && (
				<ConfirmPop
					closeFunction={handleConfirm}
					data={showConfirm[1]}
				/>
			)}
			<div
				className="card-view"
				style={isMobile ? { width: "90%" } : { width: "40%" }}
			>
				<div className="card-view-top">Nākamās laimīgās stundas</div>
				{testData.map((data, index) => (
					<Card data={data} key={index} clickFunction={handleApply} />
				))}
				<div style={{ marginTop: "80px" }} />
			</div>
		</div>
	);
}

export default App;
