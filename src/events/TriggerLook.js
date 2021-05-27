export class TriggerLook {
	/**
	 * this class which describe trigger's look.
	 * the default class is SimpleButtonTriggerLook class.
	 * you can extend this class to describe your own trigger look.
	 * and this information is going to be used in your Template component.
	 * @param {string} lookType
	 */
	constructor(lookType) {
		this.lookType = lookType && lookType + 'LookType';
	}

	getType() {
		if (this.lookType) return this.lookType;
		else
			throw new Error(
				'TriggerLook class should be extended to have specific shape'
			);
	}

	/**
	 * get props of the trigger element
	 * @param {*} data dynamic data that is used in the template
	 */
	getProps(data) {
		throw new Error('TriggerLook class should override getProps');
	}

	/**
	 * get child of the trigger element.
	 * @param {*} data dynamic data that is used in the template
	 * @return {[Element]|string|Element|null}
	 */
	getChild(data) {
		throw new Error('TriggerLook class should override getChild');
	}

	/**
	 * get trigger element itself. if this method is implemented, getChild and getProps will have no effect.
	 * if you want to create trigger element in the template, returns null for this method.
	 * @param {*} data dynamic data that is used in the template
	 * @returns {Element|null}
	 */
	getTriggerElement(data) {
		return null;
	}
}
