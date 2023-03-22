import React from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import { useDispatch } from "react-redux";

import "reactflow/dist/style.css";
import { updateNodePosition } from "../../app/Events/events.actionCreators";

const FlowGraph = ({
  nodes = [],
  edges = [],
  onNodesChange,
  onEdgesChange,
  onConnect,
  nodeTypes = {},
}) => {
  const dispatch = useDispatch();

  const handleUpdateNodePosition = (updatedNode) => {
    const { position, id } = updatedNode;
    dispatch(updateNodePosition({ position, nodeId: id }));
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      defaultEdgeOptions={{
        animated: true,
        style: {
          stroke: "black",
        },
      }}
      nodeTypes={nodeTypes}
      onNodeDragStop={(_, node) => handleUpdateNodePosition(node)}
    >
      <Controls />
      <MiniMap />
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  );
};

export default FlowGraph;
