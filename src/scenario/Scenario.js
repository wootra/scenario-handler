import { Scen } from './Scen';

/**
 * @typedef {import ('../typedefs/scenTypes').ScenOrScenInfo} ScenOrScenInfo
 */
export class Scenario {
	/**
	 *
	 * @param {string} scnarioName
	 * @param {Object.<string,ScenOrScenInfo>} scens
	 */
	constructor(scnarioName, scens) {
		this.scnarioName = scnarioName;
		this.scens = {};
		if (scens) {
			addScns(scens);
		}
	}

	/**
	 *
	 * @param {Object.<string, ScenOrScenInfo>} scens
	 */
	addScens(scens) {
		for (const scenName in scens) {
			const scen = scens[scenName];
			if (scen instanceof Scen) {
				if (scen.name !== scenName) {
					throw new Error(
						'name of Scen should be the same name with key of scens object.'
					);
				}
				this.scens[scenName] = scen;
			} else {
				this.scens[scenName] = new Scen(
					scenName,
					scen.template,
					scen.eventTriggers
				);
			}
		}
	}

	/**
	 * @param {string} scenName uniq name of the Scen
	 * @param {ScenOrScenInfo} scen
	 */
	addScen(scenName, scen) {
		if (scen instanceof Scen) {
			scen.setName(scenName);
			this.scens[scen.name] = scen;
		} else {
			const aScen = new Scen(scen.template, scen.eventTriggers);
			aScen.setName(scenName);
			this.scens[scen.name] = aScen;
		}
	}

	/**
	 *
	 * @param {string} scenName
	 * @returns {Scen}
	 */
	getScen(scenName) {
		return this.scens[scenName];
	}

	/**
	 *
	 * @returns {string}
	 */
	getName() {
		return this.scnarioName;
	}
}
