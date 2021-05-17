/**
 * Events that Scenario Handler should do.
 * ex)
 */
export class ScenarioEvent {
	constructor(eventType) {
		this.eventType = eventType && eventType + 'EventType';
	}

	getEventType() {
		if (this.eventType) return this.eventType;
		else
			throw new Error(
				'ScenarioEvent should be extended. Do not use it purely.'
			);
	}
}
