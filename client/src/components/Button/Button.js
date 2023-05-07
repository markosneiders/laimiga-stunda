import "./Button.css";

function Button({ text, content, clickFunction }) {
	return (
		<div className="Button" onClick={clickFunction}>
			{text}
			{content}
		</div>
	);
}
export default Button;
