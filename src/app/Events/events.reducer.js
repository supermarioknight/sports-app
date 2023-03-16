import * as actions from "./events.actions";

const eventsInitState = {
  eventList: [],
  nodes: [],
  edges: [],
};

const handleAddNodeToList = (state, action) => {
  const { node } = action.payload;
  const newNodeList = [...state.nodes, node];
  return {
    ...state,
    nodes: newNodeList,
  };
};

const handleUpdateNode = (state, action) => {
  const { info, nodeId } = action.payload;
  const { nodes = [] } = state;
  const stateNodes = [...nodes];

  const updateIndex = stateNodes.findIndex((node) => node.id == nodeId);

  const foundNode = stateNodes[updateIndex];

  const updatedNode = {
    ...foundNode,
    data: {
      ...foundNode.data,
      info,
    },
  };

  stateNodes.splice(updateIndex, 1, updatedNode);

  return {
    ...state,
    nodes: stateNodes,
  };
};

const reducer = (state = eventsInitState, action) => {
  switch (action.type) {
    case actions.SAVE_NODE:
      return handleAddNodeToList(state, action);
    case actions.UPDATE_NODE:
      return handleUpdateNode(state, action);
    default:
      return state;
  }
};

export default reducer;
