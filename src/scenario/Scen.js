import { EventTrigger } from '../events/EventTrigger';
import { ScenMoveEventTrigger } from '../events/ScenMoveEventTrigger';

/**
 * Scen is a stage that a part of UI will show. It is possible the UI transitions between Scens.
 */
export class Scen {
	/**
	 * create an instance for a Scen.
	 * @param {Element} template
	 * @param {[import('../typedefs/eventTypes').EventTriggerType]} eventTriggers eventTriggers
	 */
	constructor(template, eventTriggers) {
		this.name = 'undefined';
		this.template = template;
		this.eventTriggers = eventTriggers.map(aTrigger => {
			if (aTrigger instanceof EventTrigger) {
				return aTrigger;
			} else {
				return new ScenMoveEventTrigger(aTrigger);
			}
		});
	}

	/**
	 * set name of the Scen. it is set when Scen is added in the Scenario.
	 * @param {string} scenName
	 */
	setName(scenName) {
		this.name = scenName;
	}
}
