import React, { lazy } from 'react';
import { questionnaireAnswers } from '../../Helpers';

const Question = lazy(() => import('./Question'));

export default function Questions() {
	const [q1ResultVisible, setQ1ResultVisible] = React.useState(false);
	const [q2ResultVisible, setQ2ResultVisible] = React.useState(false);
	const [q3ResultVisible, setQ3ResultVisible] = React.useState(false);
	const [q4ResultVisible, setQ4ResultVisible] = React.useState(false);
	const [q5ResultVisible, setQ5ResultVisible] = React.useState(false);

	return (
		<section className="questionnaire-page__questionnaire">
			<Question
				answer1={questionnaireAnswers.q11}
				answer2={questionnaireAnswers.q12}
				heading="#1"
				option1="We clearly identified specific countries to focus our export sales in
				the next 3-5 years"
				option2="We haven't clearly selected the most promising markets for our products
				or services"
				resultVisible={q1ResultVisible}
				setResultVisible={setQ1ResultVisible}
			/>

			<Question
				answer1={questionnaireAnswers.q21}
				answer2={questionnaireAnswers.q22}
				heading="#2"
				option1="We produced export market research report for each of the markets we
					target"
				option2="We don’t really have written market research reports for our target
					markets"
				resultVisible={q2ResultVisible}
				setResultVisible={setQ2ResultVisible}
			/>

			<Question
				answer1={questionnaireAnswers.q31}
				answer2={questionnaireAnswers.q32}
				heading="#3"
				option1="	We identified all relevant importers on the target market for our
					products and establish contacts with them"
				option2="We still didn’t established contacts with all relevant importers on
					the target market interested for our offer"
				resultVisible={q3ResultVisible}
				setResultVisible={setQ3ResultVisible}
			/>

			<Question
				answer1={questionnaireAnswers.q41}
				answer2={questionnaireAnswers.q42}
				heading="#4"
				option1="We have Export Marketing Strategy in the form of official document
					with detailed plans and dedicated budget."
				option2="We don’t have an Export Marketing Strategy"
				resultVisible={q4ResultVisible}
				setResultVisible={setQ4ResultVisible}
			/>

			<Question
				answer1={questionnaireAnswers.q51}
				answer2={questionnaireAnswers.q52}
				heading="#5"
				option1="In our company stress is almost absent, people communicate fluently
					without conflicts and organisational climate is very positive."
				option2="In our company stress needs to be reduced, level of conflicts should
					be lower and organisational climate should be improved."
				resultVisible={q5ResultVisible}
				setResultVisible={setQ5ResultVisible}
			/>
		</section>
	);
}
