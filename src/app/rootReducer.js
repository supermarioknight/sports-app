import { combineReducers } from 'redux';

import eventsReducer from './Events/events.reducer'

const rootReducer = combineReducers({
	events: eventsReducer
});

export default rootReducer;
