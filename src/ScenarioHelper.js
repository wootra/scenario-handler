import { TransitionEffect } from './TransitionEffect';

export const runEvent = (pageScenario, pageName, dispatch) => {
	const action = getObjectToDispatch();
	return (idx, data) => {};
};

export const runEventBuilder = (pageScenario, dispatch) => {
	return runEvent(pageScenario, pageName, dispatch);
};

/**
 * @function
 * @name TransitionCallback
 * @param {Array<TransitionEffect>}
 */

export class ScenarioHelper {
	/**
	 *
	 * @param {{transition: TransitionCallback, scenarioData: object, cardName: string }} info
	 */
	constructor(info, dispatch) {
		const { transitions, scenarioData, cardName } = info;
		this.cardName = cardName;
		this.transitions = transitions;
		this.pageScenario = scenarioData[cardName];
		this.runEvent = runEventBuilder(this.pageScenario, dispatch);
	}
}
