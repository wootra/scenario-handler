import { getScenarioWrapperId, getScenarioScenId } from '../idGenerator';
import { Scen } from '../scenario/Scen';

/**
 *
 * @param {string} cardName
 * @param {function(Scen, bool):Element} pageRender when second argument is true,
 * @param {Scen} prevScen
 * @param {Scen} nextScen
 */
export const FlipScenEffect = (cardName, pageRender, nextScen) => {
	const wrapperId = getScenarioWrapperId(cardName);
	const wrapper = document.getElementById(wrapperId);
	const currScenEl = wrapper.children[0];
	currScenEl.classList.add('flip-currSide');
	currScenEl.id = getScenarioScenId(cardName, 'front-currSide');
	const wrapperForFlip = document.createElement(
		'div',
		{ className: 'flip-wrapper' },
		[
			currScenEl,
			pageRender(nextScen, {
				className: 'flip-nextSide',
				id: getScenarioScenId(cardName, 'flip-nextSide'),
			}),
		]
	);
	warpper.appendChild(wrapperForFlip);

	return () =>
		new Promise(resolve => {
			currScenEl.classList.add('flip-front');
			setTimeout(resolve, 100);
		}).then(() => {
			return new Promise(resolve => {
				currScen.classList.add('flip-front');
			});
		});
};
