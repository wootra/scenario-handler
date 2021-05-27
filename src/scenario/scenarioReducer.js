import { ScenarioMoveEvents } from "../Events/ScenarioMoveEvents";

/**
 * create an action type that works with scenario reducer
 * @param {string} scenarioName
 * @param {string} actionType
 * @returns {string}
 */
export const buildActionType = (scenarioName, actionType) => {
	return `ScenarioHandler_${scenarioName}_${actionType}`;
};

/**
 * @callback ReducerLogic
 * @param {*} state
 * @param {{type: string}} actionObject
 * @return {*} manipulated state
 */

/**
 * convert the action names to the valid action name which doesn't overlap with the one in the other scenario.
 * @param {string} scenarioName name of the scenario
 * @param {Object.<string, ReducerLogic>} additionalCases object of reducer logics for the customized action types as keys.
 * @returns {Object.<string, ReducerLogic>} manipulated reducer logic with the valid action name for the scnario handler reducer
 */
export const buildAdditionalCases = (scenarioName, additionalCases) => {
	const newCases = {};
	if(additionalCases){
		if(typeof additionalCases === 'object'){
			for (const actionName in additionalCases) {
				newCases[buildActionType(scenarioName, actionName)] =
					additionalCases[actionName];
			}
		}else{
			throw new Error("additionalCases should be Object.<string,ReducerLogic>");
		}
	}
	return newCases;
};

/**
 * @typedef {{scenarioName: string, additionalCases: Object.<string, ReducerLogic>, initScenName: string}} ScenarioReducerConfig
 */

/**
 *
 * @param {ScenarioReducerConfig} initConfig
 */
export const buildScenarioReducer = initConfig => {
	const {scenario, additionalCases, initScenName} = initConfig;
	const scenarioName = scenario.name;
	const additionalCases = buildAdditionalCases(scenarioName, additionalCases);
	const goToNextScenAction = buildActionType(scenarioName, ScenarioMoveEvents.SCEN_MOVE_TO);
	const goToPrevScenAction = buildActionType(scenarioName, ScenarioMoveEvents.SCEN_MOVE_BACK);
	const stayScenAction = buildActionType(scenarioName, ScenarioMoveEvents.SCEN_STAY);

	const initSate = {
		prevScens = [],
		activeScen: initScenName
	};
	
	const reducer = (state = initSate, action) => {
		const {type, data} = action;
		if (type === goToNextScenAction) {
			if(state.activeScen) {
				state.prevScens.push(state.activeScen);
			}
			state = {
				...state,
				prevScens: state.activeScen ? [...state.prevScens, state.activeScen] : state.prevScens, 
				activeScen: action.data
			}
		}else if (type === goToPrevScenAction) {
			if(state.prevScens.length > 0) {
				const prevScen = state.prevScens.pop();
				state.prevScens = [...state.prevScens, state.activeScen];
			}
			state = {
				...state,
				prevScens: state.activeScen ? [...state.prevScens, state.activeScen] : state.prevScens, 
				activeScen: action.data
			}
		}else if (type === stayScenAction) {
			if(state.activeScen) {
				state.prevScens = [...state.prevScens, state.activeScen];
			}
			state = {
				...state,
				prevScens: state.activeScen ? [...state.prevScens, state.activeScen] : state.prevScens, 
				activeScen: action.data
			}
		}else if (additionalCases && additionalCases.length > 0) {
			
			additionalCases.forEach(aCase=>{
				state = aCase(state, action);
			});
		}
		return state;
	};

	const actions = {
		goToNextScen: (ScenToMove) => ({ type: goToNextScenAction, data: {
			ScenToMove
		} }),
		goToPrevScen: { type: goToPrevScenAction },
		stayScen: { type: stayScenAction }
	};
	
	return {actions, reducer};
};

export default {
	buildScenarioReducer,
}