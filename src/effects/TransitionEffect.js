/**
 * TransitionEffect class which defines effect name and transitioning animation of wrapper's className
 */
export class TransitionEffect {
	/**
	 *
	 * @param {string} name
	 * @param {function(): Promise} effectPromiseGenerator
	 */
	constructor(name, effectPromiseGenerator) {
		this.name = name;
		this.effectPromiseGenerator = effectPromiseGenerator;
	}
}

const a = new TransitionEffect('name');
