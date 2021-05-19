import React from 'react';
import PropTypes from 'prop-types';
import { ScenarioHelper } from 'scenario-handler';

export const ScenCard = () => {
	const { wrapperClass, wrapperClass2 } = useSelector(
		state => state.scenarioReducer.data
	);
	scenarioHelper.useEventTriggers(props);
	return (
		<div className={wrapperClass}>
			<div className={wrapperClass2}>
				<div>
					<h3>header</h3>
					<div></div>
				</div>
			</div>
		</div>
	);
};

ScenCard.propTypes = {
	scenarioHelper: PropTypes.instanceOf(ScenarioHelper),
};
