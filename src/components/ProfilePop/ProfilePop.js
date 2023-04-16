import "./ProfilePop.css";
import Button from "../Button/Button";

import { GrClose } from "react-icons/gr";
function ProfilePop({ closeFunction }) {
	const isMobile = window.innerWidth <= 768;
	function handleClose() {
		closeFunction(false);
	}
	return (
		<div className="ProfilePop">
			<div className="ProfilePop-background" onClick={handleClose}></div>
			<div className="ProfilePop-container">
				<div className="ProfilePop-close" onClick={handleClose}>
					<GrClose />
				</div>
				<h1>Skolēna Profils</h1>
				<h2>123456-12345</h2>
				<h3>Pieteiktās laimīgās stundas: 3</h3>
				<div className="ProfilePop-cards">
					<div className="ProfilePop-card">
						17. februāris
						<br />
						15:30 - 16:55
						<br />
						Matemātika ll
						<br />
						Integrēšana
						<div className="ProfilePop-card__button">Atcelt</div>
					</div>
					<div className="ProfilePop-card">
						17. februāris
						<br />
						15:30 - 16:55
						<br />
						Matemātika ll
						<br />
						Integrēšana
						<div className="ProfilePop-card__button">Atcelt</div>
					</div>
					<div className="ProfilePop-card">
						17. februāris
						<br />
						15:30 - 16:55
						<br />
						Matemātika ll
						<br />
						Integrēšana
						<div className="ProfilePop-card__button">Atcelt</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePop;
