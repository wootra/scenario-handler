import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { useScenario } from 'scenario-handler';
import { myScenario } from '../myScenario';

const scenarioReducer = useScenario(myScenario);

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		scenario: scenarioReducer,
	},
});
