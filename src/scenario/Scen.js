import { EventTrigger } from '../events/EventTrigger';

export class Scen {
	/**
	 *
	 * @param {string} name
	 * @param {Element} template
	 * @param {EventTrigger} eventTriggers
	 */
	constructor(name, template, eventTriggers) {
		this.name = name;
		this.template = template;
		this.eventTriggers = eventTriggers;
	}
}
