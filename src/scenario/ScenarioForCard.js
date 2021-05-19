import { Scen } from './Scen';

export class ScenarioForCard {
	/**
	 *
	 * @param {string} cardName
	 */
	constructor(cardName) {
		this.cardName = cardName;
		this.pages = new Map();
	}

	/**
	 *
	 * @param {Scen} scenario
	 */
	addScens(scenario) {
		for (const pageName in scenario) {
			this.pages.set(pageName, scenario[pageName]);
		}
	}

	/**
	 *
	 * @param {string} page
	 * @returns {Scen}
	 */
	getScen(page) {
		return this.pages.get(page);
	}

	/**
	 *
	 * @returns {string}
	 */
	getCardName() {
		return this.cardName;
	}
}
