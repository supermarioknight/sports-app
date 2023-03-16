import DeliverNode from "./DeliverNode";
import ReceiveNode from "./ReceiveNode";
import CrossBoundaryNode from "./CrossBoundaryNode/CrossBoundaryNode";

const NodeTypes = {
  deliverNode: DeliverNode,
  receiveNode: ReceiveNode,
  crossBoundaryNode: CrossBoundaryNode,
};

export default NodeTypes;
