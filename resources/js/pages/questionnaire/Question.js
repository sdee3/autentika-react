import React from 'react';

export default function Question({
	answer1,
	answer2,
	heading,
	option1,
	option2,
	resultVisible,
	setResultVisible
}) {
	const [answer1Selected, setAnswer1Selected] = React.useState(false);
	const [answer2Selected, setAnswer2Selected] = React.useState(false);

	return (
		<div className="question container" onClick={() => setResultVisible(true)}>
			<h3>{heading}</h3>

			<label
				className="radio-container"
				onClick={() => {
					setAnswer1Selected(true);
					setAnswer2Selected(false);
				}}
			>
				{option1}
				<input type="radio" name="radio" />
				<span className="checkmark" />
			</label>

			<label
				className="radio-container"
				onClick={() => {
					setAnswer2Selected(true);
					setAnswer1Selected(false);
				}}
			>
				{option2}
				<input type="radio" name="radio" />
				<span className="checkmark" />
			</label>

			{resultVisible ? (
				<section className="question__answer">
					{answer1Selected ? <section>{answer1}</section> : null}
					{answer2Selected ? <section>{answer2}</section> : null}
				</section>
			) : null}
		</div>
	);
}
