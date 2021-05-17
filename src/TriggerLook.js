export class TriggerLook {
	/**
	 * this class
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
}
