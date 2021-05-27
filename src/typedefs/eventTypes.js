import { EventTrigger } from '../events/EventTrigger';
import { ScenarioEvent } from '../Events/ScenarioEvent';
import { TriggerLook } from '../events/TriggerLook';

/**
 * @typedef {'SCEN_MOVE_BACK'|'SCEN_STAY'} ScenarioMoveBackOrStayItem
 */

/**
 * callback function which creates button's child element or string.
 * @callback ButtonChildCreator
 * @param {*} data
 * @return {Element|string}
 */

/**
 * callback function which creates button's aria-label
 * @callback LabelCreator
 * @param {*} data
 * @return {string}
 */

/**
 * button's child info.
 * @typedef {Element|string|ButtonChildCreator} ButtonChildInfo
 */

/**
 * @typedef {string|LabelCreator} ButtonLabelInfo
 */

/**
 * @typedef {{child: ButtonChildInfo, ariaLabel: ButtonLabelInfo}} SimpleButtonTriggerLookInfo
 */

/**
 * @typedef {string} ScenName
 */

/**
 * @typedef {{moveTo: ScenName}|ScenarioMoveBackOrStayItem} ScenMoveScenarioEvent
 */

/**
 * @typedef {{triggerLook: SimpleButtonTriggerLookInfo | TriggerLook, event: ScenMoveScenarioEvent|ScenarioEvent}} DefaultEventTriggerInfo
 */

/**
 * @typedef {EventTrigger|DefaultEventTriggerInfo} EventTriggerType
 */
