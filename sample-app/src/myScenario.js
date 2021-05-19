import {
	Scen,
	ScenarioHelper,
	EventTriggers,
	TransitionEffects,
} from 'scenario-handler';
import { Template1 } from './Template1';

const textParser = data => data.text;
const labelParser = data => data.label;

const Scen1 = new Scen(
	'Scen1',
	Template1,
	new EventTriggers.ScenMoveEventTrigger({
		ui: {
			text: textParser,
			label: labelParser,
		},
		event: {
			pageToMove: 'Scen2',
			transitionEffect: TransitionEffects.FlipCardEffect,
		},
	})
);

export const myScenario = new ScenarioHelper({
	Card1: [Scen1],
});
