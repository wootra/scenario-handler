import { scenarioReducer } from './scenarioReducer';
import { Scen } from './scenario/Scen';
import { Scenario } from './Scenario';

/**
 *
 * @param {Scenario} scenario
 * @param {*} pageName
 * @param {*} dispatch
 * @returns
 */
export const runEvent = (scen, dispatch) => {
	const action = getObjectToDispatch();
	return (idx, data) => {};
};

export const runEventBuilder = (scen, dispatch) => {
	return runEvent(scen, dispatch);
};

/**
 *
 * @param {Scenario} scenario
 * @param {string} scenName
 * @param {function({type:string, data:*})} dispatch
 * @returns
 */
export const useScenario = (scenario, scenName, dispatch) => {
	const scen = scenario.getScen(scenName);

	return {
		reducer: scenarioReducer(scenario),
		runEvent: runEventBuilder(scen, dispatch),
	};
};
