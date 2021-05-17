export class SimpleButtonTriggerLook extends TriggerLook {
	/**
	 *
	 * @param {string|function(object):string|Element} child
	 * @param {string|function(object):string} ariaLabel
	 */
	constructor(child, ariaLabel) {
		super('SimpleButton');
		this.child = child;
		this.ariaLabel = ariaLabel;
	}

	/**
	 * get child as an element or a string from data object if child is a function
	 * @param {object} data
	 * @returns {string|Element}
	 */
	getText(data) {
		if (typeof this.child === 'function') return this.child(data);
		else return this.child;
	}

	/**
	 * get aria label string
	 * @param {object} data
	 * @returns {string}
	 */
	getAriaLabel(data) {
		if (typeof this.ariaLabel === 'function') return this.ariaLabel(data);
		else return this.ariaLabel;
	}
}
