import { UPDATE_NODE, SAVE_NODE } from './events.actions';

export const saveNode = ({node}) => {
	return {
		type: SAVE_NODE,
		payload: {
			node
		}
	};
};
export const updateNode = ({info, nodeId}) => {
	return {
		type: UPDATE_NODE,
		payload: {
			info,
			nodeId
		}
	};
};