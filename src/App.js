import React, { useState } from "react";
import "./App.css";

import Background from "./assets/images/Background.jpg";
import testData from "./testData.json";

import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import HelpPop from "./components/HelpPop/HelpPop";
import ProfilePop from "./components/ProfilePop/ProfilePop";
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
	const [showApply, setShowApply] = useState(false);

	function handleHelp(state) {
		setShowHelp(state);
	}
	function handleProfile(state) {
		setShowProfile(state);
	}
	function handleApply(state) {
		setShowApply(state[0]);
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
			<div
				className="card-view"
				style={isMobile ? { width: "90%" } : { width: "40%" }}
			>
				<div style={{ marginBottom: "76px" }} />
				{testData.map((data, index) => (
					<Card data={data} key={index} />
				))}
				<div style={{ marginTop: "16px" }} />
			</div>
		</div>
	);
}

export default App;
