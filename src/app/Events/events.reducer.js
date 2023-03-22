import * as actions from "./events.actions";

const eventsInitState = {
  eventList: [],
  nodes: [],
  edges: [],
};

const initialJson = {
  activityType: "",
  activityName: "",
  teamsPlaying: [],
  deliveries: [],
  receives: [],
  actions: {
    scorings: [],
    blocks: [],
  },
};

const updateBaseActivityInEventReport = (state, data) => { // update later
  // console.log("this is updateBaseActivityInEventReport ----> ", {
  //   state,
  //   data,
  // });
  return data;
};

const buildEventReport = (type, data, state) => {
  switch (type) {
    case "TEAM_SPORTS_BALL_GAME":
      return updateBaseActivityInEventReport(state, data);
    case "DELIVER":
      break;
    case "RECEIVE":
      break;
    case "CROSS_BOUNDARY":
      break;
    case "BLOCK":
      break;

    default:
      return {};
  }
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

  const updatedEventReport = buildEventReport(foundNode.type, foundNode, state);

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
    eventReport: updatedEventReport,
  };
};

const handleUpdateNodePosition = (state, action) => {
  const { position, nodeId } = action.payload;
  const { nodes = [] } = state;
  const stateNodes = [...nodes];

  const updateIndex = stateNodes.findIndex((node) => node.id == nodeId);

  const foundNode = stateNodes[updateIndex];

  const updatedNode = {
    ...foundNode,
    position,
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
    case actions.UPDATE_NODE_POSITION:
      return handleUpdateNodePosition(state, action);
    default:
      return state;
  }
};

export default reducer;
