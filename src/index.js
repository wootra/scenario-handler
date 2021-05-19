import { Scen as __Scen } from './scenario/Scen';
import { ScenarioHelper as __ScenarioHelper } from './scenario/ScenarioHelper';
import { Scenario as __Scenario } from './scenario/Scenario';
import { useScenario as __useScenario } from './hooks';
import { SimpleButtonTriggerLook } from './events/SimpleButtonTriggerLook';
import { TriggerLook } from './events/TriggerLook';
import { EventTrigger } from './events/EventTrigger';
import { ScenMoveEventTrigger } from './events/ScenMoveEventTrigger';
export const useScenario = __useScenario;

export const ScenarioHelper = __ScenarioHelper;

export const Scenario = __Scenario;

export const Scen = __Scen;

export const TriggerLooks = {
	SimpleButtonTriggerLook,
	TriggerLook,
};

export const EventTriggers = {
	EventTrigger,
	ScenMoveEventTrigger,
};

export default {
	useScenario,
	ScenarioHelper,
	Scenario,
	Scen,
	TriggerLooks,
	EventTriggers,
};
