import { ScenarioEvent } from './ScenarioEvent';

/**
 * Events that Scenario Handler should do.
 * ex)
 */
export class PageMoveScenarioEvent extends ScenarioEvent {
	constructor() {
		super('PageMove');
	}

	getEventType() {
		if (this.eventType) return this.eventType;
		else
			throw new Error(
				'ScenarioEvent should be extended. Do not use it purely.'
			);
	}
}
