import DeliverNode from "./DeliverNode";
import ReceiveNode from "./ReceiveNode";
import CrossBoundaryNode from "./CrossBoundaryNode";
import TeamSportsBallGameNode from "./TeamSportsBallGameNode";
import BlockNode from "./BlockNode";

const NodeTypes = {
  DELIVER: DeliverNode,
  RECEIVE: ReceiveNode,
  CROSS_BOUNDARY: CrossBoundaryNode,
  TEAM_SPORTS_BALL_GAME: TeamSportsBallGameNode,
  BLOCK: BlockNode,
};

export default NodeTypes;
