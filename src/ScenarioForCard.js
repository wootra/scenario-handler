import { Page } from './Page';

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
	 * @param {Page} scenario
	 */
	addPages(scenario) {
		for (const pageName in scenario) {
			this.pages.set(pageName, scenario[pageName]);
		}
	}

	/**
	 *
	 * @param {string} page
	 * @returns {Page}
	 */
	getPage(page) {
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
