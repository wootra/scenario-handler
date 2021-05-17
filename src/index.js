import { scenarioReducer } from './scenarioReducer';

export const useScenario = initState => {
	return {
		reducer: scenarioReducer(initState),
	};
};

export default ScenarioHelper;
