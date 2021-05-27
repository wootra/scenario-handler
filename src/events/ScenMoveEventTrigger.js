import { EventTrigger } from './EventTrigger';
import { SimpleButtonTriggerLook } from './SimpleButtonTriggerLook';
import { ScenMoveScenarioEvent } from './ScenMoveScenarioEvent';
import { TriggerLook } from './TriggerLook';
import { ScenarioEvent } from './ScenarioEvent';
import { ScenarioMoveEvents } from './ScenarioMoveEvents';

export class ScenMoveEventTrigger extends EventTrigger {
	/**
	 * create a ScenMoveEventTrigger
	 * @param {import ('../typedefs/eventTypes').DefaultEventTriggerInfo} eventTriggerConfig
	 */
	constructor(eventTriggerConfig) {
		if (eventTriggerConfig.triggerLook instanceof TriggerLook) {
			this.triggerLook = eventTriggerConfig.triggerLook;
		} else {
			this.triggerLook = new SimpleButtonTriggerLook(
				eventTriggerConfig.triggerLook
			);
		}

		if (eventTriggerConfig.event instanceof ScenarioEvent) {
			this.event = eventTriggerConfig.event;
		} else {
			// in this case, the event is a default event which is move event.
			if (typeof eventTriggerConfig.event === 'object') {
				if (eventTriggerConfig.event.moveTo) {
					this.event = new ScenMoveScenarioEvent(
						ScenarioMoveEvents.SCEN_MOVE_TO,
						eventTriggerConfig.event.moveTo
					);
				} else {
					throw new Error(
						'eventTriggerConfig.event is object but not for ScenMoveScenarioEvent. create a new event extending ScenarioEvent or use { moveTo: "scen\'s Name to move" }'
					);
				}
			} else if (typeof eventTriggerConfig.event === 'string') {
				if (
					[
						ScenarioMoveEvents.SCEN_MOVE_BACK,
						ScenarioMoveEvents.SCEN_STAY,
					].includes(eventTriggerConfig.event)
				) {
					this.event = new ScenMoveScenarioEvent(eventTriggerConfig.event);
				}
			} else {
				throw new Error('eventTriggerConfig.event is not object nor string.');
			}
		}

		super(this.triggerLook, this.event);
	}
}
