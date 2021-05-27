import { TriggerLook } from './TriggerLook';
export class SimpleButtonTriggerLook extends TriggerLook {
	/**
	 * defines button trigger's look
	 * @param {import ('../typedefs/eventTypes').ButtonChildInfo} child
	 * @param {import ('../typedefs/eventTypes').ButtonLabelInfo} ariaLabel
	 */
	constructor(child, ariaLabel) {
		super('SimpleButton');
		this.child = child;
		this.ariaLabel = ariaLabel;
	}

	/**
	 * get child of the trigger element.
	 * @param {*} data dynamic data that is used in the template
	 * @return {[Element]|string|Element|null}
	 */
	getChild(data) {
		if (typeof this.child === 'function') return this.child(data);
		else return this.child;
	}

	/**
	 * get props of the trigger element
	 * @param {*} data dynamic data that is used in the template
	 * @return {object} props
	 */
	getProps(data) {
		return {
			['aria-label']:
				typeof this.ariaLabel === 'function' ? ariaLabel(data) : ariaLabel,
		};
	}
}
