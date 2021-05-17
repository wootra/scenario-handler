import React from 'react';
import PropTypes from 'prop-types';
import { ScenarioHelper } from 'scenario-handler';

const Template = ({ scenarioHelper }) => {
	scenarioHelper.useEventTriggers(props);
	return (
		<div>
			<h3>header</h3>
			<div></div>
		</div>
	);
};

Template.propTypes = {
	scenarioHelper: PropTypes.instanceOf(ScenarioHelper),
};
