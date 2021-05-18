import ScenarioHandler from 'scenario-handler';

const scenarioGroup = {
	card1: {
		Page1: new Page(),
	},
};

export const myScenario = new ScenarioHandler.ScenarioHelper(scenarioGroup);
