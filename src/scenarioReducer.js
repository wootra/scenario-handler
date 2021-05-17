const init = {};
const pageState = Object.freeze({
	currPage: null,
	lastCalledEventTrigger: -1,
});

/**
 *
 * @param {{cards: Object.<string, any>}} initConfig
 */
export const scenarioReducer = initConfig => {
	const { cards } = initConfig;
	const cardsInitObj = {};
	for (const cardName in cards) {
		cardsInitObj[cardName] = { ...pageState }; //new object
	}

	const fixedInitState = {
		activeCard: null,
		cards: cardsInitObj,
	};

	return (stateOrg = { ...init, ...fixedInitState }, action) => {
		let state = stateOrg;

		switch (action.type) {
		}

		return state;
	};
};
