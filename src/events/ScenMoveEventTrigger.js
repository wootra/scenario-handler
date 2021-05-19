import { EventTrigger } from './EventTrigger';
import { SimpleButtonTriggerLook } from './SimpleButtonTriggerLook';
import { ScenMoveScenarioEvent } from './ScenMoveScenarioEvent';
export class ScenMoveEventTrigger extends EventTrigger {
	constructor({ ui = {}, eventData = {} }) {
		triggerLook = new SimpleButtonTriggerLook(ui);
		event = new ScenMoveScenarioEvent(eventData);
		super(triggerLook, event);
	}
}
