export const getScenarioWrapperId = (cardName, additionalId) => {
	return `shjeon0730-scenario-wrapper-id-${cardName}${
		additionalId && '-'
	}${additionalId}`;
};

export const getScenarioPageId = (cardName, additionalId) => {
	return `shjeon0730-scenario-page-id-${cardName}${
		additionalId && '-'
	}${additionalId}`;
};
