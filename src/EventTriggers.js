import { ScenarioEvent } from './ScenarioEvent';
import { TriggerLook } from './TriggerLook';

/**
 * @typedef {Object<string, function(object):string|Element> | string | Element} UIDescription
 */

export class EventTrigger {
	/**
	 *
	 * @param {TriggerLook} triggerLook describe trigger's look & feel so Template can use it. ex) for Button, button text, aria-label...
	 * @param {ScenarioEvent} event event that
	 */
	constructor(triggerLook, event) {
		this.triggerLook = triggerLook;
		this.event = event;
	}
}
