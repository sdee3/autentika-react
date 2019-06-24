import React from 'react';

import axios from 'axios';

const quillModules = {
	toolbar: [
		[{ header: [1, 2, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[
			{ list: 'ordered' },
			{ list: 'bullet' },
			{ indent: '-1' },
			{ indent: '+1' }
		],
		['link', 'image'],
		['clean']
	]
};

const quillFormats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image'
];

const createCookie = (cookieName, cookieValue, daysToExpire) => {
	const date = new Date();
	date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
	document.cookie =
		cookieName + '=' + cookieValue + '; expires=' + date.toGMTString();
};

const fetchCookie = cookieName => {
	let name = cookieName + '=';
	let allCookieArray = document.cookie.split(';');

	for (let i = 0; i < allCookieArray.length; i++) {
		let temp = allCookieArray[i].trim();

		if (temp.indexOf(name) === 0) {
			return temp.substring(name.length, temp.length);
		}
	}

	return '';
};

const isAuthenticated = () => {
	return fetchCookie('x-auth').length > 0;
};

const validateCookie = () => {
	return new Promise((resolve, reject) => {
		axios
			.post('/api/validate-cookie', { cookie: fetchCookie('x-auth') })
			.then(res => resolve(res.data))
			.catch(err => reject(err.response));
	});
};

const validateArticle = article => {
	return new Promise((resolve, reject) => {
		if (article.title.length) {
			if (article.caption.length) {
				if (article.slug.length) {
					if (article.content.length) {
						if (article.cover_url.length) {
							return resolve();
						} else {
							reject('Missing cover image URL in the form!');
						}
					} else {
						reject('Missing content in the form!');
					}
				} else {
					reject('Missing slug in the form!');
				}
			} else {
				reject('Missing caption in the form!');
			}
		} else {
			reject('Missing title in the form!');
		}
	});
};

const areInputsValid = (name, email, message) => {
	if (name.length) {
		if (email.length) {
			let re = /\S+@\S+\.\S+/;
			if (re.test(email)) {
				if (message.length) {
					return true;
				} else {
					return 'The message field is required, but missing! Please try again.';
				}
			} else {
				return 'The email address is invalid! Please try again.';
			}
		} else {
			return 'The email address field is required, but missing! Please try again.';
		}
	} else {
		return 'The name field is required, but missing! Please try again.';
	}
};

const questionnaireAnswers = {
	q11: (
		<>
			<p>
				Great! Although every reliable buyer is more than welcomed it is always
				good to conquer markets one by one until you become truly international.
				Be sure that in the selection of your target markets you included at
				least indicators such as:
			</p>
			<ul>
				<li>
					Real size of market for your product (both - import size and
					consumption size)
				</li>
				<li>
					Recent and expected growth of the target market for the type of
					products you sell
				</li>
				<li>Level of competition on the market</li>
				<li>Legal barriers to trade</li>
				<li>Buyer requirements</li>
				<li>Number of existing and potential direct importers</li>
				<li>Price developments</li>
				<li>
					Expected development of the segments which are consuming products you
					sell
				</li>
			</ul>
			<p>
				If you miss data or methodology for any of the indicators contact us to
				help you select the markets with the best potential for your company.
			</p>
		</>
	),
	q12: (
		<>
			<p>
				That’s OK if you have remarkable offer and buyers from all over the
				world waiting in line for your product. However if you are struggling
				with your export sales we recommend to firstly select the most
				attractive markets for your product. Be aware that the largest or the
				closest market to you are not always the best choice.
			</p>
			<p>
				You also need to consider other factors such as market growth, level of
				competition, common buyer requirements, legal requirements, price
				competitiveness and trends influencing demand.
			</p>
			<p>
				We can help you and conduct preliminary export research for you to
				suggest specific markets with the best potential for your product. Even
				better we can teach you how to do this analysis alone.
			</p>
		</>
	),
	q21: (
		<>
			<p>
				Fantastic! You belong to the small group of companies which is actually
				keep findings about their target markets in the form of customised
				market reports. Still you can use our advice below to check if important
				details are included in your report:
			</p>
			<ul>
				<li>
					Be sure that your market intelligence system is regularly updated. For
					example international trade statistics should be updated monthly and
					price development even more frequently. Major trends and list of
					potential buyers should be monitored constantly.
				</li>
				<li>
					Keep market report in &quot;shareable&quot; format so more of your
					reliable staff can have access to it and provide inputs. This will
					enrich the knowledge and stimulate team work. Also in case someone
					from your export department leave the company you will need less time
					to train the new employees.
				</li>
				<li>
					Don’t forget to include at least those chapters in your report: ◦
					International trade statistics and outlook (specifically for your
					product on the target market)
					<ul>
						<li>
							Insights about competition and their market shares (for both
							country and company level)
						</li>
						<li>Trends influencing demand</li>
						<li>Importers requirements</li>
						<li>
							Clear picture about market segments (including consumption shares
							for each segment)
						</li>
						<li>Real export/import prices and their monitoring</li>
						<li>
							Description of competitors and their activities on target market
						</li>
						<li>List of current buyers and their suppliers</li>
					</ul>
				</li>
			</ul>
			<p>
				If you miss some data we can help either by conducting export market
				research for you or by teaching you to improve your research skills.
			</p>
		</>
	),
	q22: (
		<>
			<p>
				Than you need to start with a production of your first export report
				which can help you to make the best decisions. Sometimes export report
				will lead you to the decision to give up on one market and focus on
				another one. Even if you conclude that you are not export ready for some
				markets investing into export market research is still valuable because
				it can prevent you from wasting time and money on the wrong markets.
			</p>
			<p>
				Learn more about important aspects of export market research and ways
				how we can help you.
			</p>
		</>
	),
	q31: (
		<>
			<p>
				Very good! We really hope that you established a personal contact with
				your potential partners. Ideally you travelled and met your prospects in
				their companies and they returned a visit to you. Having a complete list
				of your potential buyers in the target market will give you a clear
				picture of &quot;who is who&quot; in your business segment.
			</p>
			<p>
				Also it is important to know what is really happening with your product
				after imports and who are the final users served by your importer. In
				some cases your importer will not give you a full picture as you can
				make a shortcut and reach final segments more quickly without
				intermediaries.
			</p>
			<p>
				If you need any help in finding the right match or to better understand
				whole supply chain just contact us.
			</p>
		</>
	),
	q32: (
		<>
			<p>
				In order to strategically conquer the market it is important to select
				the right contacts. You can do it in 3 steps:
			</p>
			<ol>
				<li>Identify all direct importers in your target market</li>
				<li>
					Make personal contacts with decision makers in identified companies
				</li>
				<li>Communicate and learn about their preferences</li>
				<li>
					Filter the list and select those companies which provide the best
					potential for your growth in the target market
				</li>
				<li>
					Develop a strategic approach to establish long-term partnership with
					your new buyers
				</li>
			</ol>
			<p>We can cut your time and help you find right international buyers.</p>
		</>
	),
	q41: (
		<>
			<p>
				Excellent! Export Marketing Strategy is a rarity especially among small
				and medium companies. You can very quickly review your strategy by
				reading this short list:
			</p>
			<ul>
				<li>
					Strategy needs to be based on the previous export market research and
					identification of the target markets for your export.
				</li>
				<li>
					Export strategy needs to be flexible and reviewed at least once per
					year. International market is dynamic with frequent changes.
				</li>
				<li>
					Do not base your export strategy on old fashioned and static models
					such as SWOT. Instead use approaches offering natural flexibility and
					authentic choices according to market and life dynamics. Examples of
					some approaches we use are transactional analysis, scenario planning
					and getting things done.
				</li>
			</ul>
			<p>
				If you need advice on creating practical export strategies dealing with
				different market scenarios contact us for more.
			</p>
		</>
	),
	q42: (
		<>
			<p>
				We can help you create one. Also you can create strategy alone and here
				are some steps and principles:
			</p>
			<ol>
				<li>
					Identify your target markets. Do not make your strategy for exporting
					to 195 countries (current number of countries in the world). Base your
					export strategy on the limited number of the previously selected
					markets. Number of selected markets will naturally grow over time but
					firstly focus strategically on the markets with the highest potential
					for your export offer.
				</li>
				<li>
					Export market research of the selected markets must be a base for your
					strategy. This will help you to use statistics and other insights for
					clever decisions. Good market research will generate ideas for finding
					market niches and creating offers differently than your competition.
				</li>
				<li>
					Establishing contacts with international buyers will help you gain
					specific insights for practical activities. Your export marketing
					strategy should aim at the satisfaction of the needs of industrial and
					final consumers of your products. Contacts with buyers in the export
					markets will also clarify your understanding of necessary requirements
					and help you make good action plan.
				</li>
				<li>
					Do not make your strategy alone. Strategy must be based on the shared
					values. In strategy development process include people from all
					company levels. Co-creation will additional improve a team spirit of
					your company and make strategy workable.
				</li>
				<li>
					Make strategy actionable. Analysis, vision, mission, general and
					specific objectives do not make a strategy. Strategy must include real
					actions for your next days, weeks and months.
				</li>
			</ol>
			<p>
				Contact us to guide you through the whole export marketing strategy
				development process.
			</p>
		</>
	),
	q51: (
		<>
			<p>
				Congratulations! We don’t have anything to add. If your team is
				motivated, satisfied and balancing well between private and business
				life you belong to one happy organisation. Just keep going like that!
			</p>
		</>
	),
	q52: (
		<>
			<p>
				It is important that people within organisation are motivated, trust
				each other and work in harmony. In order to improve organisational
				climate and make your export business not only profitable but also funny
				and enjoyable consider implementing some of the following activities:
			</p>
			<ul>
				<li>
					Include a big team into the export strategy development process. When
					people are actively included into co-creation of common future
					motivation and loyalty is naturally improved.
				</li>
				<li>
					Perform organisational assessment by the independent consultant who is
					skilled in some of the organisational and social psychological
					approaches.
				</li>
				<li>
					Perform some simulation exercises by the independent consultant to
					better understand group dynamics and training/coaching needs of
					company management and employees.
				</li>
				<li>
					Based on the individual and group assessments create action plan with
					tailored activities for your organisational needs. Those activities
					can include training, management and/or employees coaching, stress
					release activities and team building activities.
				</li>
			</ul>
			<p>Learn more about our approach by contacting us down below!</p>
		</>
	)
};

export {
	areInputsValid,
	isAuthenticated,
	fetchCookie,
	createCookie,
	validateCookie,
	validateArticle,
	quillFormats,
	quillModules,
	questionnaireAnswers
};
