import { Scen } from './Scen';

/**
 * @callback ActiveScenParser
 * @param {object} data
 * @param {Scen} prevScen
 * @param {Scen} nextScen
 * @return {Scen}
 */

/**
 * @typedef Scenario
 */
export class Scenario {
	/**
	 *
	 * @param {{activeScenParser: ActiveScenParser, scens: Array<Scen>}} scenario
	 */
	constructor(scenario) {
		const { activeScenParser, scens } = scenario;
		this.activeScenParser = activeScenParser;
		this.scensMap = new Map();
		for (const scen of scens) {
			this.scensMap.set(scen.name, scen);
		}
		this.activeScen = null;
	}

	/**
	 *
	 * @param {string} scenName
	 * @returns {Scen}
	 */
	getScen(scenName) {
		return this.scensMap(scenName);
	}

	/**
	 * return activeScen based on data
	 * @param {object} data
	 * @param {Scen} prevScen
	 * @param {Scen} nextScen
	 * @returns {Scen}
	 */
	calcActiveScen(data, prevScen, nextScen) {
		return this.activeScenParser(data, prevScen, nextScen);
	}

	/**
	 * return saved active scen
	 * @returns {Scen}
	 */
	getActiveScen() {
		return this.activeScen;
	}

	/**
	 * save activeScen
	 * @param {Scen} scen
	 */
	setActiveScen(scen) {
		this.activeScen = scen;
	}
}
