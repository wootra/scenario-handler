import { Scen, Scenario, TransitionEffects } from 'scenario-handler';
import { Template1 } from './features/templates/Template1';

const textParser = data => data.text;
const labelParser = data => data.label;

const ScenNames = Object.freeze({
	SCEN1: 'SCEN1',
	SCEN2: 'SCEN2',
});

const buildMoveToTriggerInfo = moveTo => ({
	ui: {
		text: textParser,
		label: labelParser,
	},
	event: {
		pageToMove: moveTo,
		transitionEffect: TransitionEffects.FlipCardEffect,
	},
});

const commonDismissTriggerInfo = {
	ui: {
		text: 'Dismiss',
		label: 'dismiss',
	},
	event: {
		pageToMove: goBack,
		transitionEffect: TransitionEffects.refresh,
	},
};

const scen1 = new Scen(Template1, [
	buildMoveToTriggerInfo(ScenNames.SCEN2),
	commonDismissTriggerInfo,
]);

const scen2 = new Scen(Template2, [
	buildMoveToTriggerInfo(ScenNames.SCEN1),
	commonDismissTriggerInfo,
	,
]);

const scenario1 = {
	[ScenNames.SCEN1]: scen1,
	[ScenNames.SCEN2]: scen2,
};

const scenario2 = {
	[ScenNames.SCEN1]: scen1,
	[ScenNames.SCEN2]: scen2,
};

export const myScenario = new Scenario('Card1', {
	card1: new Scenario(scenario1),
	card2: scenario2,
});
export const cards = ['card1', 'card2', 'card3'];
