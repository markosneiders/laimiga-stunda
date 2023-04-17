import "./ApplyPop.css";
import { GrClose } from "react-icons/gr";
function ApplyPop({ closeFunction }) {
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
			</div>
		</div>
	);
}

export default ApplyPop;
