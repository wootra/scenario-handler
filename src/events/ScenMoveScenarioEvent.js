import { ScenarioEvent } from './ScenarioEvent';
import { ScenarioMoveEvents } from './ScenarioMoveEvents';

/**
 * Move to other Scen
 */
export class ScenMoveScenarioEvent extends ScenarioEvent {
	/**
	 * create an event which describe which Scen to move
	 * @param {import('./ScenarioMoveEvents').ScenarioMoveEventsItem} scenarioMoveEventType one of ScenarioMoveEvents type
	 * @param {string} scenNameToMove
	 */
	constructor(scenarioMoveEventType, scenNameToMove) {
		super(scenarioMoveEventType);
		this.scenNameToMove = scenNameToMove;
	}
}
