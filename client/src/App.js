import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

import Background from "./assets/images/Background.jpg";
import testData from "./testData.json";
import teachTestData from "./teachTestData.json";

import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import TeacherCard from "./components/TeacherCard/TeacherCard";
import HelpPop from "./components/HelpPop/HelpPop";
import ProfilePop from "./components/ProfilePop/ProfilePop";
import ApplyPop from "./components/ApplyPop/ApplyPop";
import ApplicantsPop from "./components/ApplicantsPop/ApplicantsPop";
import ConfirmPop from "./components/ConfirmPop/ConfirmPop";
import LogInPop from "./components/LogInPop/LogInPop";
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
	const [showApplicants, setShowApplicants] = useState(false);
	const [showApply, setShowApply] = useState([false, ""]);
	const [showConfirm, setShowConfirm] = useState([false, ""]);
	const [logInStatus, setLogInStatus] = useState(false);
	const [currentUser, setCurrentUser] = useState({
		pass: "",
		name: "",
		role: "",
	});

	function handleLogIn(password) {
		Axios.post("http://localhost:3001/login", {
			pass: password,
		}).then((response) => {
			if (response.data.message) {
				setLogInStatus(false);
			} else {
				setCurrentUser({
					pass: response.data[0].pass,
					name: response.data[0].name,
					role: response.data[0].role,
				});
				setLogInStatus(true);
				handleProfile(false);
			}
		});
	}

	function handleLogOut() {
		setCurrentUser({ pass: "", name: "", role: "" });
		setLogInStatus(false);
		handleProfile(false);
	}

	function handleHelp(state) {
		setShowHelp(state);
	}
	function handleProfile(state) {
		setShowProfile(state);
	}
	function handleApply(state) {
		if (logInStatus == true) {
			setShowApply(state);
		} else {
			handleProfile(true);
		}
	}
	function handleShowApplicants(state) {
		setShowApplicants(state);
	}
	function handleConfirm(state) {
		setShowConfirm(state);
	}
	function handleSendApply(data) {
		handleConfirm([true, data]);
		console.log(data);
	}

	Axios.defaults.withCredentials = true;

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
			{currentUser.name != "" ? (
				<NavBar
					helpFunction={handleHelp}
					profileFunction={handleProfile}
					navBarName={currentUser.name}
				/>
			) : (
				<NavBar
					helpFunction={handleHelp}
					profileFunction={handleProfile}
					navBarName={"Pieslēgties"}
				/>
			)}

			{showHelp && <HelpPop closeFunction={handleHelp} />}
			{logInStatus == false
				? showProfile && (
						<LogInPop
							closeFunction={handleProfile}
							logInFunction={handleLogIn}
							logInStatus={logInStatus}
						/>
				  )
				: showProfile && (
						<ProfilePop
							closeFunction={handleProfile}
							logOutFunction={handleLogOut}
							userData={currentUser}
						/>
				  )}

			{showApply[0] && (
				<ApplyPop
					date={showApply[1]}
					closeFunction={handleApply}
					applyFunction={handleSendApply}
				/>
			)}
			{showApplicants && (
				<ApplicantsPop closeFunction={handleShowApplicants} />
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
				{currentUser.role == "student" || logInStatus == false ? (
					<>
						<div className="card-view-top">
							Nākamās laimīgās stundas
						</div>
						{testData.map((data, index) => (
							<Card
								data={data}
								key={index}
								clickFunction={handleApply}
							/>
						))}
					</>
				) : (
					<>
						<h2>Sveicināti, {currentUser.name}!</h2>
						{teachTestData.map((data, index) => (
							<TeacherCard
								data={data}
								key={index}
								clickFunction={handleShowApplicants}
							/>
						))}
					</>
				)}

				<div style={{ marginTop: "80px" }} />
			</div>
		</div>
	);
}

export default App;
