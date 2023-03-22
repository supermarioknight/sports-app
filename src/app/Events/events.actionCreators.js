import { UPDATE_NODE, SAVE_NODE, UPDATE_NODE_POSITION } from "./events.actions";

export const saveNode = ({ node }) => {
  return {
    type: SAVE_NODE,
    payload: {
      node,
    },
  };
};
export const updateNode = ({ info, nodeId }) => {
  return {
    type: UPDATE_NODE,
    payload: {
      info,
      nodeId,
    },
  };
};
export const updateNodePosition = ({ position, nodeId }) => {
  return {
    type: UPDATE_NODE_POSITION,
    payload: {
      position,
      nodeId,
    },
  };
};
