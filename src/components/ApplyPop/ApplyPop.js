import "./ApplyPop.css";
import { GrClose } from "react-icons/gr";

import InputField from "../InputField/InputField";
import teachers from "../../teachers.json";
function ApplyPop({ closeFunction, date }) {
	function handleClose() {
		closeFunction(false);
	}
	return (
		<div className="ApplyPop">
			<div className="ApplyPop-background" onClick={handleClose}></div>
			<div className="ApplyPop-container">
				<div className="ApplyPop-close" onClick={handleClose}>
					<GrClose />
				</div>
				<h3>{date}</h3>
				<InputField label={"Skolotājs:"} options={teachers} />
				<InputField label={"Priekšmets:"} options={teachers} />
				<InputField label={"Darba temats:"} />
				<InputField
					label={"Statuss:"}
					options={["Nerakstīts darbs", "Vērtējumu uzlabošana"]}
					multipleChoice={true}
				/>
				<InputField
					label={"Laiks:"}
					options={["15:30 - 16:10", "16:15 - 16:55"]}
					multipleChoice={true}
				/>
			</div>
		</div>
	);
}

export default ApplyPop;
