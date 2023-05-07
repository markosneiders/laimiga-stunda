import "./HelpPop.css";

import { GrClose } from "react-icons/gr";
function HelpPop({ closeFunction }) {
	function handleClose() {
		closeFunction(false);
	}
	return (
		<div className="HelpPop">
			<div className="HelpPop-background" onClick={handleClose}></div>
			<div className="HelpPop-container">
				<div className="HelpPop-close" onClick={handleClose}>
					<GrClose />
				</div>
				<h1>Pamācība</h1>
				<h2>
					Lai pieteiktos laimīgajai stundai vajag pieslēgties
					izmantojot savu personas kodu
				</h2>
				<h2>
					Piesakoties laimīgajai stundai aizpildi visus lauciņus un
					nospiediet pieteikties.
				</h2>
				<h2>
					Savā profilā varat redzēt visas laimīgās stundas uz kurām
					esi pieteicies.
				</h2>
			</div>
		</div>
	);
}

export default HelpPop;
