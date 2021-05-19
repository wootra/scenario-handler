import { ScenarioEvent } from './ScenarioEvent';

/**
 * Events that Scenario Handler should do.
 * ex)
 */
export class ScenMoveScenarioEvent extends ScenarioEvent {
	/**
	 *
	 * @param {string} scenNameToMove Scen's name to move
	 */
	constructor(scenNameToMove) {
		super('ScenMove');
		this.scenNameToMove = scenNameToMove;
	}

	getEventType() {
		if (this.eventType) return this.eventType;
		else
			throw new Error(
				'ScenarioEvent should be extended. Do not use it purely.'
			);
	}
}
