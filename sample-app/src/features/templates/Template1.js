import React from 'react';
import PropTypes from 'prop-types';
import { ScenarioHelper } from 'scenario-handler';

export const Template1 = ({ scenarioHelper }) => {
	scenarioHelper.useEventTriggers(props);
	return (
		<div>
			<h3>header</h3>
			<div></div>
		</div>
	);
};

Template1.propTypes = {
	scenarioHelper: PropTypes.instanceOf(ScenarioHelper),
};
