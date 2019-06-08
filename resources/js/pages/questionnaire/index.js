import React, { lazy } from 'react';

const Heading = lazy(() => import('./Heading'));
const Questions = lazy(() => import('./Questions'));

export default function Questionanire() {
	return (
		<section className="questionnaire-page">
			<Heading />
			<Questions />
		</section>
	);
}
