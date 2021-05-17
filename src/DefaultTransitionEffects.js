import { getScenarioWrapperId, getScenarioPageId } from './idGenerator';
import { Page } from './Page';

/**
 *
 * @param {string} cardName
 * @param {function(Page, bool):Element} pageRender when second argument is true,
 * @param {Page} prevPage
 * @param {Page} nextPage
 */
export const FlipPageEffect = (cardName, pageRender, nextPage) => {
	const wrapperId = getScenarioWrapperId(cardName);
	const wrapper = document.getElementById(wrapperId);
	const currPageEl = wrapper.children[0];
	currPageEl.classList.add('flip-currSide');
	currPageEl.id = getScenarioPageId(cardName, 'front-currSide');
	const wrapperForFlip = document.createElement(
		'div',
		{ className: 'flip-wrapper' },
		[
			currPageEl,
			pageRender(nextPage, {
				className: 'flip-nextSide',
				id: getScenarioPageId(cardName, 'flip-nextSide'),
			}),
		]
	);
	warpper.appendChild(wrapperForFlip);

	return () =>
		new Promise(resolve => {
			currPageEl.classList.add('flip-front');
			setTimeout(resolve, 100);
		}).then(() => {
			return new Promise(resolve => {
				currPage.classList.add('flip-front');
			});
		});
};
